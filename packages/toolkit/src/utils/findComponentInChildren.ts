import React, {FunctionComponent, ReactElement} from 'react';

function isReactElement<T>(
    Component: React.ReactNode,
  ): Component is ReactElement<T, FunctionComponent> {
    return (Component as ReactElement)?.type !== undefined;
  }
  
  // eslint-disable-next-line @typescript-eslint/ban-types
  export const getChild = (Component: React.ReactNode): React.FunctionComponent<{}> => {
    if (isReactElement(Component)) {
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