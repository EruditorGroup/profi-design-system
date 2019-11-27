import React from "react";
import "./styles/desktop.module.css";

if (module.hot) {
  module.hot.accept("./styles/desktop.module.css", function () {
    require("./styles/desktop.module.css");
  });
}

const ContentInnerDesktop = ({
  children,
  id,
  shmid,
  className,
  withMobileMaxWidth
}) => {
  if (!children) return null;
  return React.createElement("div", {
    id: id,
    "data-shmid": shmid,
    className: (className ? className + " " : "") + "desktop-module__root-3t-PJ"
  }, children);
};

export default ContentInnerDesktop;