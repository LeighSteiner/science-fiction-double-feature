const db = require('../db') //this is required
const Review = require('../db/models/review');


const router = require('express').Router()

router.get('/', function(req, res, next) {
    Review.findAll({})
        .then(result => {
            res.status(200).send(result);
        })
        .catch(next);
});

router.get('/:id', function(req, res, next) {
    Review.findOne({
            where:{id:req.params.id},
        })
        .then(result => {
            res.status(200).send(result);
        })
        .catch(next);
});

router.post('/', (req, res, next) => {
  Review.create(req.body)
  .then(newReview => res.json(newReview))
  .catch(next)
})

module.exports = router;
