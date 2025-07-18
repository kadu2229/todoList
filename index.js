const express = require('express');
const hndbrs = require('express-handlebars');
const app = express()
const conection = require('./db/conection')
const tarefas = require('./modules/tarefas')

app.engine('handlebars', hndbrs.engine())
app.set('view engine', 'handlebars')
app.use(express.static('public'))
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())


app.get('/', (req, res) => {
  res.render('home')
})

app.post('/addTask', async (req, res) => {
  const { task, description } = req.body

  await tarefas.create({task, description})

  res.redirect('/')
})

try {
  conection.sync().then(() => {
    app.listen(3000)
  })
  console.log('aplicação rodando na porta 3000')
} catch(err) {
  console.log
}