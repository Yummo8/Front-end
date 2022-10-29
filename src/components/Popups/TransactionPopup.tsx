import React, {useContext} from 'react';
import {AlertCircle, CheckCircle} from 'react-feather';
import styled, {ThemeContext} from 'styled-components';
import {useWallet} from 'use-wallet';
import config from '../../config';

const RowNoFlex = styled.div`
  flex-wrap: nowrap;
`;

export default function TransactionPopup({
  hash,
  success,
  summary,
}: {
  hash: string;
  success?: boolean;
  summary?: string;
}) {
  const {chainId} = useWallet();
  const theme = useContext(ThemeContext);

  return (
    <RowNoFlex>
      <div>
        {success ? <CheckCircle color={theme.color.teal[200]} size={24} /> : <AlertCircle color="#FF6871" size={24} />}
        <StyledPopupDesc>{summary ?? 'Hash: ' + hash.slice(0, 8) + '...' + hash.slice(58, 65)}</StyledPopupDesc>
        {chainId && (
          <StyledLink target="_blank" href={`${config.ftmscanUrl}/tx/${hash}`}>
            <br />
            View on Snowtrace
          </StyledLink>
        )}
      </div>
    </RowNoFlex>
  );
}

const StyledPopupDesc = styled.span`
  font-weight: 500;
  color: ${(props) => props.theme.color.grey[300]};
`;

const StyledLink = styled.a`
  color: ${(props) => props.theme.color.grey[500]};
`;
