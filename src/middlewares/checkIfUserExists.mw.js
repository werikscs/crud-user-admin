import user from "../database/users.db"

const checkIfUserExistsMw = (req, res, next) => {
   const userId = req.params.id;
   const userIndex = user.findIndex( user => {
      return user.uuid === userId;
   });
   
   if(userIndex === -1) {
      return res.status(404).json({
         message : "User not found"
      })
   }
   
   req.userIndex = userIndex;
   
   next();
}

export default checkIfUserExistsMw;