const express = require('express');
const hndbrs = require('express-handlebars');
const app = express()

const conection = require('./db/conection')

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

try {
app.get('/alltasks', async (req, res) => {

  const data = await tarefas.findAll({raw: true})

  res.render('alltasks', {data})
})

app.get('/updatetask/:id', async (req, res) => {

  const { id } = req.params
  
  const data = await tarefas.findOne({
    where: {id: id},
    raw: true
  })

  console.log(data)

  res.render('updatetask', {data: data}) // esse troço adiciona texto interativo usando `${}`

})

app.get('/taskdescription/:id', async (req, res) => {
  let { id } = req.params;

  const data = await tarefas.findOne({
    raw: true,
    where:{id: id}
  })

  res.render('taskdescription', {data: data})
})

app.post('/addTask', async (req, res) => {
  const { task, description } = req.body

  await tarefas.create({task, description})

  res.redirect('/')
})

app.post('/deletetask/:id', async (req, res) => {
  let { id, task, description } = req.params;

  await tarefas.destroy({where: {id:id}})

  res.redirect('/alltasks')

})

app.post('/updatetask/:id', async (req, res) => {
  let { id } = req.params;
  let { task, description } = req.body;

  await tarefas.update({task, description}, {where: {id: id}})

  res.redirect('/alltasks')
})

try {
  conection.sync().then(() => {
    app.listen(3000)
  })
  console.log('aplicação rodando na porta 3000')
} catch(err) {
  console.log
}