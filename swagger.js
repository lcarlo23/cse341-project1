import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    title: 'Contacts API',
    description:
      'A Node.js REST API integrated with MongoDB for managing a contacts database. It supports full CRUD operations allowing users to create, read, update, and delete contact details such as names, emails, favorite colors, and birthdays.',
  },
  host: 'https://cse341-project1-t3pw.onrender.com/',
};

const outputFile = './swagger.json';
const routes = ['./server.js'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen()(outputFile, routes, doc);
