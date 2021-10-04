import {createContext, useContext} from 'react';

interface FullscreenContextType {
  handleClose: () => void;
  handleFocus: () => void;
  value: string;
}

export const FullscreenContext = createContext<FullscreenContextType | null>(null);

export const useFullscreenContext = (): FullscreenContextType => {
  const context = useContext(FullscreenContext);
  if (!context) throw new Error('Context "ListContext" not found');
  return context;
};

interface ActiveInputContextType
  extends React.InputHTMLAttributes<HTMLInputElement> {
  setInputRef: (arg: HTMLInputElement) => void;
}

export const ActiveInputContext = createContext<ActiveInputContextType | null>(null);

export const useActiveInputContext = (): ActiveInputContextType => {
  const context = useContext(ActiveInputContext);
  if (!context) throw new Error('Context "ListContext" not found');
  return context;
};
