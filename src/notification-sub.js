const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();
const notificationsRoute = require('./routes/notification.js');
const helmet = require('helmet');
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const { PORT_2, NODE_ENV } = process.env;
NODE_ENV !== "production" ? app.use(morgan('dev')) : app.use(morgan('combined'));

app.use(helmet());
app.use(cors());
app.use('/api/notification', notificationsRoute);



app.listen(PORT_2);
if (NODE_ENV !== "production" ) {
    console.log(`Notification service is running at http://localhost:${PORT_2}`);
}
