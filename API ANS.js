let answers = [];

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(answers);
  } 
  else if (req.method === "POST") {
    const { questionId, answer } = req.body;
    const newAnswer = {
      id: answers.length + 1,
      questionId,
      answer
    };
    answers.push(newAnswer);
    res.status(201).json(newAnswer);
  } 
  else {
    res.status(405).json({ message: "Method not allowed" });
  }
}