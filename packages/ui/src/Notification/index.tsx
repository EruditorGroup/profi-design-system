import React, {HTMLProps} from 'react';
import classnames from 'classnames';

import styles from './Notification.module.scss';

export type NotificationProps = HTMLProps<HTMLDivElement>;

const Notification: React.FC<NotificationProps> = ({
  className,
  children,
  ...htmlProps
}) => (
  <div className={classnames(styles['notification'], className)} {...htmlProps}>
    <span>{children}</span>
  </div>
);

export default Notification;
