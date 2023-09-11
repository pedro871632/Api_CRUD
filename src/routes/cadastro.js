const {Router} = require("express");
const cadastroControler  = require("../controllers/cadastroControler");

const cadastroControler2 = new cadastroControler();


const cadastro  = Router();


cadastro.get("/consultar",cadastroControler2.consultar);
cadastro.post("/inserir/:nome/:preco/:custo/:qtd",cadastroControler2.inserir);
cadastro.put("/atualizar/:nome/:preco/:custo/:qtd",cadastroControler2.atualizar);
cadastro.delete("/deletar",cadastroControler2.delete);
module.exports = cadastro;
