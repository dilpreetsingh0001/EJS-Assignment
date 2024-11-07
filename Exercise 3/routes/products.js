const express = require('express');
const router = express.Router();
const products = [
  { name: 'Airpods A1', price: '$10' },
  { name: 'Apple watch', price: '$20' },
  { name: 'Apple Pen', price: '$30' }
];
router.get('/', (req, res) => {
  res.render('product', { products });
});

module.exports = router;         
