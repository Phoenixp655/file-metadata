const express = require('express');
const multer = require('multer');
require('dotenv').config()
const app = express();



app.route('/').get((req, res) => {res.sendFile(__dirname + '/views/index.html')}).post((req, res) => {})























const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server running on port ${PORT}`))


