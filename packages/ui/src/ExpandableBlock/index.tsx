import {useControllableState} from '@eruditorgroup/profi-toolkit';
import * as React from 'react';
import cx from 'classnames';
import {LinkProps} from '../../es';
import Link from '../Link';
import noop from 'lodash/noop';

import styles from './ExpandableBlock.module.scss';

export interface IProps {
  preview: React.ReactNode;
  content: React.ReactNode;
  expanded?: boolean;
  previewIsClickable?: boolean;
  moreButtonSize?: LinkProps['size'];
  moreButtonText?: React.ReactNode;
  withAnimation?: boolean;
  onChange?: () => void;
}

const ExpandableBlock: React.FC<React.PropsWithChildren<IProps>> = ({
  expanded,
  onChange,
  preview,
  content,
  moreButtonSize = 'm',
  moreButtonText = 'Еще',
  previewIsClickable,
}) => {
  const [controlableExpanded, setExpanded] = useControllableState({
    value: expanded,
    onChange,
  });

  const goToExpanded = () => setExpanded(true);

  return (
    <>
      {!controlableExpanded && (
        <div
          className={cx(previewIsClickable && styles['clickable-preview'])}
          onClick={previewIsClickable ? goToExpanded : noop}
        >
          {preview}
        </div>
      )}

      {controlableExpanded && content}

      {!controlableExpanded && (
        <Link underlined bold size={moreButtonSize} onClick={goToExpanded}>
          {moreButtonText}
        </Link>
      )}
    </>
  );
};

export default ExpandableBlock;
