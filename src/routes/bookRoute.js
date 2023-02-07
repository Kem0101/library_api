'use strict';

const express = require('express');
const BookController = require('../controllers/bookController');


const router = express.Router();

  
router.get('/books/:page?', BookController.getBooks);
router.get('/book/:id/:page?/:format?', BookController.getBook);


module.exports = router; 