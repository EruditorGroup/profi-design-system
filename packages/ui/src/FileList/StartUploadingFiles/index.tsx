import React from 'react';
import {PlusIcon} from '@eruditorgroup/profi-icons';
import cx from 'classnames';

import type {IDropzoneDesign} from '../index';

import styles from './StartUploadingFiles.module.scss';

type Props = {
  onClick: () => void;
  children?: React.ReactNode;
  design?: IDropzoneDesign;
};

const StartUploadingFiles = ({
  onClick,
  children,
  design = 'area',
}: Props): React.ReactElement => {
  return (
    <div
      className={cx(styles['root'], design && styles[`design-${design}`])}
      onClick={onClick}
    >
      <div className={styles['content']}>
        {design === 'button' && children}
        <PlusIcon
          className={cx(styles['icon'], styles[`design-${design}__icon`])}
        />
        {design === 'area' && children}
      </div>
    </div>
  );
};

export default StartUploadingFiles;
