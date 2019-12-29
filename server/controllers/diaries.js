import db from "../models";
class Diary {
  static async createDiary(req, res) {
    const title = req.body;
    try {
      const data = await db.Diary.create(title);
      return res
        .status(201)
        .send({ message: "Created", status: 201, diary: data });
    } catch (error) {}
  }

  static async getDiaries(req, res) {
    try {
      const data = await db.Diary.findAll({
        include: [
          {
            model: db.DiaryItem,
            as: "diaryItems"
          }
        ]
      });
      return res
        .status(200)
        .send({ message: "OK", status: 200, diaries: data });
    } catch (error) {
      console.log(error);
    }
  }
}

export default Diary;
