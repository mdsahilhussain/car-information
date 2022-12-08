const express = require("express");
const morgan = require("morgan");
const {infoRouter} = require('./handlers/userInfo')

const app = express();
const port = process.env.port || 5000;

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

app.use('/api', infoRouter)
app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
