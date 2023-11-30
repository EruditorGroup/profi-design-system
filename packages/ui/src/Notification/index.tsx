import React, {HTMLAttributes} from 'react';
import classnames from 'classnames';

import styles from './Notification.module.scss';

export type NotificationProps = HTMLAttributes<HTMLDivElement> & {
  disabled?: boolean;
};

const Notification: React.FC<React.PropsWithChildren<NotificationProps>> = ({
  className,
  disabled,
  children,
  ...htmlProps
}) => (
  <div
    className={classnames(
      styles['notification'],
      disabled && styles['notification_disabled'],
      className,
    )}
    {...htmlProps}
  >
    {children}
  </div>
);

export default Notification;
