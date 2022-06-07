import users from "../../database/users.db";

const getUserSvc = (userId) => {
   const user = users.find( user => {
      return user.uuid === userId;
   });
   
   const { uuid, createdOn, updatedOn, name, email, isAdm } = user;
   
   return { uuid, createdOn, updatedOn, name, email, isAdm };
}

export default getUserSvc;