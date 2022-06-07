import users from "../../database/users.db"

const editUserSvc = (userId, loggedUserId, isAdm, userIndex, reqBody) => {
   const isLoggedUserOwnerOfTheUser = userId === loggedUserId;
   
   if(isAdm || isLoggedUserOwnerOfTheUser) {

      const updatedUserProps = {
         ...reqBody,
         updatedOn: new Date(),
         isAdm: users[userIndex].isAdm
      };
      
      users[userIndex] = {
         ...users[userIndex],
         ...updatedUserProps,
      }
      
      const { uuid, createdOn, updatedOn, name, email, isAdm } = users[userIndex];
   
      return { uuid, createdOn, updatedOn, name, email, isAdm }
   }
   
   throw new Error("Missing admin permissions")
}

export default editUserSvc;