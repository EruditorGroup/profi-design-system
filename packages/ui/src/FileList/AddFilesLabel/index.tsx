import React from 'react';

import {PlusIcon} from '@eruditorgroup/profi-icons';

import styles from './AddFilesLabel.module.css';

type AddFilesLabelProps = {
  onClick: () => void;
};

const AddFilesLabel = ({onClick}: AddFilesLabelProps): React.ReactElement => {
  return (
    <div className={styles['label']} onClick={onClick}>
      <PlusIcon className={styles['icon']} />
    </div>
  );
};

export default AddFilesLabel;
