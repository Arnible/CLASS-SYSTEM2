import { db } from "./db.js";

// ================= LOCATION =================
const BASE_LAT = 0.3476;
const BASE_LON = 32.5825;
const MAX_DISTANCE = 100;

export function isValidLocation(lat, lon) {
  const R = 6371000;
  const dLat = (BASE_LAT - lat) * Math.PI / 180;
  const dLon = (BASE_LON - lon) * Math.PI / 180;

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat * Math.PI / 180) *
    Math.cos(BASE_LAT * Math.PI / 180) *
    Math.sin(dLon / 2) ** 2;

  const distance = 2 * R * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return distance <= MAX_DISTANCE;
}

// ================= AUTH =================
export function login(name, password) {
  const user = db.students.find(s => s.name === name);
  if (!user || user.password !== password) {
    throw new Error("Invalid login");
  }
  return user;
}

// ================= TEST =================
export function startSession(studentId, questionId) {
  const session = {
    id: Date.now(),
    studentId,
    questionId,
    startTime: Math.floor(Date.now() / 1000)
  };

  db.sessions.push(session);
  return session;
}

function isExpired(session) {
  const now = Math.floor(Date.now() / 1000);
  return now - session.startTime > 600;
}

export function submitAnswer(studentId, questionId, answer) {
  const session = db.sessions.find(s => s.studentId == studentId);
  if (!session) throw new Error("No session");

  const question = db.questions.find(q => q.id == questionId);
  if (!question) throw new Error("Question not found");

  const timeout = isExpired(session);

  const result = {
    id: Date.now(),
    studentId,
    questionId,
    selectedAnswer: timeout ? "AUTO" : answer,
    correct: question.correctAnswer === answer
  };

  db.answers.push(result);
  return result;
}

export function getScore(studentId) {
  return db.answers
    .filter(a => a.studentId == studentId && a.correct)
    .length;
}