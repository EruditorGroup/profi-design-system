import React from 'react';

interface ISuggestionListSlotProps {
  children: JSX.Element;
}

const SuggestionListSlot: React.FC<ISuggestionListSlotProps> = ({children}) => {
  return children;
};

SuggestionListSlot.displayName = 'SuggestionListSlot';

export default SuggestionListSlot;