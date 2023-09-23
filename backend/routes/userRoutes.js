// Sisältää api reitit käyttäjien hallintaan
import Express from "express";
import {createUser, loginUser} from "../contollers/userController.js"

const router = Express.Router()

router.post("/register", createUser)
router.post("/login", loginUser)

export default router