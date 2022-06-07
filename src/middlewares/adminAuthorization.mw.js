import jwt from "jsonwebtoken";

const adminAuthorizationMw = (req, res, next) => {
   const isAdm = req.user.isAdm;
   
   if(!isAdm) {
      return res.status(401).json({
         message : "Unauthorized"
      })
   }
   
   next();
}

export default adminAuthorizationMw;