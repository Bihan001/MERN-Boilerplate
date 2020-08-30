const express = require('express');
const router = express.Router();

router.get('/hello', (req, res) => {
  res.status(200).send('Hello Friend!');
});

module.exports = router;
