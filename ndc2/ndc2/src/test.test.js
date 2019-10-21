import React from "react";
import { render } from    '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Header from "./Header";


it("inserts text in h1", () => {
  const { getByTestId, getByText } = render(<Header text="Hello!" />);
  
  expect(getByTestId("h1tag")).toHaveTextContent("Hello!");
  expect(getByText("Hello!")).toHaveClass("fancy-h1");
});