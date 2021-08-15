import { ObjectId } from "mongodb";
import { customAlphabet } from "nanoid";
import database from "../../common/database";
interface Data{
  _id:ObjectId
  email:string,
}
const nanoid = customAlphabet('1234567890', 4);
export const otpGeneratorController = async(email:string) => {
  try {
    const data = await (await database()).collection('customers').findOne({email:email }) as Data;
    if (!data) {
      throw { message: 'There is no account linked to this mail id' }
    }
    else{
      const otpCreator = await (await database()).collection('otp').findOne({ email: email });
      if (!otpCreator) {
        await (await database()).collection('otp').findOneAndDelete({ email: email });
      } 
        const otpCreation = nanoid();
        await (await database()).collection('otp').insertOne({ otp: otpCreation, email: email, expireAt: new Date() })
        return 'Successful';
    }
  } catch(err) {
    throw {
      message:err.message || 'An error occured'
    }
  }
}