import mongoose from "mongoose"
import colors from "colors"
const connectDB=async()=>{
    try{
const conn=await mongoose.connect(process.env.MONGO_URI)
console.log(`connected To Mongodatabase${conn.connection.host}`.bgMagenta.white)
    }catch(error){
        console.log(`Error in mongodb ${error}`.bgRed.white)
    }
}

export default connectDB