import express from "express";
import { closeDb, initDb } from "./src/utilities/database.js";
import contactsRoute from "./src/routes/contactsRoute.js";

const server = express();
const port = process.env.PORT || 8080;

server.use("/contacts", contactsRoute);

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
