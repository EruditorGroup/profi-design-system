import { forwardRef } from "react";
import clsx from "clsx";

import styles from "./Link.module.css";

interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    React.RefAttributes<HTMLAnchorElement> {}

const Link: React.ForwardRefExoticComponent<LinkProps> = forwardRef(
  ({ href, className, children, ...props }, ref) => {
    return (
      <a ref={ref} className={clsx(styles["link"], className)} {...props}>
        {children}
      </a>
    );
  }
);

export default Link;
