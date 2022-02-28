import {createContext, MouseEventHandler, useContext} from 'react';

interface ModalContextType {
  handleClose: MouseEventHandler<HTMLElement>;
  handleBack?: MouseEventHandler<HTMLElement>;
}

export const ModalContext = createContext<ModalContextType | null>(null);

export const useModalContext = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) throw new Error('Context "ListContext" not found');
  return context;
};
