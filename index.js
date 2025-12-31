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
  const data = await tasks.findAll({raw: true})
  res.render("home", {data});
});

app.post('/addTask', async (req,res) => {
  const { task,description } = req.body;
  console.log(data)
  await tasks.create({
    task,
    description
  })
  res.redirect('/')
})

app.post('/deleteTask', async (req, res) => {
  const data = await tasks.findAll({raw: true})


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
