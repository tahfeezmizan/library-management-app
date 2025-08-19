# 📚 Library Management System.

A robust RESTful API built with **Express.js**, **TypeScript**, and **MongoDB (Mongoose)** for managing library books and borrow records, providing CRUD operations, borrowing features, validations, and error handling.



## ✨ Features

- 📖 **Book & Borrow Management**

    - Create, Read, Update, Delete (CRUD) operations for books
    - Borrow books with availability and stock control
    - Update book availability based on stock
    - Validation for all input fields
    - Aggregated summary of borrowed books using MongoDB aggregation pipeline
    - Business logic implemented with Mongoose instance/static methods and middleware
    - Filtering, sorting, and pagination on book list


## 🚀 Tech Stack

- **Backend**: Express.js
- **Language**: TypeScript
- **Database**: MongoDB with Mongoose
- **Validation**: Mongoose Schema Validation
- **Aggregation**: MongoDB Aggregation Framework


## 📌 API Endpoints


##  Book Routes

| Method | API Endpoint                 | Description                                               |
| ------ | -----------------------------| --------------------------------------------------------- |
| POST   | `/api/v1/books/createbook`   | Create a new book                                         |
| GET    | `/api/v1/books`              | Get all books with optional filtering, sorting, and limit |
| GET    | `/api/v1/books/:bookId`      | Get a book by its ID                                      |
| PUT    | `/api/v1/books/:bookId`      | Update a book (e.g., change copies)                       |
| DELETE | `/api/v1/books/:bookId`      | Delete a book by its ID                                   |


##  Borrowed Book Routes

| Method | API Endpoint                  | Description                                           |
| ------ | ----------------------------- | ----------------------------------------------------- |
| POST   | `/api/v1/borrow/createborrow` | Borrow a book (checks availability and updates stock) |
| GET    | `/api/v1/borrow`              | Get borrowed books summary with total quantity        |



## 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/tahfeezmizan/library-management-app
cd library-management-app

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env

# Start the development server
npm run dev
