import diary from "../controllers/diaries";
import diaryItem from "../controllers/diaryItems";

import { Router } from "express";
const router = Router();

router.post("/api/diaries", diary.createDiary);
router.get("/api/diaries", diary.getDiaries);
router.put("/api/diaries/:diaryId", diary.updateDiary);
router.delete("/api/diaries/:diaryId", diary.deleteDiary);

router.post("/api/diaries/:diaryId/items", diaryItem.create);
router.get("/api/diaries/:diaryId/items", diaryItem.get);
router.put("/api/diaries/:diaryId/items/:diaryItemId", diaryItem.update);

export default router;
