/*import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send(`NODE_ENV=${process.env.NODE_ENV}`);
});

const server = app.listen(process.env.PORT, () => {
  console.log("Started at http://localhost:%d\n", server.address().port);
});*/
import app from "./app";
const PORT = 3000;

app.listen(PORT, () => {
  console.log('Express server listening on port ' + PORT);
})
