const express = require ('express');
const path = require ('path');
const app = express();
const ejsMate = require('ejs-mate');

app.engine('ejs', ejsMate);
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, "public")));
app.set('view engine', 'ejs');


app.get('/about', (req, res) => {
    res.render('about');
})
app.get('/projects', (req, res) => {
    res.render('projects');
})
app.get('/contact', (req, res) => {
    res.render('contact');
})
app.get('/', (req, res) => {
    res.redirect('about');
})
app.listen(3000, () => {
    console.log('Serving at port 3000');
})