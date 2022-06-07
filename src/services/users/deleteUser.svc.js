import users from "../../database/users.db";

const deleteUserSvc = (userIdToDelete, loggedUserId, isAdm, userToDeleteIndex) => {
   
   if(isAdm) {
      users.splice(userToDeleteIndex, 1);
      return { message : "User deleted with success"}
   }
   
   if(loggedUserId === userIdToDelete) {
      users.splice(userToDeleteIndex, 1);
      return { message : "User deleted with success"}
   }
   
   throw new Error("Missing admin permissions")
}

export default deleteUserSvc;