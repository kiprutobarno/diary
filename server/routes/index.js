import diary from "../controllers/diaries";
import diaryItem from "../controllers/diaryItems";

import { Router } from "express";
const router = Router();

router.post("/api/diaries", diary.createDiary);
router.post("/api/diaries/:diaryId/items", diaryItem.create);
router.get("/api/diaries", diary.getDiaries);
router.put("/api/diaries/:diaryId", diary.updateDiary);

export default router;
