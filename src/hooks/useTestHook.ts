import {useEffect} from 'react';

export default function useTestHook() {
  useEffect(() => console.log("I'm test hook"), []);
}
