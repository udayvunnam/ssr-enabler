import React from "react";
import { StaticRouter } from "react-router-dom";
import { renderToString } from "react-dom/server";

import Routes from "../client/routes";

export default () => {
  const content = renderToString(
    <StaticRouter>
      <Routes />
    </StaticRouter>
  );

  return `
  <html>
    <head></head>
    <body>
      <div id="root">${content}</div>
      <script src="bundle.js"></script>
    <body>
  </html>
  `;
};
