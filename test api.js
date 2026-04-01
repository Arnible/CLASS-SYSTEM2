import {
  isValidLocation,
  startSession,
  submitAnswer,
  getScore
} from "../lib/services.js";

export default function handler(req, res) {
  const { action } = req.query;

  if (action === "start") {
    const { studentId, questionId, lat, lon } = req.query;

    if (!isValidLocation(+lat, +lon)) {
      return res.json("DENIED");
    }

    return res.json(startSession(studentId, questionId));
  }

  if (action === "submit") {
    const { studentId, questionId, answer, lat, lon } = req.query;

    if (!isValidLocation(+lat, +lon)) {
      return res.json("AUTO-SUBMIT");
    }

    return res.json(submitAnswer(studentId, questionId, answer));
  }

  if (action === "score") {
    const { studentId } = req.query;
    return res.json(getScore(studentId));
  }

  res.status(400).json({ error: "Invalid action" });
}