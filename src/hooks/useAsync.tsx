import { useEffect, useState } from 'react';

interface AsyncState<T> {
  data: T | null;
  error: Error | null;
  isLoading: boolean;
  isSuccess: boolean; 
}

function useAsync<T>(asyncFunction: () => Promise<T>) {
  const [asyncState, setAsyncState] = useState<AsyncState<T>>({
    data: null,
    error: null,
    isLoading: false,
    isSuccess: false, 
  });

  useEffect(() => {
    const fetchData = async () => {
      setAsyncState((prevState) => ({ ...prevState, isLoading: true }));
      try {
        const data = await asyncFunction();
        setAsyncState({ data, error: null, isLoading: false, isSuccess: true });
      } catch (error) {
        setAsyncState({ data: null, error: error as Error, isLoading: false, isSuccess: false });
      }
    };

    fetchData();
  }, [asyncFunction]);

  return {
    run: asyncFunction,
    ...asyncState,
  };
}

export default useAsync;
