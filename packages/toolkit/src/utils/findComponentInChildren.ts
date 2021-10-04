import React from 'react';

export const getChild = (
  Component: React.ReactNode,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): React.JSXElementConstructor<any> => {
  if (React.isValidElement(Component)) {
    const {type} = Component;
    if (typeof type === 'string') {
      return null;
    } else {
      return type;
    }
  }

  return null;
};

export const findComponentInChildren = <T>(
  children: React.ReactNode,
  component: React.FC<T>,
): React.ReactNode => {
  if (!component) {
    return null;
  }
  return React.Children.toArray(children).find(
    (child) => getChild(child) === component,
  );
};
