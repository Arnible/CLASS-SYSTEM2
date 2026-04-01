import { db } from "../lib/db.js";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { type, data } = req.body;

    if (type === "student") {
      const student = {
        id: Date.now(),
        ...data,
        role: "STUDENT"
      };
      db.students.push(student);
      return res.json(student);
    }

    if (type === "question") {
      const question = {
        id: Date.now(),
        ...data
      };
      db.questions.push(question);
      return res.json(question);
    }
  }

  res.status(400).json({ error: "Invalid request" });
}