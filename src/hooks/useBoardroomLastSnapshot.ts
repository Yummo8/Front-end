import {useEffect, useState} from 'react';
import useGrapeFinance from './useGrapeFinance';
import useRefresh from './useRefresh';

const useBoardroomLastSnapshot = () => {
  const [lastSnapshot, setLastSnapshot] = useState<Number>(0);
  const grapeFinance = useGrapeFinance();
  const {slowRefresh} = useRefresh();

  useEffect(() => {
    async function fetchLastSnapshot() {
      try {
        setLastSnapshot(await grapeFinance.getBoardroomLatestSnapshotIndex());
      } catch (err) {
        console.error(err);
      }
    }
    fetchLastSnapshot();
  }, [setLastSnapshot, grapeFinance, slowRefresh]);

  return lastSnapshot;
};

export default useBoardroomLastSnapshot;
