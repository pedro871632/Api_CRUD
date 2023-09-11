const knex = require("../database/knex/index");

class Cadastro{

    async consultar(request,response){
        const {nome,preco,custo}=request.body;

        const dados = await knex("PRODUTOS").where({});
        
        return response.json(dados)
    }


    async inserir(request,response){
        const {nome,preco,custo,qtd:quantidade} = request.body;

        const resultado = await knex("PRODUTOS").where({
            nome
        });

        if(resultado.length>0){
            return response.json({
                status: "Este produto ja existe!"
            })

        }

        const dados = await knex("PRODUTOS").insert({
            nome,preco,custo,quantidade
        })

        response.json({
            status:"Sucesso!"

        })


    }

    async atualizar(request,response){

        const {nome,preco,custo,qtd:quantidade} = request.body;


        await knex("PRODUTOS").where({nome}).update({preco,custo,quantidade});


        return response.json({
            status: "Dados atualizados com sucesso ! "
        });


    }

    async delete(request,response){

        const {nome} = request.body;

        await knex("PRODUTOS").where({nome}).del();



        return response.json({
            status:"Registro deletado com sucesso! "

        });






    }


}

module.exports = Cadastro;