const api = module.exports = require('express').Router()
const books = require('./books');
const reviews = require('./reviews');

api
  .get('/express-test', (req, res) => res.send({express: 'working!'})) //demo route to prove api is working
  .use('/books', books)
  .use('/reviews', reviews)
// No routes matched? 404.
api.use((req, res) => res.status(404).end())
