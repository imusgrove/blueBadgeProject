require('dotenv').config();
require('./db');
const express = require('express');
const app = express();
const http = require('http').Server(app);
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json())
app.use('/user', require('./controllers/usercontroller'))
app.use(require('./middleware/validate-session'));
app.use('/shelter', require('./controllers/sheltercontroller'))
app.use('/profile', require('./controllers/profilecontroller'))

http.listen(process.env.PORT, () => {
    console.log(`server is listening on port ${process.env.PORT}`)
})