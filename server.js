import { loadEnvFile } from 'process';
import express from 'express';

loadEnvFile();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen(port, () => {
    console.log(`Web server listening on port ${port}`);
})