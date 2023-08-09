import { useEffect } from 'react';
import { useAppSelector } from '..';
import { processErrorHandle } from '../../services/process-error-handle';
import { Status } from '../../constants';
import { State } from '../../types';

const useStatusError = (fn: (state: State) => string, text: string) => {
  const status = useAppSelector(fn);

  useEffect(() => {
    if (status === Status.Error) {
      processErrorHandle(text);
    }
  }, [status, text]);
};

export { useStatusError };
