const express = require('express');
const dotenv = require('dotenv');

const conectionDB = require('./config/database.js'); 
const bookRoutes = require('./routes/bookRoute.js');

const app = express();

dotenv.config(); // dotenv to set environment variables
conectionDB();

// CORS
// Configurar cabeceras y cors


// Middleware
app.use(express.json());

// uploading routes
app.use('/api', bookRoutes);

// going up server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}!`);
});

