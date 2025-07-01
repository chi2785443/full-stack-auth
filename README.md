# 🔐Full Stack Authentication Web App

**Authify** is a full-stack authentication website built using **React** for the frontend and **Node.js/Express** for the backend. It allows users to register, log in, manage sessions, and access protected routes securely using JWT (JSON Web Tokens). Authify serves as a boilerplate for scalable, secure user management systems.

---

## 🚀 Features

- 🧾 **User Registration & Login** – Secure signup and login with hashed passwords (bcrypt).
- 🛡 **JWT Authentication** – Access tokens stored in cookies or local storage.
- 🔒 **Protected Routes** – Frontend and backend routes protected from unauthorized access.
- 👤 **User Dashboard** – View profile, session data, and secure content.
- 🌐 **CORS Configured** – Cross-origin requests handled properly for dev & prod.
- ✅ **Form Validation** – Frontend & backend input validation.
- ☁️ **MongoDB Integration** – Stores user records and session data (via Mongoose).
- 📦 **REST API** – Modular and scalable backend API structure.

---

## 🧱 Tech Stack

| Technology      | Purpose                            |
|-----------------|------------------------------------|
| React.js        | Frontend UI                        |
| Node.js + Express | Backend API server              |
| MongoDB         | NoSQL database for users           |
| JWT             | Secure session tokens              |
| Mongoose        | MongoDB object modeling            |
| bcrypt          | Password hashing                   |
| Axios           | HTTP requests from frontend        |
| dotenv          | Environment variables              |
| Cors            | Cross-origin request configuration |

---

## 📁 Project Structure

```

authify/
├── client/                     # React Frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── index.js
│   └── package.json
│
├── server/                     # Node/Express Backend
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── .env
│   ├── server.js
│   └── package.json
└── README.md

````

---

## ✅ Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB database (local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- Git or GitHub CLI

### Setup Instructions

#### 1. Clone the repository

```bash
git clone https://github.com/your-username/authify.git
cd authify
````

#### 2. Setup Backend

```bash
cd server
npm install
cp .env.example .env
# Edit .env with MongoDB URI and JWT secret
npm start
```

#### 3. Setup Frontend

```bash
cd ../client
npm install
npm start
```

Frontend will run on `http://localhost:3000`
Backend will run on `http://localhost:5000`

---

## 🔑 Environment Variables (`server/.env`)

```env
PORT=5000
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-super-secret-key
CLIENT_URL=http://localhost:3000
```

---

## 🔐 API Routes

| Method | Endpoint             | Description              |
| ------ | -------------------- | ------------------------ |
| POST   | `/api/auth/register` | Register new user        |
| POST   | `/api/auth/login`    | Authenticate user        |
| GET    | `/api/auth/me`       | Get logged-in user info  |
| GET    | `/api/protected`     | Access protected content |

---

## 📌 Roadmap

* [x] JWT-based authentication
* [x] User registration and login
* [x] Protected frontend and backend routes
* [x] Logout functionality
* [ ] Refresh tokens and session expiry
* [ ] Google/GitHub OAuth login
* [ ] Email verification and password reset

---

## 🙋‍♂️ Author

**Chinedu Aguwa**
Full-Stack Developer | AI & Software Engineering Enthusiast
📧 [neduaguwa443@gmail.com](mailto:neduaguwa443@gmail.com)
🔗 [LinkedIn](https://www.linkedin.com/in/chinedu-aguwa)
💻 [GitHub](https://github.com/chi2785443)

---

## 💬 Contributing

Pull requests and suggestions are welcome! Fork the repository and open a PR to contribute.

---

## 📄 License

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.

---

