const express = require('express');
require('dotenv').config();
const formidable = require('formidable')
const app = express();
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.use(cors({optionsSuccessStatus: 200}))

// @ render index.html page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
});

// @ parse form file data and send file infomation
app.post('/api/fileanalyse', (req, res) => {
    const getFile = formidable({multiples: true});
    getFile.parse(req, (err, field, file) => {
        const {upfile: upFile} = file;
        res.status(200).json({name: upFile.originalFilename, type: upFile.mimetype, size: upFile.size})
    })
})






















const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server running on port ${PORT}`))


