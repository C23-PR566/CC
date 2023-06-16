import { Sequelize } from "sequelize";
import dbConfig from "../config/Database.js";

const { DataTypes } = Sequelize;

const Users = dbConfig.define('registUsers',{
    username:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    },
    refreshToken:{
        type: DataTypes.TEXT
    },
},{
    freezeTableName:true
});

export default Users;