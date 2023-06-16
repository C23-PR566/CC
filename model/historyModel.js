import { Sequelize } from "sequelize";
import dbConfig from "../config/Database.js";

const { DataTypes } = Sequelize;

const history = dbConfig.define('classHistory', {
    userId:{
        type: DataTypes.STRING
    },
    classId:{
        type: DataTypes.STRING
    },
    timestamp:{
        type: DataTypes.TIME
    }
});

export default history;