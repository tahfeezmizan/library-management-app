import { Server } from "http";
import app from "./app";
import mongoose from "mongoose";
import config from "./app/config";

let server: Server;
const port = 5000;

async function main() {
  try {
    await mongoose.connect(config.database_url!);

    console.log("Successfully connected to MongoDB");

    server = app.listen(config.port, () => {
      console.log(`Server is running on ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
