import React from 'react';

interface IProps {
  children: JSX.Element;
}

const RestModalSlot: React.FC<IProps> = ({children}) => {
  return children;
};

RestModalSlot.displayName = 'RestModalSlot';

export default RestModalSlot;
