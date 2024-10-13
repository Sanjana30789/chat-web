// import express from 'express';
// import dotenv from 'dotenv';
// import dbconnect from './DB/dbconnect.js';
// import authRouter from './rout/authuser.js';


// const app = express();

// app.use(express.json());

// dotenv.config();

// app.use('/api/auth',authRouter)

// app.get('/',(req,resp)=>{
//     resp.send("This is sanjana")
// })

// const PORT = process.env.PORT 

// app.listen(PORT,()=>{
//     dbconnect();
//     console.log(`server is running at ${PORT}`);
// })


import express from "express"
import dotenv from 'dotenv'
import dbConnect from "./DB/dbconnect.js";
import authRouter from  './rout/authuser.js'
import messageRouter from './rout/messageRout.js'
import userRouter from './rout/userRout.js'
import cookieParser from "cookie-parser";
import path from "path";
import {app , server} from './socket/socket.js'


const __dirname = path.resolve();

dotenv.config();


app.use(express.json());
app.use(cookieParser())

app.use('/api/auth',authRouter)
app.use('/api/message',messageRouter)
app.use('/api/user',userRouter)

app.use(express.static(path.join(__dirname,"/frontend/dist")))

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"))
})

const PORT = process.env.PORT || 3000

server.listen(PORT,()=>{
    dbConnect();
    console.log(`Working at ${PORT}`);
})