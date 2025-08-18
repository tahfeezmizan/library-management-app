import { Request, Response } from "express";
import Borrow from "../models/borrow.model";


export const createBorrow = async (req: Request, res: Response) => {
  try {
    const borrow = new Borrow(req.body);
    await borrow.checkStock();

    //  Save borrow record
    await borrow.save();

    res.status(201).json({
      success: true,
      message: "Borrow books successfully",
      data: borrow,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: "Failed to borrow book",
      error: error.message,
    });
  }
};


export const getBorrowedBooksSummary = async  (req: Request, res: Response) => {
  try {
    const summary = await Borrow.aggregate([
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
          book:{
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
  } catch (error : any) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch borrowed books summary",
      error: error.message,
    });
  }
};