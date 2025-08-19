"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const booksSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: [true, " Book title is required"],
    },
    author: {
        type: String,
        required: [true, "Author name is required"],
    },
    genre: {
        type: String,
        required: [true, " Genre is required"],
        enum: {
            values: [
                "FICTION",
                "NON_FICTION",
                "SCIENCE",
                "HISTORY",
                "BIOGRAPHY",
                "FANTASY",
            ],
        },
    },
    isbn: {
        type: String,
        required: [true, " ISBN is required"],
    },
    description: {
        type: String,
    },
    copies: {
        type: Number,
        required: [true, " Number of copies is required"],
    },
    available: {
        type: Boolean,
        default: true,
    },
}, {
    timestamps: true,
});
const Books = (0, mongoose_1.model)("books", booksSchema);
exports.default = Books;
