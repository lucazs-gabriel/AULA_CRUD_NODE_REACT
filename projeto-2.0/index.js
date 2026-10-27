
//index.js
(async()=>{
  const database= require('./db');
  const Produto= require('./produto');
  const Usuario= require('./usuario')

  try{
    const resultado= await database.sync()
    console.log(resultado);

    const resultadoCreate= await Produto.create({
        nome:'Mouse',
        preco:10,
        descricao: "Um mouse USB bonitão"
    })
  } catch{
    console.log(error);
  }
})();