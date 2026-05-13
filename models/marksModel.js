import mongoose from "mongoose";

const markSchema = new mongoose.Schema({
    ICA1:{type:Number},
    ICA2:{type:Number},
    ICA3:{type:Number},
    attendence:{type:Number},
    eligibility:{type:Boolean},
    subject:{type:Schema.ObjectId,required:true,ref:"subjects"},
    student:{type:Schema.ObjectId,required:true,ref:"students"}
});

export default mongoose.model("marks",markSchema);