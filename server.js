const express = require("express");
const app = express();
const routes = require("./src/routes/cadastro")


app.use(express.json());
app.use(routes)


app.listen(800,()=>console.log("Rodando"));