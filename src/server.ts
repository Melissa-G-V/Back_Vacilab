import 'reflect-metadata'
import express from 'express'
import multer from 'multer'
import cors from 'cors'
import { AppDataSource } from './database/data-source'
// import { DataSourceAuth } from './database/data-source'
import helmet from "helmet";
import routers from './app/routes/routes'
import { config } from 'dotenv';



config();
const app = express()
//const multer = require('multer');
//const upload = multer({ dest: 'uploads/' });
app.use(cors())
app.use(helmet())
app.use(express.json())


app.use(routers)
AppDataSource.initialize().then(async()=>{
    console.log('Conected')
    app.listen(3004, () =>{
        console.log('Server Listening port 3004')
    })
})


// DataSourceAuth.initialize().then(() => {
//     console.log('Connected to MongoDB');
// }).catch(error => console.log(error));