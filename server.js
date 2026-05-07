import express from "express";
import { closeDb, initDb } from "./src/controllers/databaseController.js";
import contacts from "./src/routes/contacts.js";

const server = express();
const port = process.env.PORT || 8080;

server.use("/", contacts);

try {
  initDb();

  server.listen(port, () => {
    console.log(`Web server listening on port ${port}`);
  });
} catch (error) {
  console.error(error);
}

process.on("SIGINT", closeDb);
process.on("SIGTERM", closeDb);
