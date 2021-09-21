import { ObjectId } from 'mongodb';
import database from "../../common/database";
import * as jwt from 'jsonwebtoken';

export const getProfile = async(token:string) =>{
    try{
    const data = jwt.verify(token,process.env.JWT_SECRET as string) as {id:ObjectId};
    const users = await(await database()).collection('customers').findOne({_id: new ObjectId(data.id)});
    delete users!.password;
    delete users!.confirmPassword;
    return users;
    }catch(e){
        return null;
    }
}