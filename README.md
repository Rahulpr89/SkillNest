# SkillNest 🚀

SkillNest is a full-stack web application built using the MERN Stack (MongoDB, Express.js, React.js, Node.js). It is an online learning platform that provides free and premium courses with authentication-based access control.

---

## 📌 Features

- 🏠 Landing page with introduction section  
- 📚 Free courses available for all users  
- 🔐 User Authentication (Signup / Login)  
- 💎 Paid courses accessible after login  
- ⚡ Full MERN stack implementation  
- 🌐 REST API integration between frontend and backend  

---

## 🛠️ Tech Stack

- **Frontend:** React.js  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Authentication:** JWT / Custom Authentication Logic  

---

## 📂 Project Structure

```
SkillNest/
│
├── backend/
│   ├── model/
│   ├── route/
│   ├── controller/
│   ├── .env
│   ├── index.js
|   ├── .gitignore
|   ├── data.json
|   ├── seed.json
|   ├── package-lock.json
|   └── package.json
│
├── frontend/
│   ├── src/
│   ├── public/
|   └── .gitignore
│
└── README.md
```

---

## 🚀 Getting Started

Follow these steps to run the project locally.

---

## 1️⃣ Clone the Repository

```bash
git clone <your-repository-link>
cd SkillNest
```

---

## 2️⃣ Install Dependencies

Before starting the application, install node modules in both backend and frontend directories.

### Install Backend Dependencies

```bash
cd backend
npm install
```

### Install Frontend Dependencies

```bash
cd frontend
npm install
```

---

## 3️⃣ Setup MongoDB

1. Install MongoDB locally.  
2. Start the MongoDB server.  
3. (Optional) Configure MongoDB Compass to view and manage your database.  

---

## 4️⃣ Configure Environment Variables

Create a `.env` file inside the **backend** directory and add the following:

```
MONGODBURI=mongodb://127.0.0.1:27017/SkillNest
PORT=4000
```

You can modify these values as needed.

---

## ▶️ Run the Application

### Start Backend

```bash
cd backend
npm i
npm start
```

You can check additional scripts inside `backend/package.json`.

---

### Start Frontend

```bash
cd frontend
npm i
npm run start
```

You can verify available scripts inside `frontend/package.json`.

---

## 🌍 Application Flow

- Users land on the homepage and see an introduction along with free courses.  
- Users can Sign Up or Login.  
- After authentication, users gain access to paid courses.  

---

## 🧪 Notes

- Make sure MongoDB is running before starting the backend.  
- Install dependencies in both directories before running the app.  
- Feel free to experiment and enhance the project. 🚀  

---


SkillNest is developed as a MERN stack project demonstrating full-stack development with authentication and protected routes.
