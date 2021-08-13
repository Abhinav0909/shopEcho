import { NextApiRequest, NextApiResponse } from "next";
import Joi from "joi";
import { logInController } from "../../../controller/login";

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
        logInController(value).then((val) => {
          if (val === null) {
            res.status(203).json({
              message: 'Login failed',
            })
          } else {
            res.status(200).json({
              message: 'Login Succesfull',
              token:val,
            })
          }
        }).catch((error) => {
          res.status(error.status || 401).json({
           message:error.message || 'Password need to be checked',
         })
        })
      }
    
    }
  }catch(err) {
    res.status(err.status || 500).json({
      message:err.message || "Internal error occured",
    })
  }
}
export default logInHandler;