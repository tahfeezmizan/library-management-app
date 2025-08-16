import { Server } from "http";
import app from "./app";
import mongoose from "mongoose";

let server: Server;
const port = 5000;

async function main() {
  try {
    await mongoose.connect(
      "mongodb+srv://mogo-practices:mogo-practices@cluster0.7utjicv.mongodb.net/todosDB?retryWrites=true&w=majority&appName=Cluster0"
    );

    console.log("Connected to MongoDB successfully");

    server = app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
