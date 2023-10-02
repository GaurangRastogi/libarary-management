//added in future work
//can't apply here, since i'm using both oauth and my registration

const jwt=require('jsonwebtoken');

//next parameter allow to make function continue
export const verifyToken = async (req,res,next) =>{

    try{
        //From req header grabbing Authorization header
        //that is set by front-end
        let token = req.header("Authorization");

        //If token doesn't exit, return access denied
        if(!token){
            return res.status(403).send("Access Denied");
        }

        if(token.startsWith("Bearer ")){
            //So we're taking whatever present in seven after "Bearer "
            //Go to userWidget.jsx
            //Just trick to misUsing token 
            token = token.slice(7,token.length).trimLeft();
        }

        const verified = jwt.verify(token , process.env.JWT_SECRET);

        req.user = verified;

        //Now we can run the next function
        //For example if index.js 
        //In app.post(/auth/register ) ->route,
        //we call verifyToken inplace of upload.single then next() -> help us to run register() =>controller next function
        next();
    }

    catch(err){
        res.status(500).json({error:err.message});
    }
}