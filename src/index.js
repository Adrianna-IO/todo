const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const api = express();

//create a mysql connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Password',
    database: 'todo'
});

try {
    connection.connect();
   } catch (e) {
    console.log('Oops. Connection to MySQL failed.');
    console.log(e);
   }

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

    connection.query('INSERT INTO tasks (description) VALUES (?)', [req.body.item], (error, results) => {
        if (error) return res.json({ error: error });

      connection.query('SELECT LAST_INSERT_ID() FROM tasks', (error, results) => {
         if (error) return res.json({ error: error });
         
      console.log(results);
        });
       });
});

