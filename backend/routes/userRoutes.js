// Sisältää api reitit käyttäjien hallintaan
import Express from "express";
import {createUser} from "../contollers/userController.js"

const router = Express.Router()

router.post("/register", createUser)

export default router