function estimateSwap(
  address beefyVault,
  address tokenIn,
  uint256 fullInvestmentIn
)
  view
  returns (
    uint256 swapAmountIn,
    uint256 swapAmountOut,
    address swapTokenOut
  )
{
  (, IUniswapV2Pair pair) = _getVaultPair(beefyVault);

  bool isInputA = pair.token0() == tokenIn;
  require(isInputA || pair.token1() == tokenIn, 'Beefy: Input token not present in liquidity pair');

  (uint256 reserveA, uint256 reserveB, ) = pair.getReserves();
  (reserveA, reserveB) = isInputA ? (reserveA, reserveB) : (reserveB, reserveA);

  swapAmountIn = _getSwapAmount(fullInvestmentIn, reserveA, reserveB);
  swapAmountOut = router.getAmountOut(swapAmountIn, reserveA, reserveB);
  swapTokenOut = isInputA ? pair.token1() : pair.token0();
}

function _getSwapAmount(
  uint256 investmentA,
  uint256 reserveA,
  uint256 reserveB
) view returns (uint256 swapAmount) {
  uint256 halfInvestment = investmentA / 2;
  uint256 nominator = router.getAmountOut(halfInvestment, reserveA, reserveB);
  uint256 denominator = router.quote(halfInvestment, reserveA.add(halfInvestment), reserveB.sub(nominator));
  swapAmount = investmentA.sub(Babylonian.sqrt((halfInvestment * halfInvestment * nominator) / denominator));
}

// i = tokenA investment
// h = half of tokenA investment
// n = corresponding number of tokenB (extcall)
// d = price quote after adding h to reserve of tokenA and removing n from reserve of tokenB
// s = i - sqrt((h * h * n) / d)
