import database from "../../common/database";
import * as bcrypt from 'bcrypt'
import { SignUpParams } from "../../models/signUp";
import body from "../../common/mail/body";
import mail from "../../common/mailgun";
export const signUpController = async (user: SignUpParams) => {
    const data = await (await database()).collection('customers').find({ email: user.email }).toArray();
  if (data.length === 0) {
    if (user.password === user.confirmPassword) {
      const salts = bcrypt.genSaltSync(parseInt(process.env.SALT_ROUNDS as string));
      const hashedPassword = bcrypt.hashSync(user.password, salts);
      const hashedConfirmPassword = bcrypt.hashSync(user.confirmPassword, salts);
      user.password = hashedPassword;
      user.confirmPassword = hashedConfirmPassword;
      await (await database()).collection('customers').insertOne(user);
     await mail(user.email,'Account generated',body(user.email))
      return true;
    }
    else {
      throw {
        status: 402,
        success: false,
        message: "Passwords doesn't match with confirm password",
      }
  }
  }
  }