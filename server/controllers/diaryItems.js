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

  static async get(req, res) {
    try {
      const data = await db.DiaryItem.findAll({
        where: { diaryId: req.params.diaryId }
      });
      if (data.length === 0) {
        return res
          .status(404)
          .send({ status: 404, message: "No diary items found" });
      } else {
        return res
          .status(200)
          .send({ status: 200, message: "Success", diaryItems: data });
      }
    } catch (error) {
      console.log(error);
    }
  }

  static async update(req, res) {
    try {
      const data = await db.DiaryItem.findAll({
        where: { id: req.params.diaryItemId, diaryId: req.params.diaryId }
      });
      if (data) {
        await db.DiaryItem.update(
          { content: req.body.content },
          {
            where: { id: Number(req.params.diaryId) }
          }
        );
        await db.DiaryItem.update(
          { complete: req.body.complete },
          {
            where: { id: Number(req.params.diaryId) }
          }
        );
        const updated = await db.DiaryItem.findByPk(req.params.diaryId);
        console.log(updated);
        res
          .status(200)
          .send({ status: 200, message: "Success", updatedItem: updated });
      } else {
        res.status(404).send({
          status: 404,
          message: "Diary Item not found!",
          diary: update
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  static async delete(req, res) {
    try {
      const data = await db.DiaryItem.findAll({
        where: { diaryId: req.params.diaryId, id: req.params.diaryItemId }
      });
      if (data) {
        await db.DiaryItem.destroy({
          where: { id: Number(req.params.diaryItemId) }
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

export default DiaryItem;
