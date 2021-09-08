import React from 'react';
import cx from 'classnames';

import {Text} from '../../';
import {FileAttachIcon} from '@eruditorgroup/profi-icons';
import {makeFileName} from './helpers';

import styles from './FilePreview.module.css';

type Props = {
  readonly fileName?: string;
  readonly className?: string;
  readonly classFileName?: string;
  readonly nameLength?: number;
};

const FilePreview = ({
  fileName,
  className,
  classFileName,
  nameLength,
}: Props): React.ReactElement => {
  return (
    <div className={cx(styles['root'], className)}>
      <FileAttachIcon className={styles['fileAttached']} />
      <Text className={cx(styles['fileName'], classFileName)}>
        {makeFileName(fileName, nameLength)}
      </Text>
    </div>
  );
};

export default FilePreview;
