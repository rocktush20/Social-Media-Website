const user = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
        const AccessToken = generateAccessToken({_id: User._id, email: User.email});
        res.status(200).json({AccessToken});
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

const generateAccessToken = (data)=>{
    try {
        const token = jwt.sign(data,"ufhehfbjksafufh",{expiresIn: '60s'});
        return token;
    } 
    catch (error) {
        console.log(error);
    }
}

module.exports = {loginController,signupController};