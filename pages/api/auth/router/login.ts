import { NextApiRequest, NextApiResponse } from "next";
import Joi from "joi";
import { logInController } from "../../../../controller/auth/login";

const logInHandler = async(req:NextApiRequest,res:NextApiResponse) => {
  try {
    if (req.method === 'POST') {
      const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(6).max(12).required(),
      })
      const { value, error } = schema.validate(req.body);
      if (error) {
        throw {
          status: 422,
          message: "Validation error"
        }
      } else {
        const val = await logInController(value);
          if (val === null) {
            throw {
              status:401,
              message: "Password doesn't match"
            }
          } else {
            res.status(200).json({
              message: 'Login Succesfull',
              token:val,
            })
          }
      }
    
    }
  }catch(err:any) {
    res.status(err.status || 500).json({
      message:err.message || "Internal error occured",
    })
  }
}
export default logInHandler;