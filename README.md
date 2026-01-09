<!-- ──────────────────────────────────────────────────────────────── -->
<h1 align="center">🏫 SCHOOL MANAGEMENT SYSTEM (MERN)</h1>

<p align="center">
A complete school ecosystem to manage students, teachers, classes, attendance, marks, and communication — all inside one centralized portal.
</p>

<div align="center">

🌐 <a href="https://youtu.be/ol650KwQkgY?si=rKcboqSv3n-e4UbC"><b>▶️ Demo Video</b></a> •  
💼 <a href="https://www.linkedin.com/in/varun-j0513/"><b>Author LinkedIn</b></a>

</div>

<br/>

<p align="center">
  <img src="assets/dashboard.png" width="650" alt="Dashboard Preview"/>
</p>

---

## 🌟 Features

### 👥 Multi-role Access
- **Admin**, **Teacher**, and **Student** dashboards  
- Role-based navigation & restricted permissions  

### 🏫 Admin Controls
- Add classes, subjects, teachers & students  
- Manage user accounts & system settings  

### 📝 Attendance Management
- Mark present/absent per class  
- Daily & monthly attendance views  
- Attendance history + reports  

### 🎯 Performance & Marks
- Teachers assign grades and feedback  
- Students track marks and improvement  
- Graph-based analytics & tables  

### 💬 Communication System
- Send/receive messages between teachers & students  
- Reduces external communication gaps  

### 📊 Interactive UI & Insights
- Graphs + tables for marks visualization  
- Modern UI with Material UI  

---

## 🧱 Tech Stack

| Category | Technology |
|----------|-------------|
| **Frontend** | React.js, Redux, Material UI |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB (Compass / Atlas) |
| **Deployment** | Render (Server), Netlify (Client) |

---

## 📦 Project Structure
MERN-School-Management-System
├── backend/
│ ├── server.js
│ ├── routes/
│ └── models/
├── frontend/
│ ├── src/
│ ├── components/
│ └── redux/
└── README.md

yaml
Copy code

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository
```sh
git clone https://github.com/Yogndrr/MERN-School-Management-System.git
2️⃣ Backend Setup
sh
Copy code
cd backend
npm install
npm start
Create a .env file:

sh
Copy code
MONGO_URL = mongodb://127.0.0.1/school
Use your own MongoDB Atlas string if hosted.

3️⃣ Frontend Setup
sh
Copy code
cd frontend
npm install
npm start
🚀 Visit client: http://localhost:3000
🔌 API runs on: http://localhost:5000

🛠️ Common Error Fixes
❌ Signup Network Error / Infinite Loader
Fix by editing frontend .env:
✔️ Uncomment first line
✔️ Restart frontend

If still failing:
Add inside frontend > src > redux > ... > userHandle.js

javascript
Copy code
const REACT_APP_BASE_URL = "http://localhost:5000";
Replace:

arduino
Copy code
process.env.REACT_APP_BASE_URL → REACT_APP_BASE_URL
Repeat for:

python
Copy code
teacherHandle.js
studentHandle.js
parentHandle.js
(any '*Handle.js' files)
🗑️ Delete Feature Disabled Fix
By default delete is turned off for live demo users.

Re-enable:
Go to
frontend/src/redux/userRelated/userHandle.js

Uncomment this:

javascript
Copy code
export const deleteUser = ...
Comment out the temporary version:

javascript
Copy code
dispatch(getFailed("Sorry the delete function has been disabled for now."));
Go to admin pages (Show* and View* files)
Replace:

js
Copy code
setMessage("Sorry, delete disabled")
with real:

js
Copy code
dispatch(deleteUser(...))
Repeat for all affected files.

👏 Done — delete function now works locally!

🌍 Deployment
Client: Netlify

Server: Render

(Or host anywhere using Docker / Railway / Vercel / AWS)
