const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const session = require("express-session");
const app = express();
const dashboardRouter = require("./dashboard");
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

const okta = require("@okta/okta-sdk-nodejs");
const ExpressOIDC = require("@okta/oidc-middleware").ExpressOIDC;

const oktaClient = new okta.Client({
  orgUrl: "https://dev-652182.okta.com",
  token: "00kiP13B3x-TXuiXiWoP58s7r1E1ZrZq6QqrJHlCyO"
});
const oidc = new ExpressOIDC({
  issuer: "https://dev-652182.okta.com/oauth2/default",
  client_id: "0oa172eeqcKwAiQM7357",
  client_secret: "4lA2rR1NhT3Paq3BfNyGrBH8-upuMU5v6uC8762Y",
  redirect_uri: "http://localhost:3000/users/callback",
  scope: "openid profile",
  routes: {
    login: {
      path: "/users/login"
    },
    callback: {
      path: "/users/callback",
      defaultRedirect: "/dashboard"
    }
  }
});
app.use(
  session({
    secret: "LONG_RANDOM_STRING_HERE",
    resave: true,
    saveUninitialized: false
  })
);

app.use(oidc.router);
app.use("/users/callback", (req, res) => {
  console.log(req, ">>>>>>>", res);
});
app.use("/dashboard", dashboardRouter);
module.exports = app;
