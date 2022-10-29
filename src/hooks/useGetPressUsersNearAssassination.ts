import {useEffect, useState} from 'react';
import useGrapeFinance from './useGrapeFinance';
import {PressUserInfo} from '../grape-finance/types';
import useRefresh from './useRefresh';

const useGetPressUsersNearAssassination = (press: string) => {
  const [users, setUsers] = useState<string[]>();
  const {slowRefresh} = useRefresh();
  const grapeFinance = useGrapeFinance();

  useEffect(() => {
    async function fetchUsers() {
      try {
        if (grapeFinance.myAccount) {
          setUsers(await grapeFinance.getAllUsersNearAssassination(press));
        }
      } catch (err) {
        console.error(err);
      }
    }
    fetchUsers();
  }, [setUsers, grapeFinance, slowRefresh, grapeFinance.myAccount]);

  return users;
};

export default useGetPressUsersNearAssassination;
