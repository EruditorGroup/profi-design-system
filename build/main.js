import React from "react";
import Block from "./components/block";
import ContentInner from "./components/contentInner";
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
    }, React.createElement("div", null, "\u041A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u044B:"), React.createElement("div", null, "Block: ", React.createElement(Block, null)), React.createElement("div", null, "ContentInner: ", React.createElement(ContentInner, {
      version: "mobile"
    }, "\u043A\u043E\u043D\u0442\u0435\u043D\u0442")));
  }

}