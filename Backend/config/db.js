//musthaquemt7
//7SucFY3byUk09JX1
import mongoose from 'mongoose'

export const connectDB = async () =>{
    await mongoose.connect(`mongodb+srv://musthaquemt7:${process.env.MONGO_PASSWORD}@cluster0.9z0ug.mongodb.net/grocery`).then(()=>{console.log("DB connected")});
}
