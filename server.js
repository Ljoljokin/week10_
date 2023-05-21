const express = require('express');
const axios = require('axios');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res)=>{
const message = 'Hello, world!';
    res.render('index');
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running');

});