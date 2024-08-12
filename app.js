const express = require("express");
const { log } = require("node:console");

require("dotenv").config();
const path = require("node:path");
const app = express();

app.get("/", (_, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});

app.get("/contacts", (_, res) => {
  res.sendFile(path.join(__dirname, "./contact-me.html"));
});

app.get("/about", (_, res) => {
  res.sendFile(path.join(__dirname, "./about.html"));
});

app.get("*", (_, res) => {
  res.status(404).sendFile(path.join(__dirname, "./404.html"));
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  log(`Listening on port: ${PORT}`);
});
