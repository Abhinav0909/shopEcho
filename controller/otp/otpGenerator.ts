import { ObjectId } from "mongodb";
import { customAlphabet } from "nanoid";
import database from "../../common/database";
const nanoid = customAlphabet('1234567890', 4)
interface Data{
  _id:ObjectId
  email:string,
}
export const otpGeneratorController = async(email:string) => {
  try {
    const data:Data = await(await database()).collection('customers').findOne({ email:email })as Data;
    if (data === null) {
      return 'Check your email again';
    }
    else {
      const otpCreator = await (await database()).collection('otp').findOne({ email:email });
      if (otpCreator === null) {
        await (await database()).collection('otp').findOneAndDelete({ email: email });
      } else {
        const otpCreation = nanoid();
        await (await database()).collection('otp').insertOne({ otp: otpCreation, email:email, expireAt: new Date() })
        return 'Successful';
      }
    }
  } catch (err) {
    return 'Something went wrong';
  }
}