import * as bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";

import users from "../../database/users.db"

const createUserSvc = async (reqBody) => {
   const userExists = users.find( user => {
      return user.email === reqBody.email
   });
   
   if(userExists){
      throw new Error("E-mail already registered")
   }
   
   const hashedPassword = await bcrypt.hash(reqBody.password, 10);
   const currentDate = new Date();
   
   const newUser = {
      uuid: uuidv4(),
      createdOn: currentDate,
      updatedOn: currentDate,
      name: reqBody.name,
      email: reqBody.email,
      password: hashedPassword,
      isAdm: reqBody.isAdm
   }
   
   users.push(newUser);
   
   const { uuid, createdOn, updatedOn, name, email, isAdm } = newUser;
   
   return { uuid, createdOn, updatedOn, name, email, isAdm }
}

export default createUserSvc;