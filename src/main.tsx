import React from "react";
import Block from "./components/block";
import ContentInner from "./components/contentInner";
import "./index.module.css";

export default class ProfiUI extends React.Component {
  render() {
    return (
      <div styleName="main" className="main">
        <div>Компоненты:</div>
        <div>
          Block: <Block />
        </div>
        <div>
          ContentInner: <ContentInner version="mobile">контент</ContentInner>
        </div>
      </div>
    );
  }
}
