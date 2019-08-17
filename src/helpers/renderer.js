import { renderToString } from "react-dom/server";
import React from "react";

import Home from "../client/components/Home";
export default () => {
  const content = renderToString(<Home />);

  return `
  <html>
    <head></head>
    <body>
      <div id="root">${content}</div>
    <body>
  </html>
  `;
};
