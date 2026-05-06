import { loadEnvFile } from 'process';
import express from 'express';
import { closeDb, initDb } from './src/controllers/databaseController.js';
import contacts from './src/routes/contacts.js';

if (process.loadEnvFile) {
    loadEnvFile();
};

const app = express();
const port = process.env.PORT || 3000;

app.use('/', contacts);

try {
    initDb();

    app.listen(port, () => {
        console.log(`Web server listening on port ${port}`);
    })
} catch (error) {
    console.error(error);
};

process.on('SIGINT', closeDb);
process.on('SIGTERM', closeDb);