const express = require('express');
const app = express();
const port = 3000;
app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/welcome', (req, res) => {
    const userName = 'Dilpreet Singh';
    const currentTime = new Date();
    const hour = currentTime.getHours();
    let greeting;
    let ans;
    if (hour < 12) {
        greeting = 'Good morning';                   //Exercise 1
        ans='How can we assist you today?'
    } else if (hour < 17) {
        greeting = 'Good afternoon';
    } else {
        greeting = 'Good evening';
    }

    res.render('welcome', { userName, greeting , ans});
});


app.listen(port, () => {
    console.log(`listening on ${port}`);
});
