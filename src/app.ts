import express, { Application, Request, Response } from "express";
import useRoute from "./app/routes/books.route";
import borrowRoute from "./app/routes/borrow.route";

const app: Application = express();
app.use(express.json());

// routes
app.use("/api/v1/books", useRoute);
app.use("/api/v1/borrow", borrowRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the Library Management App!");
});

export default app;