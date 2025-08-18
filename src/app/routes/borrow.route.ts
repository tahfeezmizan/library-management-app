import { Router } from "express";
import {
  createBorrow,
  getBorrowedBooksSummary,
} from "../controllers/borrow.controller";

const borrowRoute = Router();

borrowRoute.post("/createborrow", createBorrow);
borrowRoute.get("/", getBorrowedBooksSummary);

export default borrowRoute;
