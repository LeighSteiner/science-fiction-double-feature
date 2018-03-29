'use strict';

const Review = require('./review');
const Book = require('./book')

Book.hasMany(Review);
Review.belongsTo(Book);

module.exports = {Book, Review};
