import React, {useEffect, useRef, useState} from 'react';
import cx from 'classnames';
import {Text, TextProps} from '@eruditorgroup/profi-ui';

import {useControllableState} from '@eruditorgroup/profi-toolkit';
import {ChevronDownIcon} from '@eruditorgroup/profi-icons';

import styles from './Accordion.module.scss';

export interface AccordionProps extends Omit<TextProps, 'onChange'> {
  children?: React.ReactNode;
  heading: React.ReactNode;
  opened?: boolean;
  defaultOpened?: boolean;
  design?: 'link' | 'block';
  onChange?: (opened: boolean) => void;
}

export const Accordion: React.FC<AccordionProps> = ({
  heading,
  children,
  className,
  opened: openedProp,
  defaultOpened = false,
  design = 'link',
  onChange: onChangeProp,
  ...props
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
      <Text
        role="button"
        className={cx(styles['title'], styles[`design-${design}`], className)}
        onClick={() => setOpened(!opened)}
        {...props}
      >
        <span className={styles['heading']}>{heading}</span>
        <ChevronDownIcon
          className={cx(styles['arrow'], opened && styles['arrow-opened'])}
        />
      </Text>
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
