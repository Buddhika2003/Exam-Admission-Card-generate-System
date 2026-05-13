import mongoose from "mongoose";

const lecturerSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    username:{type:String,required:true},
    password:{type:String,required:true},
    jobtitle:{type:String,required:true}
});

export default mongoose.model("lecturers",lecturerSchema);