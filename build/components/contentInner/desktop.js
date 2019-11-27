import React from "react";
import "./contentInner.module.css";

if (module.hot) {
  module.hot.accept("./contentInner.module.css", function () {
    require("./contentInner.module.css");
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
    className: "contentInner-module__root-3iYKR"
  }, children);
};

export default ContentInnerDesktop;