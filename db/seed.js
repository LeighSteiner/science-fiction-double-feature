const db = require('../db')

const seedBooks = () => db.Promise.map([
  {'title': 'Friday', 'author': 'Robert Heinlein', 'publicationDate': '1982', 'genre' : 'science fiction'},
  {'title': 'Dawn','author': 'Octavia Butler', 'publicationDate': '1987', 'genre' : 'science fiction'},
  {'title': 'Dhalgren','author': 'Samuel Delaney', 'publicationDate': '1975', 'genre' : 'science fiction'},
  {'title': 'To Marry Medusa','author': 'Theodore Sturgeon', 'publicationDate' : '1958', 'genre' : 'science fiction'},
], book => db.model('books').create(book));

// const seedReviews = () => db.Promise.map([
//  {rating: 1, review_text: "awful",product_id:5},
//  {rating: 1, review_text: "if you have too much extra money ",product_id:1},
//  {rating: 5, review_text: "the best!",product_id:2},
//  {rating: 2, review_text: "waste of money",product_id:3},
//  {rating: 3, review_text: "can be better",product_id:4},
//  {rating: 3, review_text: "should be better",product_id:6},
//  {rating: 4, review_text: "good price",product_id:7},
//  {rating: 4, review_text: "just like description",product_id:1}
//  ], review => db.model('reviews').create(review));

 db.didSync
   .then(() => db.sync({force: true}))
   .then(seedBooks)
   .then(books => console.log(`Seeded ${books.length} books OK`))
   // .then(seedReviews)
   // .then(reviews => console.log(`Seeded ${reviews.length} reviews OK`))
   .catch(error => console.error(error))
   .finally(() => db.close())
