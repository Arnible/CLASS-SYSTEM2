import { login } from "../lib/services.js";

export default function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { name, password } = req.body;
      const user = login(name, password);
      res.status(200).json(user);
    } catch (e) {
      res.status(401).json({ error: e.message });
    }
  } else {
    res.status(405).end();
  }
}