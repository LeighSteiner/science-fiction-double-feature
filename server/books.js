const db = require('../db') //this is required
const Product = require('../db/models/book');
const Review = require('../db/models/review');

const router = require('express').Router()

router.get('/', (req, res, next) => {
    Book.findAll({
            include: [Review]
        })
        .then(result => {
            res.status(200).send(result);
        })
        .catch(next);
});

router.get('/book/:id', (req, res, next) => {
    Book.findOne({
            where:{ id:req.params.id },
            include: [Review]
        })
        .then(result => {
            res.status(200).send(result);
        })
        .catch(next);
});

router.put('/book/:id', (req, res, next) => {
  Book.findById(req.params.id)
  .then(book => book.update(req.body))
  .then(updatedBook => res.json(updatedBook))
  .catch(book);
})

router.post('/new-book', (req, res, next) => {
  Book.create(req.body)
  .then( book => res.json(book))
  .catch(next);
})

//find book list by genre
router.get('/genres/:genre', (req, res, next) => {
   Book.findAll({
    where : { genre: req.params.genre}
   })
})
module.exports = router
