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
const mongoose_1 = require("mongoose");
const books_model_1 = __importDefault(require("./books.model"));
const borrowSchema = new mongoose_1.Schema({
    book: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Book",
        required: [true, "Book ID is required"],
    },
    quantity: {
        type: Number,
        required: [true, "Quantity is required"],
        min: [1, "Quantity must be at least 1"],
    },
    dueDate: {
        type: Date,
        required: [true, "Due date is required"],
    },
}, {
    timestamps: true,
});
borrowSchema.methods.checkStock = function () {
    return __awaiter(this, void 0, void 0, function* () {
        const book = yield books_model_1.default.findById(this.book);
        if (!book) {
            throw new Error("Book not found");
        }
        if (book.copies < this.quantity) {
            throw new Error(`Only ${book.copies} copies available`);
        }
        book.copies -= this.quantity;
        book.available = book.copies > 0;
        if (book.copies < 0) {
            throw new Error("Book copies went negative");
        }
        yield book.save();
    });
};
const Borrow = (0, mongoose_1.model)("Borrow", borrowSchema);
exports.default = Borrow;
