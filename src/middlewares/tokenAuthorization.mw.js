import jwt from "jsonwebtoken";

const tokenVerificationMw = (req, res, next) => {
   const auth = req.headers.authorization;
   
   if(!auth) {
      return res.status(401).json({
         message: "Missing authorization headers"
      });
   }
   
   const token = auth.split(" ")[1];
   
   jwt.verify(token, "senha-segura", (err, decoded) => {
      if(err) {
         return res.status(401).json({
            message: "Invalid token."
         })
      }

      req.user = { userId: decoded.userId, isAdm: decoded.isAdm };
   })
   
   next();
}

export default tokenVerificationMw;