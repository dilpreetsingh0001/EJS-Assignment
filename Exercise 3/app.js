const path = require('path');
const express = require('express');
const app = express();
const productsRouter = require('./routes/products');

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

app.use('/products', productsRouter);

const PORT = 9010;
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
