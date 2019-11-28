import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "@storybook/react/demo";
import { ContentInner } from "../src/components/contentInner";

export default {
  title: "Button"
};

export const text = () => <ContentInner version="mobile">контент</ContentInner>;

export const emoji = () => (
  <ContentInner version="desktop">контент</ContentInner>
);
