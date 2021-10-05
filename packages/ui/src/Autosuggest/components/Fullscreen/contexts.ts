import {createContext, useContext} from 'react';

interface FullscreenContextType {
  handleClose: () => void;
  handleFocus: () => void;
  setInputRef: (arg: HTMLInputElement) => void;
  value: string;
}

export const FullscreenContext = createContext<FullscreenContextType | null>(
  null,
);

export const useFullscreenContext = (): FullscreenContextType => {
  const context = useContext(FullscreenContext);
  if (!context) throw new Error('Context "FullscreenContext" not found');
  return context;
};
