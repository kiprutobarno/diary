import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
require("./server/routes")(app);
app.get("/", (req, res) => {
  res.status(200).send({ message: "Welcome" });
});

app.listen(8000, () => {
  console.log(`app running`);
});
