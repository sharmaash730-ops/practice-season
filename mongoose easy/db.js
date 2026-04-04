import mongoose from "mongoose";
const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb://127.0.0.1:27017/ashish2`)
        console.log("connect succesfuly")
    } catch (error) {
        console.log("error:", error)
    }

}
export default connectDB;