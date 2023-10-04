//added in future work
//can't apply here, since i'm using both oauth and my registration

const jwt=require('jsonwebtoken');

//next parameter allow to make function continue
exports.verifyToken = async (req,res,next) =>{

    try{
        //From req header grabbing Authorization header
        //that is set by front-end
        let token = req.header("Authorization");

        //If token doesn't exit, return access denied
        if(!token){
            return res.status(403).send("Access Denied");
        }

        if(token.startsWith("Bearer ")){
            token = token.slice(7,token.length).trimLeft();
        }
    
        //if not verified will throw error
        const verified = jwt.verify(token , process.env.JWT_SECRET);
        req.user = verified;
        next();
    }

    catch(err){
        res.status(500).json({error:err.message});
    }
}