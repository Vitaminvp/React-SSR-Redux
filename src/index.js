import renderer from "../helpers/renderer";
import "babel-polyfill";
const express = require("express");
const app = express();
import createStore from "../helpers/createStore";
import { matchRoutes } from "react-router-config";
import Routes from "./client/Routes";
// const React = require("react");
// const renderToString = require("react-dom/server").renderToString;
// const HomePage = require("./client/components/HomePage").default;

app.use(express.static("public"));

app.get("*", (req, res) => {
  const store = createStore();

  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  });

  Promise.all(promises).then(() => {
    res.send(renderer(req, store));
  });
});

app.listen(3000, () => {
  console.log("listening on port :3000");
});
