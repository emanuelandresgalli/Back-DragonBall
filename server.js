const express = require("express");
const {connect} = require("./app/config/database");
const cors = require("cors");


const logger = require("morgan");
const users = require("./app/api/routes/users.routes.js");
const cards = require("./app/api/routes/cards.routes.js");
const HTTPSTATUSCODE = require("./app/utils/httpStatusCode");

const app = express();

connect();
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

  
app.use(cors({
    origin: ['*'],
    credentials: true,
  }));

app.use(express.static("public"))
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(logger("dev"));

  app.use("/users", users);
  app.use("/cards", cards);

  app.use((req, res, next) => {
    let err = new Error();
    err.status = 404;
    err.message = HTTPSTATUSCODE[404];
    next(err);
  });

  app.use((err, req, res, next) => {
    return res.status(err.status || 500).json(err.message || 'Unexpected error');
  })
  
  app.set("secretKey", "nodeRestApi"); // jwt secret token


  app.disable('x-powered-by');

app.listen(8000, () => {
  console.log("Node server listening on port 8000")
})

module.exports = app;
