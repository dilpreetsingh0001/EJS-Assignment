const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const tasks = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/todo', (req, res) => {
  res.render('index', { taskList: tasks });
});

app.post('/add-task', (req, res) => {
  const newTask = req.body.task;
  tasks.push(newTask);
  res.redirect('/todo');
});

app.post('/delete-task', (req, res) => {
  const taskToDelete = req.body.task;
  const index = tasks.indexOf(taskToDelete);
  if (index !== -1) {
    tasks.splice(index, 1);
  }
  res.redirect('/todo');
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
