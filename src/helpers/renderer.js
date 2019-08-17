import { renderToString } from "react-dom/server";
import { Home } from "../client/client";

export default render => {
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
