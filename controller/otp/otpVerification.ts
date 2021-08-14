import { ObjectId } from "bson";
import database from "../../common/database";
import * as bcrypt from 'bcrypt';
import { CheckResult, otpParams } from "../../models/otpVerify";
interface Data{
  _id: ObjectId,
  otp: string,
  newPassword:string,
  
}
export const verificationController = async (user:otpParams):Promise<CheckResult> => {
  try {
    const data: Data = await (await database()).collection('otp').findOne({ email: user.email }) as Data;
    if (data === null) {
      return {
        status: 404,
        message: 'Otp cannot be found.Create a new one',
      }
    } else {
      if (user.otp !== data.otp) {
        return {
          status: 404,
          message: "Otp doesn't match",
        }
      } else {
        const salts = bcrypt.genSaltSync(parseInt(process.env.SALT_ROUNDS as string));
        const hashedPassword = bcrypt.hashSync(user.newPassword, salts);
        await (await database()).collection('customers').findOneAndUpdate({ email: user.email }, { $set: { password: hashedPassword } });
        await (await database()).collection('otp').findOneAndDelete({ email: user.email });
        return {
          status: 200,
          message:'Password has been successfully changed',
        }
      }
    }
  } catch (err) {
    return {
      status: 500,
      message:'An error occcured',
    }
  }
}