'use strict'

const Sequelize = require('sequelize');
const db = require('../index.js');

const Book = db.define('books', {
  title: {
   type: Sequelize.STRING, 
   allowNull: false, 
   unique: true, 
  }, 
  author: {
    type: Sequelize.STRING, 
    defaultValue: 'Anonymous',
  },
  genre: {
   type: Sequelize.ENUM('hard scifi','cassette-punk','speculative fiction', 'Afrofuturism'),
  }, 
  summary: {
  	type: Sequelize.TEXT, 
  },
  publicationDate: {
    type: Sequelize.STRING, 
  }
  
})

module.exports = Book;