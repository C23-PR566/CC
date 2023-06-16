import {Sequelize} from "sequelize";

const dbConfig = new Sequelize('signabc_db','root','',{
    host: "localhost",
    dialect: "mysql"
});

export default dbConfig;