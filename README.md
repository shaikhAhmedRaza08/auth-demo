🛡️ Auth Demo – Microservice Based Authentication System
This project provides a backend authentication service built with Node.js, Express, Sequelize, and PostgreSQL, along with a frontend using React + TypeScript + Tailwind CSS.

📦 Prerequisites
🐘 Setup PostgreSQL with Docker
Make sure you have Docker installed.

Run the following command to start a PostgreSQL container:

docker run --name auth-demo-db
-e POSTGRES_USER=admin
-e POSTGRES_PASSWORD=admin123
-e POSTGRES_DB=postgres
-p 5432:5432
-v postgres-data:/var/lib/postgresql/data
-d postgres


Now, run the following script in the SQL for creating users table:
CREATE TABLE IF NOT EXISTS Users
(
    id         SERIAL PRIMARY KEY,
    username   VARCHAR(50)  NOT NULL UNIQUE,
    email      VARCHAR(100) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

🔧 Backend – Auth API Service
Navigate to the backend directory:

cd backend

Install dependencies:

npm install

Start the development server:

npm run start:dev

Make sure your database container is running before starting the backend.

💻 Frontend – React + TypeScript + Tailwind
Navigate to the frontend directory:

cd frontend

Install dependencies:

npm install

Start the development server:

npm run dev
