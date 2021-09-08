import React from 'react';

import {PlusIcon} from '@eruditorgroup/profi-icons';

import styles from './AddFilesLabel.module.css';

type AddFilesLabelProps = {
  canAddFiles: boolean;
  onClick: () => void;
};

const AddFilesLabel = ({
  canAddFiles,
  onClick,
}: AddFilesLabelProps): React.ReactElement => {
  if (!canAddFiles) return null;

  return (
    <div className={styles['label']} onClick={onClick}>
      <PlusIcon className={styles['icon']} />
    </div>
  );
};

export default AddFilesLabel;
