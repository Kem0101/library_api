const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fs = require('fs');


const Book = require('./models/bookModel');

dotenv.config();

// DB Connnection
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})


// Read JSON file
const books = JSON.parse(
    fs.readFileSync(`${__dirname}/data/books.json`, 'utf-8')
    );


// Populate data to DB
 const importData = async () => {
    try {
        await Book.create(books);
        console.log('Data imported');
        process.exit();
    
  } catch (error) {
    console.log(error)
  }
}