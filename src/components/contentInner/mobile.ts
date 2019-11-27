import React from "react";
import cx from "classnames";

import ContentInnerProps from "./types";

import "./styles/mobile.module.css";

const ContentInnerMobile: React.FC = ({
  children,
  id,
  shmid,
  className,
  withMobileMaxWidth
}: ContentInnerProps) => {
  if (!children) return null;

  return (
    <div
      id={id}
      styleName={cx("root", {
        withMobileMaxWidth: withMobileMaxWidth
      })}
    >
      {children}
    </div>
  );
};

export default ContentInnerMobile;
