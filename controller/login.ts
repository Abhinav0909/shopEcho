import database from "../common/database";
import { LogIn } from "../models/logIn";
import * as bcrypt from 'bcrypt';
import { ObjectId } from 'mongodb';
import * as jwt from 'jsonwebtoken';
interface Data{
  _id:ObjectId,email:string,password:string
}
export const logInController = async (user: LogIn) => {
  const data: Data = await (await database()).collection('customers').findOne({ email: user.email }) as Data;
  if (data === null) {
    throw {
      message:"Password doesn't match"
    }

  }
  else {
    return bcrypt.compareSync(user.password, data.password) ? jwt.sign({ id: data._id }, process.env.JWT_SECRET as string) :null;
    
  }
}