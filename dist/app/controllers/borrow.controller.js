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
exports.getBorrowedBooksSummary = exports.createBorrow = void 0;
const borrow_model_1 = __importDefault(require("../models/borrow.model"));
const createBorrow = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const borrow = new borrow_model_1.default(req.body);
        yield borrow.checkStock();
        //  Save borrow record
        yield borrow.save();
        res.status(201).json({
            success: true,
            message: "Borrow books successfully",
            data: borrow,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to borrow book",
            error: error.message,
        });
    }
});
exports.createBorrow = createBorrow;
const getBorrowedBooksSummary = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const summary = yield borrow_model_1.default.aggregate([
            {
                $group: {
                    _id: "$book",
                    totalQuantity: { $sum: "$quantity" },
                },
            },
            {
                $lookup: {
                    from: "books", // MongoDB collection name
                    localField: "_id",
                    foreignField: "_id",
                    as: "bookInfo",
                },
            },
            {
                $unwind: "$bookInfo",
            },
            {
                $project: {
                    _id: 0,
                    book: {
                        // bookId: "$bookInfo._id",
                        title: "$bookInfo.title",
                        isbn: "$bookInfo.isbn",
                    },
                    totalQuantity: 1,
                },
            },
        ]);
        res.status(200).json({
            success: true,
            message: "Borrowed books summary fetched successfully",
            data: summary,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch borrowed books summary",
            error: error.message,
        });
    }
});
exports.getBorrowedBooksSummary = getBorrowedBooksSummary;
