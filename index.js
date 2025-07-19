const express = require('express');
const hndbrs = require('express-handlebars');
const app = express()
//const conection = require('./db/conection')

app.engine('handlebars', hndbrs.engine())
app.set('view engine', 'handlebars')
app.use(express.static('public'))


app.get('/', (req, res) => {
  res.render('home')
})

  app.listen(3000)

/*try {
  conection.sync().then(() => {
    app.listen(3000)
  })
  console.log('aplicação rodando na porta 3000')
} catch(err) {
  console.log
}*/