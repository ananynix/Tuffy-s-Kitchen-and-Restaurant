import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://ananynix:7thOct2023@cluster0.ebw3pdj.mongodb.net/food-del').then(()=>console.log("DB Connected"));
    
}
