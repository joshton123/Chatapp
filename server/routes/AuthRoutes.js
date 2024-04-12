import { Router } from "express";
import { getAllUsers,checkUser,onBoardUser,generateToken } from "../controllers/AuthController.js";

const router = Router();
router.post("/check-user", checkUser);
router.post("/onboard-user", onBoardUser);
router.get("/get-contacts", getAllUsers);
router.get("/generate-token/:userId", generateToken);


export default router;
