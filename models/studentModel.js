import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    username:{type:String,required:true},
    password:{type:String,required:true},
    department:{type:String},
    age:{type:Number}
    
});

export default mongoose.model("students",studentSchema);