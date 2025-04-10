import jwt from "jsonwebtoken";

const validateTaken = async (req, res, next)=>{

    let token;
    const authHnader = req.headers.authorization || req.headers.Authorization;
    
    if( authHnader && authHnader.startsWith('Bearer')){
        token = authHnader.split(" ")[1];
        
        jwt.verify(token, process.env.SECRET, function(err, decode){
            if( err ){
                console.log("unauthorize user!!!");
                res.status(404).json({err: "unouthorize user!!!"});
            }else{

                console.log(decode.username);
                req.user = decode.username;
                next();
            }
        })
    }
}

export default validateTaken;