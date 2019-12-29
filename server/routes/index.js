const diariesController = require("../controllers").diaries;

module.exports = app => {
  app.get("/api", (req, res) =>
    res.status(200).send({
      message: "Welcome to the Diary API!"
    })
  );

  app.post("/api/diaries", diariesController.create);
};
