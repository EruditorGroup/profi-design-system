import React from "react";
import Block from "./components/block";
import ContentInner from "@ui/contentInner";
import "./index.module.css";

if (module.hot) {
  module.hot.accept("./index.module.css", function () {
    require("./index.module.css");
  });
}

export default class ProfiUI extends React.Component {
  render() {
    return React.createElement("div", {
      className: "main index-module__main-X0l5c"
    }, React.createElement("div", null, "\u041A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u044B:"), React.createElement("div", null, "Block: ", React.createElement(Block, null)), React.createElement("div", null, "ContentInner desktop: ", React.createElement("br", null), React.createElement(ContentInner, {
      version: "desktop"
    }, "\u043A\u043E\u043D\u0442\u0435\u043D\u0442"), "ContentInner mobile: ", React.createElement("br", null), React.createElement(ContentInner, {
      version: "mobile"
    }, "\u043A\u043E\u043D\u0442\u0435\u043D\u0442"), "ContentInner mobile withMobileMaxWidth: ", React.createElement("br", null), React.createElement(ContentInner, {
      withMobileMaxWidth: true,
      version: "mobile"
    }, "\u043A\u043E\u043D\u0442\u0435\u043D\u0442")));
  }

}