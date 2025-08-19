"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const borrow_controller_1 = require("../controllers/borrow.controller");
const borrowRoute = (0, express_1.Router)();
borrowRoute.post("/createborrow", borrow_controller_1.createBorrow);
borrowRoute.get("/", borrow_controller_1.getBorrowedBooksSummary);
exports.default = borrowRoute;
