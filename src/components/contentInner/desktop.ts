import React from "react";

import ContentInnerProps from "./types";

import "./styles/desktop.module.css";

const ContentInnerDesktop: React.FC = ({
  children,
  id,
  shmid,
  className,
  withMobileMaxWidth
}: ContentInnerProps) => {
  if (!children) return null;

  return (
    <div id={id} data-shmid={shmid} styleName="root" className={className}>
      {children}
    </div>
  );
};

export default ContentInnerDesktop;
