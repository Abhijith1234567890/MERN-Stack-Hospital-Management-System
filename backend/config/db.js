import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect("mongodb+srv://abhijith_db_user:BqtjXhvyl9937uzx@cluster0.rjos9q3.mongodb.net/MediCare")
  .then(() => {
    console.log("DB CONNECTED");  
  })
}