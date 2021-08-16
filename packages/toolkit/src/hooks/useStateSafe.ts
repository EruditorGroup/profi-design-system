import {Dispatch, SetStateAction, useRef, useState, useEffect} from 'react';

/**
 * Данный хук нужен, когда мы хотим изменить состояние компонента на завершение асинхронного действия.
 * По выполнению асинхронного действия мы не можем гарантировать, что компонент все еще находится в DOM,
 * поэтому желательно избежать вызова setState на разуманеченном компоненте.
 * Данный хук изменяет стейт только если компонент находится в DOM.
 */
export default function <T>(initialValue: T): [T, Dispatch<SetStateAction<T>>] {
  const isMounted = useRef(false);
  const [state, setState] = useState<T>(initialValue);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  });

  const setStateSafe = useRef((newState: SetStateAction<T>) => {
    if (isMounted.current) {
      setState(newState);
    }
  });

  return [state, setStateSafe.current];
}
