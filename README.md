# the code stuff
This project uses create-react-app-fullstack (https://www.npmjs.com/package/create-react-app-fullstack), which is bootstrapped from create-react-app but includes an express/postgres back-end.
getting started: after cloning/downloading and npm install, createdb "canvs", and run "npm run seed" which will seed the database with some books and reviews.  run npm start and visit http://localhost:3000/ in your browser.  

# the app stuff (the fun stuff)

the main page displays a list of books and their authors, and there is a suite of filter buttons in the footer that will allow the user to view the books by sub-genre.  

there is also a form on this page which will allow the user to add a new book to the general list. 

clicking on any list item will bring the user to individual book-details page, where the individual details of the book can be edited.  on this page, the user can also reveal the reviews written about that book, or write a new review. 

clicking on the header will return a user to the main page. 
