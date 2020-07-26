const express = require('express');
const bodyParser = require('body-parser');

const api = express();

// defaults to .get route
api.use(express.static(__dirname + '/public'));
api.use(bodyParser.json());

api.listen(3000, () => {
    console.log('API up and running!');
});

// api.get('/', (req, res) => {
//     // console.log(req);
//     res.send('Hello, World!');
// })

// api.use((req, res, next) => {
//     console.log('Hello');
// });

api.post('/add', (req, res) => {
    console.log(req.body)
    res.send('It works!');
});

