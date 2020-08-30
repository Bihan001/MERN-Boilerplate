const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const path = require('path');

const PORT = process.env.PORT || 5000;

//MiddleWare
app.use(express.json());
app.use(cors());

//Database connection

/*mongoose
  .connect(process.env.DATABASE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((res) => {
    console.log('Database Connection Successful');
  })
  .catch((err) => {
    console.log('Database not connected ' + err);
  }); */

//ROUTES
app.use('/', require('./routes/api/routes'));

//Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  //Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

//LISTEN ON GIVEN PORT
server.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}...`);
});
