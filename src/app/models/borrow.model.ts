import { model, Schema } from "mongoose";
import { BorrowBooks } from "../interfaces/borrow.interface";
import Books from "./books.model";


const borrowSchema = new Schema<BorrowBooks>(
  {
    book: {
      type: Schema.Types.ObjectId,
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
  },
  {
    timestamps: true,
  }
);

borrowSchema.methods.checkStock = async function () {
  const book = await Books.findById(this.book);

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

  await book.save();
};

const Borrow = model<BorrowBooks>("Borrow", borrowSchema);
export default Borrow;
