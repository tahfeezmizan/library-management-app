import express, { Application, Request, Response } from "express";
import useRoute from "./app/routes/books.route";

const app: Application = express();
app.use(express.json());

// routes
app.use("/api/v1/books", useRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the Library Management App!");
});

export default app;