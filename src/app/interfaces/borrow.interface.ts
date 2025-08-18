import { Document, Types } from "mongoose";

export interface BorrowBooks extends Document {
  book: Types.ObjectId;
  quantity: number;
  dueDate: Date;
  checkStock(): Promise<void>;
  
}

// export interface IBorrowBooksMethod{
//     checkQuantity() : Promise<void>
// }