import mongoose from "mongoose";
const url=process.env.DB_URL;
const connect = async () => {
    try {
        await mongoose.connect(url);
        console.log("MongoDB is Connected");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}
export default connect;