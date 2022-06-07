import getAllUsersSvc from "../services/users/getAllUsers.svc";
import createUserSvc from "../services/users/createUser.svc";
import getUserSvc from "../services/users/getUser.svc";
import editUserSvc from "../services/users/editUser.svc";
import deleteUserSvc from "../services/users/deleteUser.svc";

//post create user
export const createUserCtrl = async (req, res) => {
   try {
      const newUser = await createUserSvc(req.body);
      return res.status(201).json(newUser);
   } catch (err) {
      return res.status(400).json({
         message: err.message
      });
   }
}

//get list users
export const getAllUsersCtrl = (req, res) => {
  const users = getAllUsersSvc();
  return res.json(users);
}

//get data from logged user
export const getUserCtrl = (req, res) => {
   const userId = req.user.userId;
   const user = getUserSvc(userId);
   
   return res.json(user);
}

//patch data using user id
export const editUserCtrl = (req, res) => {
   const userId = req.params.id;
   const loggedUserId = req.user.userId;
   const isAdm = req.user.isAdm;
   const userIndex = req.userIndex;
   
   try {
      const userEdited = editUserSvc(userId, loggedUserId, isAdm, userIndex, req.body);
      return res.json(userEdited);
   } catch (err) {
      return res.status(401).json({
         message : err.message
      })
   }

}

//delete user using user id
export const deleteUserCtrl = (req, res) => {
   const userId = req.params.id;
   const loggedUserId = req.user.userId;
   const isAdm = req.user.isAdm;
   const userIndex = req.userIndex;
   
   try {
      const deletedUser = deleteUserSvc(userId, loggedUserId, isAdm, userIndex);
      return res.json(deletedUser)
      
   } catch (err) {
      return res.status(401).json({
         message: err.message
      })
   }
   
}
