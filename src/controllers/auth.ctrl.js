import userLoginSvc from "../services/sessions/userLogin.svc";

export const userLoginCtrl = async (req, res) => {
  try {
    const token = await userLoginSvc(req.body);
    return res.status(200).json({token});
  } catch (err) {
    return res.status(401).json({
      message: err.message
    });
  }
}
