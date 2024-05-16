const express = require('express');
const app = express();
const dotenv = require("dotenv");
const port = process.env.PORT || 5000

dotenv.config();
app.listen(port,()=> console.log('hello world'));