// Sisältää nimensä mukaan kaikki api reitit minne voidaan tehdä HTTP pyyntöjä.
// Jokainen reitti on yhdistetty johonkin controller luokkaan
import Express from "express";
import { getMessages, createMessage, getMessageById, deleteMessages } from "../contollers/messageController.js"
import { authenticateJWT } from "../middleware/jwtAuth.js";

const router = Express.Router()

router.get("/",authenticateJWT, getMessages)
router.post('/',authenticateJWT, createMessage);
router.get("/:id", getMessageById) // Lisää tähänkin myöhemmin auth
router.delete("/",authenticateJWT, deleteMessages)

export default router;