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

app.get('/api/performances', (req, res) => {
    app.get('db').getPerformances().then(performances => {
        res.status(200).send(performances);
    })
})

app.get('/api/performances/tickets/:showID', (req, res) => {
    app.get('db').getTicketsByShowID(+req.params.showID).then(tickets => {
        res.status(200).send(tickets);
    })
})

app.patch('/api/performances/tickets/:showID/:section/:seat_row/:num/:action', (req, res) => {
    let {showID, section, seat_row, num, action} = req.params;
    showID = +showID;
    num = +num;
    action = +action;
    app.get('db').updateTicket(showID, section, seat_row, num, action).then(ticket => {
        res.status(200).send(ticket);
    })
})

app.get('/api/theSecretLiesWithCharlotte', (req, res) => {
    res.status(200).send({charlotte: process.env.GOOGLE_API_KEY});
})

const myPort = 3005;
app.listen(myPort, () => console.log(`I'm listening on port ` + myPort));