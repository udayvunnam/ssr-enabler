import React from "react";
import { StaticRouter } from "react-router-dom";
import { renderToString } from "react-dom/server";
import { renderRoutes, matchRoutes } from "react-router-config";
import Routes from "../client/Routes";
import { Provider } from "react-redux";

export default (req, store) => {
  console.log(req.url);

  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
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
