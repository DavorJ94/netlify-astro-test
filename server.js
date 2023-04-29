import express from "express";
import { handler as ssrHandler } from "./dist/server/entry.mjs";

const app = express();
app.use(express.static("dist/client/"));
app.use(async (req, res, next) => {
  console.log("Hello");
  res.setHeader("Cache-Control", "max-age=120");
  await ssrHandler(req, res, next);
  next();
});

app.listen(8080, () => {
  console.log("Listening on port 8080...");
});
