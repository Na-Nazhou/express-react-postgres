require("dotenv").config();

const express = require("express");
const morgan = require("morgan");

const routes = require("./routes");

const app = express();

app.set("port", process.env.PORT || 3001);
let server = app.listen(app.get("port"), () =>
  console.log("Express server listening on port " + server.address().port)
);

/*
 * Hook up all apis defined in /api
 */
app.use(routes);

/*
 * Log failed requests to stderr
 */
app.use(
  morgan("tiny", {
    skip: (req, res) => res.statusCode < 400,
    stream: process.stderr
  })
);

/*
 * Log successful requests to stderr
 */
app.use(
  morgan("tiny", {
    skip: (req, res) => res.statusCode >= 400,
    stream: process.stdout
  })
);

/*
 * Ignore HTTP'ed requests if running in Heroku. Use HTTPS only.
 */
if (process.env.DYNO) {
  app.enable("trust proxy");
  app.use((req, res, next) => {
    if (!req.secure) {
      if (req.path === "/") {
        res.redirect(301, `https://${req.host}/`);
      } else {
        res.status(400).end("Please switch to HTTPS.");
      }
    } else {
      return next();
    }
  });
}

/*
 * In production mode we will also serve the client
 */
if (process.env.NODE_ENV === "production") {
  console.log(`Production mode detected: Serving client`);
  const path = require("path");

  const buildDir = path.join(__dirname, "../client/build");

  app.use(express.static(buildDir));

  app.get("*", (req, res) => {
    res.sendFile(path.join(buildDir, "index.html"));
  });
}
