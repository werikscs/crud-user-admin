import users from "../../database/users.db";
import jwt from "jsonwebtoken";
import * as bcrypt from "bcryptjs";

const userLoginSvc = async (reqBody) => {
  const user = users.find( user => {
    return user.email === reqBody.email
  });

  if(!user) {
    throw new Error("Wrong email/password")
  }

  const isCompareTrue = await bcrypt.compare(reqBody.password, user.password);

  if(!isCompareTrue) {
    throw new Error("Wrong email/password")
  }

  const userToken = jwt.sign(
    { userId: user.uuid, isAdm: user.isAdm },
    "senha-segura",
    { expiresIn: "24h"}
  );

  return userToken;
}

export default userLoginSvc;
