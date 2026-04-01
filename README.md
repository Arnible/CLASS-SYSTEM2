# ⏱️ Timed Class Test & Project Management System

## 📌 Overview

This project is a **JavaScript-based class management system** designed to handle:

* Timed assessments (with automatic submission)
* Student registration and tracking
* Project group organization

The system ensures that tests are completed within a fixed duration (10 minutes), after which submissions are automatically enforced. It also maintains structured data about students, their project groups, and leadership roles.

---

## 🚀 Features

### ⏳ Timed Test System

* Each test runs for **10 minutes**
* Countdown timer starts automatically
* **Auto-submission** when time expires
* Prevents late submissions

### 👨‍🎓 Student Management

* Register all students in a class
* Track individual student details
* Associate students with project groups

### 👥 Project Group Management

* Create project groups
* Assign:

  * Group name
  * Group leader
  * Group members
* Link projects to groups

### 📂 Project Tracking

* Store:

  * Project name
  * Assigned group
  * Group members
* Easy retrieval and updates

---

 System Architecture

The system is structured using modular JavaScript components:

### Core Modules

* **Class Module**

  * Holds all students and groups
  * Acts as the central controller

* **Student Module**

  * Stores student details
  * Links to group membership

* **Group Module**

  * Manages group name, leader, and members

* **Project Module**

  * Stores project-related data
  * Linked to a specific group

* **Timer Module**

  * Handles countdown logic
  * Triggers automatic submission

---

## ⚙️ Technologies Used

* JavaScript (ES6+)
* Node.js (if backend is used)
* HTML/CSS (for interface, if applicable)

---

## 🛠️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Install Dependencies (if applicable)

```bash
npm install
```

### 3. Run the Application

```bash
npm start
```

Or, if it's a simple frontend:

* Open `index.html` in your browser

---

Usage

1. Register students into the system
2. Create project groups and assign members
3. Assign projects to groups
4. Start a test session
5. Timer begins countdown (10 minutes)
6. System auto-submits when time expires

---
Example (Conceptual)

```javascript
const test = new Timer(10); // 10 minutes
test.start();

test.onEnd(() => {
  submitTest();
});
```

 Project Structure

```
/project-root
│── /src
│   ├── class.js
│   ├── student.js
│   ├── group.js
│   ├── project.js
│   └── timer.js
│
│── index.js
│── package.json
│── README.md
```
Future Improvements

* Authentication system (login/signup)
* Database integration (MongoDB / Firebase)
* Real-time monitoring of test progress
* UI dashboard for instructors
* Anti-cheating mechanisms

Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

License
This project is open-source and available under the MIT License.

Author

Developed by WARLORD

---
