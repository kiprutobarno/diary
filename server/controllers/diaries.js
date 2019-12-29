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

  static async updateDiary(req, res) {
    try {
      const data = await db.Diary.findByPk(req.params.diaryId);
      if (data) {
        await db.Diary.update(
          { title: req.body.title },
          {
            where: { id: Number(req.params.diaryId) }
          }
        );
        const updated = await db.Diary.findByPk(req.params.diaryId);
        res
          .status(200)
          .send({ status: 200, message: "Success", diary: updated });
      } else {
        res
          .status(404)
          .send({ status: 404, message: "Diary not found!", diary: update });
      }
    } catch (error) {
      console.log(error);
    }
  }

  static async deleteDiary(req, res) {
    try {
      const data = await db.Diary.findByPk(req.params.diaryId);
      if (data) {
        await db.Diary.destroy({
          where: { id: Number(req.params.diaryId) }
        });
        res.status(200).send({ status: 200, message: "Deleted" });
      } else {
        res
          .status(404)
          .send({ status: 404, message: "Diary not found!", diary: update });
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export default Diary;
