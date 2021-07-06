import React, {FunctionComponent, ReactElement} from 'react';

function isReactElement<T>(
  Component: React.ReactNode,
): Component is ReactElement<T, FunctionComponent> {
  return (Component as ReactElement)?.type !== undefined;
}

export const getChildDisplayName = (Component: React.ReactNode): string => {
  if (isReactElement(Component)) {
    const {type} = Component;
    if (typeof type === 'string') {
      return '';
    } else {
      return type.displayName || type.name || 'Component';
    }
  }

  return '';
};

export const findChildByName = (
  children: React.ReactNode,
  name: string | undefined,
): React.ReactNode => {
  if (!name) {
    return null;
  }
  return React.Children.toArray(children).find(
    (child) => getChildDisplayName(child) === name,
  );
};
