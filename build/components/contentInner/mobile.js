import _getClassName from "babel-plugin-react-css-modules/dist/browser/getClassName";
import React from "react";
import cx from "classnames";
import "./styles/mobile.module.css";
const _styleModuleImportMap = {
  "./styles/mobile.module.css": {
    "root": "mobile-module__root-3oAMk",
    "withMobileMaxWidth": "mobile-module__withMobileMaxWidth-1KCcX"
  }
};

if (module.hot) {
  module.hot.accept("./styles/mobile.module.css", function () {
    require("./styles/mobile.module.css");
  });
}

const ContentInnerMobile = ({
  children,
  id,
  shmid,
  className,
  withMobileMaxWidth
}) => {
  if (!children) return null;
  return React.createElement("div", {
    id: id,
    className: _getClassName(cx("root", {
      withMobileMaxWidth: withMobileMaxWidth
    }), _styleModuleImportMap, {
      "autoResolveMultipleImports": true,
      "handleMissingStyleName": "warn"
    })
  }, children);
};

export default ContentInnerMobile;