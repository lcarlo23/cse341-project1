import express from 'express';
import { closeDb, initDb } from './src/utilities/database.js';
import contactsRoute from './src/routes/contactsRoute.js';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json' with { type: 'json' };

const server = express();
const port = process.env.PORT || 8080;

server.use(bodyParser.json());

server.use('/contacts', contactsRoute);

server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

try {
  initDb();

  server.listen(port, () => {
    console.log(`Web server listening on port ${port}`);
  });
} catch (error) {
  console.error(error);
}

process.on('SIGINT', closeDb);
process.on('SIGTERM', closeDb);
