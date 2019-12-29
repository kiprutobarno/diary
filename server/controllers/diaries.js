const Diary = require("../models");

module.exports = {
  create(req, res) {
    return Diary.create({
      title: req.body.title
    })
      .then(diary => res.status(201).send(diary))
      .catch(error => res.status(400).send(error));
  }
};
