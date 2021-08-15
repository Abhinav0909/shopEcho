import { NextApiRequest, NextApiResponse } from "next";
import Joi from "joi";
import { otpGeneratorController } from '../../../../controller/otp/otpGenerator'

const otpGenerator = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'POST') {
      const schema = Joi.object({
        email: Joi.string().email().required(),
      })
      const { value, error } = schema.validate(req.body);
      if (error) {
        throw {
          status: 422,
          message: 'Validation error',
        }
      }
      else {
        const val = await otpGeneratorController(value.email);
        if(val === 'Successful')
          res.status(200).json({
            message: val,
          })
        else {
          res.status(404).json({
            message: val,
          })
        }

      }
    }
  } catch (err) {
    res.status(err.status || 500).json({
      message: err.message || "Internal error occured",
    })
  }
}
export default otpGenerator;