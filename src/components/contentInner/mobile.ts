import React from "react";
import ContentInnerProps from "./types";

import "./contentInner.module.css";

const ContentInnerMobile: React.FC = ({
  children,
  id,
  shmid,
  className,
  withMobileMaxWidth
}: ContentInnerProps) => {
  if (!children) return null;

  return (
    <div id={id} styleName="root">
      {children}
    </div>
  );
};

export default ContentInnerMobile;
