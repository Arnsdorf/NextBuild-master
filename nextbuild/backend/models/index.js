const Sequelize = require("sequelize");

// Opretter en ny Sequelize instans med de angivne databaseoplysninger
const sequelize = new Sequelize("hecamefromsporting_com_db", "hecamefromsporting_com", "Ge4FBDrbndx6", {
  host: "mysql31.unoeuro.com",
  dialect: 'mysql',
  port: 3306 
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Antager, at du har en model defineret som 'pcComponent.model.js'
db.nx = require("./pcComponent.model.js")(sequelize, Sequelize);

module.exports = db;
