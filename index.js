const express = require('express');
const hndbrs = require('express-handlebars');
const app = express()

app.engine('handlebars', hndbrs.engine())
app.set('view engine', 'handlebars')


app.get('/', (req, res) => {
  res.render('home')
})

app.listen(3000)