require('dotenv').config();
const express = require('express');
const userRouter = require('./src/routes/user.routes');
const bodyParser = require('body-parser');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
// Create express instance
const app = express();
const port = process.env.PORT || 4000;

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Backend Examination using Express',
    version: '1.0.0',
  },
  servers: [
    {
      url: 'http://localhost:4000',
      description: 'Development server',
    },
  ],
  components: {
    schemas: {
      UserSetting: {
        properties: {
          id: {
            type: 'integer',
            description: 'Auto increment id of the user setting',
          },
          preferredTheme: {
            type: 'string',
            enums: ['light', 'dark', 'system'],
            default: 'system',
          },
          resultsPerPage: {
            type: 'int',
            default: 20,
            min: 20,
            max: 100,
          },
          sendEmail: {
            type: 'boolean',
            default: true,
          },
        },
      },
    },
    requestBodies: {
      UserSettingBody: {
        required: true,
        description: 'A sample request body for PUT/PATCH/POST',
        type: 'object',
        properties: {
          preferredTheme: {
            type: 'string',
            enums: ['light', 'dark', 'system'],
            default: 'system',
          },
          resultsPerPage: {
            type: 'int',
            default: 20,
            min: 20,
            max: 100,
          },
          sendEmail: {
            type: 'boolean',
            default: true,
          },
        },
      },
    },
  },
};

const options = {
  swaggerDefinition,
  apis: ['./src/routes/*.js'],
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/ping', (req, res) => {
  const currDate = new Date();
  res.json({ timestamp: currDate });
});
app.use('/user', userRouter);

const swaggerSpec = swaggerJSDoc(options);
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(function (req, res) {
  res.status(404).json({ error: 'Not found!' });
});

module.exports = app;
