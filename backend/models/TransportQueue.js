const sequelize = require("../config/db")
const Sequelize = require("sequelize")

const TransportQueue = sequelize.define("TransportQueue", {
    Name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    Pick_UP_Location:{
        type:Sequelize.STRING,
        allowNull:false
    },
    Drop_Off_Location:{
        type:Sequelize.STRING,
        allowNull:false
    }
})

module.exports = TransportQueue;

