//Instancio sequelize
const { Sequelize } = require("sequelize");

//Llamo el modelo
const animalsModel = require("./animals");

// metodo para conectarnos a la bd, usando async -- await funciones asincronicas
const sequelize = new Sequelize("bd_pruebatecnica", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

const animals = animalsModel(sequelize, Sequelize);


module.exports = {
  sequelize,
  animals
};