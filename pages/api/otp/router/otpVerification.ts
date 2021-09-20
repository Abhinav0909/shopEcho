import { NextApiRequest, NextApiResponse } from "next";
import Joi from "joi";
import { verificationController } from "../../../../controller/otp/otpVerification";
const verifyOtpHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'POST') {
      const schema = Joi.object({
        email: Joi.string().email().required(),
        otp: Joi.string().required(),
        newPassword: Joi.string().min(6).max(12),
      })
      const { value, error } = schema.validate(req.body);
      if (error) {
        throw {
          status: 422,
          message:'Validation Error',
        }
      } else {
        const val = await verificationController(value);
          res.status(val.status).json({
            message: val.message,
         })
        
      }
    }
  } catch (err:any) {
    res.status(err.status || 500).json({
     message:err.status || "Internal error occured",
    })
  }
}
export default verifyOtpHandler;