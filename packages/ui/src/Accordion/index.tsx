import React, {useEffect, useRef, useState} from 'react';
import cx from 'classnames';
import {
  Title,
  ListItemProps,
  TitleProps,
  Button,
} from '@eruditorgroup/profi-ui';

import {useControllableState} from '@eruditorgroup/profi-toolkit';
import {ChevronDownIcon} from '@eruditorgroup/profi-icons';

import styles from './Accordion.module.scss';

export interface AccordionProps extends Omit<ListItemProps, 'onChange'> {
  children: React.ReactNode;
  heading: React.ReactNode;
  opened?: boolean;
  size?: TitleProps['size'];
  defaultOpened?: boolean;
  onChange?: (opened: boolean) => void;
}

export const Accordion: React.FC<AccordionProps> = ({
  heading,
  children,
  size = 'xl',
  opened: openedProp,
  defaultOpened = false,
  onChange: onChangeProp,
}) => {
  const contentRef = useRef<HTMLDivElement | undefined>();
  const [height, setHeight] = useState<number | undefined>(undefined);
  const [opened, setOpened] = useControllableState({
    value: openedProp,
    defaultValue: defaultOpened,
    onChange: onChangeProp,
  });

  useEffect(() => {
    const updateHeight = () => {
      if (contentRef.current?.scrollHeight) {
        // first load, set height of element and hide it
        setHeight(contentRef.current.scrollHeight);
      }
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  });

  return (
    <>
      <Title
        role="button"
        size={size}
        className={styles['title']}
        onClick={() => setOpened(!opened)}
      >
        <span className={styles['heading']}>{heading}</span>
        <ChevronDownIcon
          className={cx(styles['arrow'], opened && styles['arrow-opened'])}
        />
      </Title>
      <div
        ref={contentRef}
        style={{height: opened ? height : 0}}
        className={cx(styles['content'], opened && styles['content-opened'])}
      >
        {children}
      </div>
    </>
  );
};

export default Accordion;
