const user = require("../models/users");
const bcrypt = require("bcrypt");
const loginController = async (req,res)=>{
    const email = req.body.email;
    const password = req.body.password;

    const User = await user.findOne({email});
    if(!User)
    {
        res.status(404).send("User not exist");
        return;
    }
    
    if(await bcrypt.compare(password,User.password))
    {
        res.status(201).json(User);
    }
    else
    {
        res.status(404).send("Password not matched");
    }
}

const signupController = async (req,res)=>{
    const email = req.body.email;
    const password = req.body.password;

    const User = await user.findOne({email});
    if(User)
    {
        res.status(403).send("User already exist");
        return;
    }
    const hashPass = await bcrypt.hash(password,10);
    const newUser = new user({email,password : hashPass});
    await newUser.save();
    res.status(200).send(newUser);
}

module.exports = {loginController,signupController};