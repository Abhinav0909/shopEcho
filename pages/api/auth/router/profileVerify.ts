import { NextApiRequest,NextApiResponse } from "next";
import { getProfile } from "../../../../controller/auth/getProfile";

const profileHandler = async(req:NextApiRequest,res:NextApiResponse) => {
    try{
        if(req.method === 'POST'){
        if(req.headers.authorization!.length === 0){
            throw{
                status:401,
                message:'token is not authorized',
            }
        }else{
            const token = req.headers.authorization!.substring(7);
            const val = await getProfile(token);
            if(!val){
                throw{
                    status:401,
                    message:"Token is not authorized",
                }
            }else{
                res.status(200).json({
                    message:'Profile found',
                    profile:val,
                })
            }
        }
    }
}catch(err){
    res.status(err.status || 500).json({
        message:err.message||'An error occured' 
    })
}
}
export default profileHandler;