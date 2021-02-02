import {useEffect} from 'react';

export default function useTestHook() {
  useEffect(() => console.log('test hook!'), []);
}
