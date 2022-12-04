const sequelize__pkg = require("sequelize")

const sequelize = new sequelize__pkg('transportation', 'root', '7218', {
    host: 'localhost',
    dialect: "mysql"
});
module.exports = sequelize

sequelize.authenticate().then(()=>{
console.log("successfully connected mysql")
}).catch((err)=>{
    console.log(err)
})