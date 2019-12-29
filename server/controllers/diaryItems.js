import db from "../models";

class DiaryItem {
  static async create(req, res) {
    try {
      const data = await db.DiaryItem.create({
        content: req.body.content,
        diaryId: req.params.diaryId
      });
      return res
        .status(201)
        .send({ status: 201, message: "Created", diaryItem: data });
    } catch (error) {
      console.log(error);
    }
  }
}

export default DiaryItem;
