const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;

//parse request of content-type - application/json
app.use(express.json());
//parse request of content-type - application/x-www-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require('./app/models');
db.sequelize.sync({force:false}).then(() => {
    console.log('Database is syncing...')
});

//pp.get('/', (req, res) => {
//    res.send('Hello World!');
//})

//const router = require('./routes/test.route.js');
//app.use(router);

require('./app/routes/employee.route')(app);

app.get('/', (req, res) => {
    res.send('Default Route')
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});