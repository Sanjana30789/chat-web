import mongoose from "mongoose";

const dbconnect = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_CONNECT)
        console.log("DB connected successfully")
    } catch (error) {
        console.log(console.error)
    }
}

export default dbconnect