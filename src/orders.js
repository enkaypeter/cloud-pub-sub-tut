const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();
const ordersRoute = require('./routes/orders');
const helmet = require('helmet');
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const { MAIN_PORT, NODE_ENV } = process.env;
NODE_ENV !== "production" ? app.use(morgan('dev')) : app.use(morgan('combined'));

app.use(helmet());
app.use(cors());
app.use('/api/orders', ordersRoute);



app.listen(MAIN_PORT);
if (NODE_ENV !== "production" ) {
    console.log(`Orders service is running at http://localhost:${MAIN_PORT}`);
}
