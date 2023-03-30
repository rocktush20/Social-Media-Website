const middleAuth = (req,res,next)=>{
    const email = req.body.email;
    const password = req.body.password;
    
    if(!email || !password)
    {
        res.status(404).send("Email and Password are mandatory");
        return;
    }

    next();
}
module.exports = middleAuth;