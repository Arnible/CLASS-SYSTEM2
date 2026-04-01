let questions = [
  { id: 1, text: "What is Java?" },
  { id: 2, text: "What is API?" }
];

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(questions);
  } 
  else if (req.method === "POST") {
    const { text } = req.body;
    const newQuestion = {
      id: questions.length + 1,
      text
    };
    questions.push(newQuestion);
    res.status(201).json(newQuestion);
  } 
  else {
    res.status(405).json({ message: "Method not allowed" });
  }
}