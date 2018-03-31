const db = require('../db')

const seedBooks = () => db.Promise.map([
  {'title': 'Friday', 'author': 'Robert Heinlein', 'publicationDate': '1982', 'genre' : 'casette punk'},
  {'title': 'Dawn','author': 'Octavia Butler', 'publicationDate': '1987', 'genre' : 'hard scifi'},
  {'title': 'Dhalgren','author': 'Samuel Delany', 'publicationDate': '1975', 'genre' : 'Afrofuturism'},
  {'title': 'To Marry Medusa','author': 'Theodore Sturgeon', 'publicationDate' : '1958', 'genre' : 'speculative fiction'},
  {'title': 'Bluebeard', 'author': 'Kurt Vonnegut', 'publicationDate': '1987', 'genre' : 'speculative fiction'},
  {'title': 'Binti', 'author': 'Nnedi Okorafor', 'publicationDate': '2015', 'genre' : 'Afrofuturism'},
  {'title': 'Frankenstein', 'author': 'Mary Shelley', 'publicationDate': '1818', 'genre' : 'hard scifi'},
  {'title': 'Alien', 'author': 'Alan Dean Foster', 'publicationDate': '1979', 'genre' : 'casette punk'},
], book => db.model('books').create(book));


const seedReviews = () => db.Promise.map([
 {rating: 1, text: "too many machines",book_id:5},
 {rating: 1, text: "not enough machines ",book_id:1},
 {rating: 5, text: "the best!",book_id:2},
 {rating: 2, text: "waste of money",book_id:3},
 {rating: 3, text: "can be better",book_id:4},
 {rating: 3, text: "should be better",book_id:6},
 {rating: 4, text: "blew my mind",book_id:7},
 {rating: 4, text: "just like description",book_id:1}
 ], review => db.model('reviews').create(review));

 db.didSync
   .then(() => db.sync({force: true}))
   .then(seedBooks)
   .then(books => console.log(`Seeded ${books.length} books OK`))
   .then(seedReviews)
   .then(reviews => console.log(`Seeded ${reviews.length} reviews OK`))
   .catch(error => console.error(error))
   .finally(() => db.close())
