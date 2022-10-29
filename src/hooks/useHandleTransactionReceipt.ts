import {useCallback} from 'react';
import {JsonRpcProvider, TransactionResponse} from '@ethersproject/providers';
import {useTransactionAdder} from '../state/transactions/hooks';
import {useAddPopup} from '../state/application/hooks';
import {publish} from '../state/txEvent';

function useHandleTransactionReceipt(): (promise: Promise<TransactionResponse>, summary: string) => void {
  const addTransaction = useTransactionAdder();
  const addPopup = useAddPopup();

  return useCallback(
    (promise: Promise<TransactionResponse>, summary: string) => {
      promise
        .then((tx) => {
          addTransaction(tx, {summary});
        })
        .catch((err) => {
          if (err.message.includes('User denied')) {
            const message = `User Denied`;
            addPopup({error: {message, stack: err.message || err.stack}});
            publish('failedTx');
            return;
          }
          const message = `Unable to ${summary[0].toLowerCase()}${summary.slice(1)}`;
          console.error(`${message}: ${err.message || err.stack}`);
          addPopup({error: {message, stack: err.message || err.stack}});
          publish('failedTx');
        });
    },
    [addPopup, addTransaction],
  );
}

export default useHandleTransactionReceipt;
