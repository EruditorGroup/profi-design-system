import React from "react";
import { render, screen } from "@testing-library/react";
import Loader from ".";

test("renders loader", () => {
  render(<Loader variant="line" />);
  const linkElement = screen.getByTitle("loader");
  expect(linkElement).toBeInTheDocument();
});
