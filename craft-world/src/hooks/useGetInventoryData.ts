import { useCallback } from 'react';

const useGetInitialInventoryData = (size: number) => {
  const getInventory = useCallback(() => {
    return Array.from(Array(size).keys());
  }, [size]);

  return getInventory;
};

export default useGetInitialInventoryData;
