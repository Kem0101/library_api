'use strict';


const Book = require('../models/bookModel');



// show books list
async function getBooks(req, res) {

  try {
    const books = await Book.find();
    const booksList = books.map(book => `${book.bookname}`);
    const total = books.length;

    return res.json({ total, booksList });
  } catch (error) {
    console.log(error);
  }
}


// show a single book
async function getBook(req, res) {
  let {id, page, format} = req.params;
 
  
  const book = await Book.findById(id);

  if(page && format == 'html'){
    let title = book.bookname;
    let result = await book.body.filter(bookPage => bookPage.page == page)
    return res.send(`<h1> ${title} </h1> <div> ${result} </div>`)

  }else if(page){
    let title = book.bookname;
    let result = await book.body.filter(bookPage => bookPage.page == page)
    return res.send({ title, result })
  }else {
    
    return  res.send({ book })
  }
  
}



module.exports = {
  getBooks,
  getBook
};




