const db = require('../db') //this is required
const Review = require('../db/models/review');
const Product = require('../db/models/product');

const router = require('express').Router()

router.get('/', function(req, res, next) {
    Review.findAll({
            include: [Product]
        })
        .then(result => {
            res.status(200).send(result);
        })
        .catch(next);
});

router.get('/:id', function(req, res, next) {
    Review.findOne({
            where:{id:req.params.id},
            include: [Product]
        })
        .then(result => {
            res.status(200).send(result);
        })
        .catch(next);
});

router.post('/', (req, res, next) => {
    console.log('hi')
  Review.create(req.body)
  .then(newReview => res.json(newReview))
  .catch(next)
})

module.exports = router;
