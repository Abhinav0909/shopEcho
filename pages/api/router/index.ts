import { NextApiRequest, NextApiResponse } from "next";
import Joi from 'joi';
import { signUpController } from "../../../controller";

const signUpHandler = async(req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'POST') {
      const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(6).max(12).required(),
        confirmPassword: Joi.string().min(6).max(12).required(),
      })
      const { value, error } = schema.validate(req.body);
      if (error) {
        throw {
          status: 422,
          message: 'Validation Error',
        }
        
      }
      else {
        signUpController(value).then((val) => {
          if (val === true) {
            res.status(201).json({
              message: 'User Created',
            })
          } else {
            res.status(403).json({
              message: 'User already exists',
            })
          }
        }).catch((error) => {
          res.status(error.status || 401).json({
            message:error.message || "You need to confirm your password",
          })
        })
      }
    }
    else {
      res.status(500).json({
        message: 'Invalid http method',
      })
    }
  } catch (e) {
    res.status(e.status || 500).json({
      message: e.message || 'Internal Server Occured',
    })
  }
}

export default signUpHandler;

