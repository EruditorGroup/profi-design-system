import React from "react";
import ContentInnerDesktop from "./desktop";
import ContentInnerMobile from "./mobile";

const ContentInner = ({
  version = "mobile",
  children,
  id,
  shmid,
  className,
  withMobileMaxWidth
}) => {
  const props = {
    children,
    id,
    shmid,
    className,
    withMobileMaxWidth
  };
  if (version === "mobile") return React.createElement(ContentInnerMobile, props);
  return React.createElement(ContentInnerDesktop, props);
};

export default ContentInner;