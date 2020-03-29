const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();
const route = require('./routes');
const helmet = require('helmet');
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const { PORT, NODE_ENV } = process.env;
NODE_ENV !== "production" ? app.use(morgan('dev')) : app.use(morgan('combined'));

app.use(helmet());
app.use(cors());
app.use('/api', route);



app.listen(PORT);
if (NODE_ENV !== "production" ) {
    console.log(`See where it all happens at http://localhost:${PORT}`);
}
