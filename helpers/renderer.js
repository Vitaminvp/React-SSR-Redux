import React from "react";
import { renderToString } from "react-dom/server";
import Routes from "../src/client/Routes";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import serialize from "serialize-javascript";

export default (req, store, contex) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={contex}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );
  return `
        <html>
            <head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
            </head>
            <body>
                <div id="root">${content}</div>
                <script>
                    window.INIT_STATE = ${serialize(store.getState())}
                </script>
                <script src="bundle.js"></script>
            </body>
        </html>
    `;
};
