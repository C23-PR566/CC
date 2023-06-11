import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import dbConfig from "./config/Database.js";
import router from "./routes/index.js";
//import Users from "./model/usermodel.js";

dotenv.config();
const app = express();

try {
    await dbConfig.authenticate();
    console.log('Connected to MySQL Database');
    //await Users.sync()
} catch (error) {
    console.error(error);
}

// cors origin hrs ditentuin apa ngga
app.use(cors({ credentials:true, origin:''}));
app.use(express.json());
app.use(router);
app.use(cookieParser());

app.listen(8080, ()=> console.log('Server Running at Port 8080'));