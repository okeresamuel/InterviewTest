const sequelize__pkg = require("sequelize")
const dotenv = require("dotenv").config()

const sequelize = new sequelize__pkg(process.env.DB_NAME || "sql9583009",  process.env.DB_USER || 'sql9583009',  process.env.DB_PASSWORD || 'tSdQVkYmty', {
    host: process.env.DB_HOST || "sql9.freesqldatabase.com",
    dialect: process.env.DB_SQL || "mysql",
    port: "3306"
});
module.exports = sequelize

sequelize.authenticate().then((data)=>{
console.log("successfully connected mysql")
}).catch((err)=>{
    console.log(err)
})