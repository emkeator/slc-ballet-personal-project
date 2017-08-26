require('dotenv').config();

const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      session = require('express-session'),
      massive = require('massive'),
      app = express();


app.use(bodyParser.json());
app.use(cors());

massive({
  host: process.env.HEROKU_HOST,
  port: process.env.HEROKU_PORT,
  database: process.env.HEROKU_DATABASE,
  user: process.env.HEROKU_USER,
  password: process.env.HEROKU_PASSWORD,
  ssl: true
}).then( db => {
  app.set('db', db);
  console.log('Databse set');
});

app.get('/api/dancers', (req, res) => {
    app.get('db').getDancers().then(dancers => {
        res.status(200).send(dancers);
    })
})

app.get('/api/shows', (req, res) => {
    app.get('db').getSeasonShows().then(shows => {
        res.status(200).send(shows);
    })
})

const myPort = 3000;
app.listen(myPort, () => `I'm listening on port ` + myPort);