 const adminAuth = (req,res,next)=>{
    const token = 'xyz';
    const isAdminAuthorized = token === 'xyz';
    if(!isAdminAuthorized){
        res.status(401).send("Unauthorized admin");
    }else{
        next();
    }
};

 const userAuth = (req,res,next)=>{
    const token = 'xyz';
    const iuserAuthorized = token === 'xyz';
    if(!iuserAuthorized){
        res.status(401).send("Unauthorized user");
    }else{
        next();
    }
};

module.exports= {adminAuth, userAuth}