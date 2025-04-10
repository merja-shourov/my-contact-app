import jwt from "jsonwebtoken";

const validateTaken = async (req, res, next)=>{
    let token;
    const authHnader = req.headers.authorization || req.headers.Authorization;
    
    if( authHnader && authHnader.startsWith('Bearer')){
        token = authHnader.split(" ")[1];
        
        jwt.verify(token, process.env.SECRET, function(err, decode){
            if( err ){
                throw new Error("Token Not valid");
            }
            console.log(decode.username);
            next();
        })
    }
    
    if( !token ){
        res.status(401);
        throw new Error("Not Authorize");
    }   
}

export default validateTaken;