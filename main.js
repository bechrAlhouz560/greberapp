require('dotenv').config()


// creating the server
const fs = require('fs'),
 bodyParser = require('body-parser'),
  cors = require('cors'),
  exp = require('express'),
express = exp(3000),

bot = require('./bot/init')



const {
  parse
} = require('url')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({
  dev
})
const handle = app.getRequestHandler()
const mongoose = require('mongoose');
const path = require('path');
express.use(bodyParser.json());
express.use(bodyParser.urlencoded({
  extended: false
}));
express.use(cors());



// creating and connecting to the server and the database


mongoose.connect(process.env.MONGODB_URI, {
  dbName: "vido"
}, function (err) {
  
  if (!err) {
    
    app.prepare().then(() => {


      express.use(function (req, res) {
        const parsedUrl = parse(req.url, true)
        handle(req, res, parsedUrl)
      });
    })
  } else {

    console.log(err)
    express.get('/',function (req,res) {
        res.send('Server unavailable')
    });

    
  }
  express.listen(process.env.PORT || 8978)
});
