import React from "react";
import { action } from "@storybook/addon-actions";
import { ContentInner } from "..";

export default {
  title: "ContentInner"
};

export const mobile = () => (
  <ContentInner version="mobile">контент</ContentInner>
);

export const desktop = () => (
  <ContentInner version="desktop">контент</ContentInner>
);

export const toStorybook = () => <Welcome showApp={linkTo("ContentInner")} />;

toStorybook.story = {
  name: "to Storybook"
};
