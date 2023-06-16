import express from "express";
import { getUsers, register, Login, Logout } from "../controller/users.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { refreshToken } from "../controller/refreshToken.js";

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send('Hello Guys!');
  });
router.get('/users', verifyToken, getUsers);
router.post('/users', register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);
router.get('history', classHistory);

export default router;