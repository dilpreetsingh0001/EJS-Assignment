const express = require('express');
const app = express();
const PORT=8080;
const items = [
  { name: "Country", category: "India" },
  { name: "Book", category: "Physics" },
  { name: "Colour", category: "Red" },
  { name: "Fruit", category: "Orange" },
  {name: "Colour" , category: "Yellow"}
];
app.set('view engine', 'ejs');
app.get('/search', (req, res) => {
  const query = req.query.q;
  let results = [];

  if (query) {
    results = items.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
  }

  res.render('search', { query, results });
});

app.listen(3000, () => {
  console.log(`listening on port ${PORT}`);
});