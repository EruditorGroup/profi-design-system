import React from "react";
import "./block.module.css";

if (module.hot) {
  module.hot.accept("./block.module.css", function () {
    require("./block.module.css");
  });
}

const Block = () => {
  return React.createElement("div", {
    className: "block-module__block-2fn0z"
  }, "\u043F\u0440\u0438\u0432\u0435\u0442 \u0431\u043B\u043E\u043A");
};

export default Block;