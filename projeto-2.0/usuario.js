const Sequelize= require('sequelize');
 const database=require('./db')
 const Usuario=database.define('usuario',{
     id:{
            type:Sequelize.INTEGER,
            autoIncrement: true,
            allowNull:false,
            primaryKey:true,
        },
        nome:{
            type: Sequelize.STRING,
            allowNull:false
        },
        
        descricao:{
            type: Sequelize.TEXT,
            allowNull: false
        }
    });
    
    module.exports= Usuario;
