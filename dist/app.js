"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const books_route_1 = __importDefault(require("./app/routes/books.route"));
const borrow_route_1 = __importDefault(require("./app/routes/borrow.route"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
// routes
app.use("/api/v1/books", books_route_1.default);
app.use("/api/v1/borrow", borrow_route_1.default);
app.get("/", (req, res) => {
    res.send("Welcome to the Library Management App!");
});
exports.default = app;
