import User from "../models/studentModel.js";


export const studentCreate = async(req,res)=>{
    try{
        const userData = new User(req.body);
        const {email} = userData;

        const userExist = await User.findOne({email});

        if(usrExist){
            return req.status(400).json({message:"Student already exist"});
        }

        const saveUser = await useDatasave();

        res.status(200).json(savedUser);
    }catch(error){
        res.status(500).json({error:"Error"});
    }
}