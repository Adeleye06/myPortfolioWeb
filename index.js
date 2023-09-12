const express = require ('express');
const path = require ('path');
const app = express();
const ejsMate = require('ejs-mate');

app.engine('ejs', ejsMate);
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, "public")));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.redirect('about');
})
app.get('/about', (req, res) => {
    res.render('about');
})
app.get('/projects', (req, res) => {
    res.render('projects');
})
app.get('/contact', (req, res) => {
    res.render('contact');
})

app.get('/files/:fileName', (req, res) => {
    const fileName = req.params.fileName;
    const filePath = path.join(__dirname, 'files', fileName);

   try {
     res.sendFile(filePath);
   } catch (error) {
        console.log('error sending file:', error);
        res.status(500).send('Internal Server Error');
   }
})

app.listen(3000, () => {
    console.log('Serving at port 3000');
})