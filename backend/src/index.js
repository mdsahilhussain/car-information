const express = require("express");
const morgan = require("morgan");

const app = express();
const port = process.env.port || 3000;

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (request, response) => {
  response.json({ message: "success" });
});

app.get("/api", (request, response) => {
  response.json({
    message: "Api is working..",
    url: request.url,
  });
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
