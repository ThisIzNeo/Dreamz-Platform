import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

/*
router.get("/signup", async (req, res) => {
  res.send("signup route");
});

router.get("/login", (req, res) => {
  res.send("login route");
});

router.get("/logout", (req, res) => {
  res.send("logout route");
});

*/
export default router;
