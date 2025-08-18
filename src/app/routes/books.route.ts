import { Router } from "express";

import {
  bookDelete,
  bookUpdate,
  createBook,
  getBook,
  getBookByID,
} from "../controllers/books.controller";

const useRoute = Router();

useRoute.post("/createbook", createBook);
useRoute.get("/", getBook);
useRoute.get("/:bookId", getBookByID);
useRoute.put("/:bookId", bookUpdate);
useRoute.delete("/:bookId", bookDelete);

export default useRoute;
