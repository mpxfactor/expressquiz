import express from "express";
import { isAdmin, verifyToken } from "../middlewares/auth.middleware.js";
import {
  getChoice,
  addChoice,
  updateChoice,
  deleteChoice,
} from "../controllers/choice.controller.js";

const router = express.Router();

router.get("/:quizId/:questionId/:choiceId", [verifyToken, isAdmin], getChoice);
router.post("/:quizId/:questionId", [verifyToken, isAdmin], addChoice);
router.put(
  "/:quizId/:questionId/:choiceId",
  [verifyToken, isAdmin],
  updateChoice
);
router.delete(
  "/:quizId/:questionId/:choiceId",
  [verifyToken, isAdmin],
  deleteChoice
);

export default router;
