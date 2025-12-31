const express = require("express");
const conection = require("./DataBase/conection");
const hndbrs = require("express-handlebars");

const app = express();
app.engine("handlebars", hndbrs.engine());
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.render("home");
});

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
