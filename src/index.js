import renderer from "../helpers/renderer";
const express = require("express");
const app = express();

// const React = require("react");
// const renderToString = require("react-dom/server").renderToString;
// const Home = require("./client/components/Home").default;



app.use(express.static("public"));

app.get("*", (req, res) => {

    res.send(renderer(req));
});

app.listen(3000, () => {
    console.log("listening on port :3000");
});