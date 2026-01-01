const express = require("express");
const conection = require("./DataBase/conection");
const hndbrs = require("express-handlebars");
const path = require("path");
const tasks = require('./models/tasks')

const app = express();
app.engine("handlebars", hndbrs.engine());
app.set("view engine", "handlebars");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({
  extended:true
}));
app.use(express.json())
app.get("/", async (req, res) => {
  let data = await tasks.findAll({raw: true})
  console.log(data)
  res.render("home", {data});
});

app.post('/addTask', async (req,res) => {
  const { task,description } = req.body;
  await tasks.create({
    task,
    description
  })
  res.redirect('/')
})

app.post('/deleteTask', async (req, res) => {
  let { id } = req.body;

  const task = await tasks.destroy({where:{id}});
  console.log(task)
  res.redirect('/')
})

const appInit = async () => {
  try {
    await conection.sync()
    app.listen(3000)
    console.log('bando de dados sincronizado com sucesso')
  } catch(err) {
    console.log(err)
  }
};

appInit();
