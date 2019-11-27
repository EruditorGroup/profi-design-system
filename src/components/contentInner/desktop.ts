import React from "react";
import "./contentInner.module.css";
import ContentInnerProps from "./types";

const ContentInnerDesktop: React.FC = ({
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

export default ContentInnerDesktop;
