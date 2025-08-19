"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookDelete = exports.bookUpdate = exports.getBookByID = exports.getBook = exports.createBook = void 0;
const books_model_1 = __importDefault(require("../models/books.model"));
const createBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const book = new books_model_1.default(payload);
        const data = yield book.save();
        res.status(201).json({
            success: true,
            message: "Books created successfully",
            data,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to create book",
            error,
        });
    }
});
exports.createBook = createBook;
const getBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { filter, sort, sortBy, limit } = req.query;
        // const data = await Books.find().sort({ primaryField: 1, secondaryField: -1 }).limit(10);
        const query = filter ? { genre: filter } : {};
        const sortField = sortBy || "createdAt";
        const sortOrder = sort === "asc" ? 1 : -1;
        const data = yield books_model_1.default.find(query)
            .sort({ [sortField]: sortOrder })
            .limit(Number(limit) || 10);
        res.status(200).json({
            success: true,
            message: "Books find successfully",
            data,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to find book",
            error,
        });
    }
});
exports.getBook = getBook;
const getBookByID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { bookId } = req.params;
        const data = yield books_model_1.default.findById(bookId);
        res.status(200).json({
            success: true,
            message: "Books find successfully",
            data,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to find book",
            error,
        });
    }
});
exports.getBookByID = getBookByID;
const bookUpdate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { bookId } = req.params;
        const updatedData = req.body;
        const data = yield books_model_1.default.findByIdAndUpdate(bookId, updatedData, {
            new: true,
            runValidators: true,
        });
        res.status(200).json({
            success: true,
            message: "Books Updated successfully",
            data,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to update book",
            error,
        });
    }
});
exports.bookUpdate = bookUpdate;
const bookDelete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { bookId } = req.params;
        const data = yield books_model_1.default.findByIdAndDelete(bookId);
        res.status(200).json({
            success: true,
            message: "Books delete successfully",
            data: null,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to delete book",
            error,
        });
    }
});
exports.bookDelete = bookDelete;
