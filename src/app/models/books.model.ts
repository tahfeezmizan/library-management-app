import { model, Schema } from "mongoose";

const booksSchema = new Schema<BooksDemo>(
  {
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
  },
  {
    timestamps: true,
  }
);

const Books = model<BooksDemo>("books", booksSchema);

export default Books;
