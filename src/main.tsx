import React from "react";
import Block from "./components/block";
import ContentInner from "@ui/contentInner";
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
          ContentInner desktop: <br />
          <ContentInner version="desktop">контент</ContentInner>
          ContentInner mobile: <br />
          <ContentInner version="mobile">контент</ContentInner>
          ContentInner mobile withMobileMaxWidth: <br />
          <ContentInner withMobileMaxWidth version="mobile">
            контент
          </ContentInner>
        </div>
      </div>
    );
  }
}
