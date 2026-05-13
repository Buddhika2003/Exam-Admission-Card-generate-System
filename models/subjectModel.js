import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    credits:{type:Number,required:true},
    lecturer:{type:Schema.ObjectId,required:true,ref:"lecturers"}

}); 

export default mongoose.model("subjects",subjectSchema);

