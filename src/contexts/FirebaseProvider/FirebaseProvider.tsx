import React, {createContext, useEffect, useState} from 'react';
import {useWallet} from 'use-wallet';
import firebaseConfig from '../../firebase/config.json';
import {FirebaseHelper} from '../../firebase/FirebaseHelper';

export interface FirebaseContext {
  firebase?: FirebaseHelper;
}

export const Context = createContext<FirebaseContext>({firebase: null});

export const FirebaseProvider: React.FC = ({children}) => {
  const {ethereum, account} = useWallet();
  const [firebase, setFirebase] = useState<FirebaseHelper>();

  useEffect(() => {
    if (!firebase) {
      const firebaseHelper = new FirebaseHelper(account, firebaseConfig);
      setFirebase(firebaseHelper);
    }
  }, [account, ethereum, firebase]);

  return <Context.Provider value={{firebase}}>{children}</Context.Provider>;
};
