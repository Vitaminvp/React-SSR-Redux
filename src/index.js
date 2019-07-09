import renderer from "../helpers/renderer";
import "babel-polyfill";
import proxy from "express-http-proxy";
const express = require("express");
const app = express();

import createStore from "../helpers/createStore";
import { matchRoutes } from "react-router-config";
import Routes from "./client/Routes";
// const React = require("react");
// const renderToString = require("react-dom/server").renderToString;
// const HomePage = require("./client/components/HomePage").default;

app.use(
  "/api",
  proxy("http://react-ssr-api.herokuapp.com", {
    proxyReqOptDecorator(opts) {
      opts.headers["x-forwarded-host"] = "localhost:3000";
      return opts;
    }
  })
);
app.use(express.static("public"));

app.get("*", (req, res) => {
  const store = createStore(req);

  const promises = matchRoutes(Routes, req.path)
    .map(({ route }) => {
      return route.loadData ? route.loadData(store) : null;
    })
    .map(promise => {
      if (promise) {
        return new Promise(resolve => {
          promise.then(resolve).catch(resolve);
        });
      }
    });

  Promise.all(promises).then(() => {
    const context = {};
    const content = renderer(req, store, context);

    if (context.url) {
      res.redirect(301, context.url);
    }
    if (context.notFound) {
      res.status(404);
    }
    res.send(content);
  });
});

app.listen(3000, () => {
  console.log("listening on port :3000");
});
