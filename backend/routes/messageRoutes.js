// Sisältää nimensä mukaan kaikki api reitit minne voidaan tehdä HTTP pyyntöjä.
// Jokainen reitti on yhdistetty johonkin controller luokkaan
import Express from "express";
import { getMessages, createMessage, getMessageById, deleteMessages } from "../contollers/messageController.js"

const router = Express.Router()

router.get("/", getMessages)
router.post('/', createMessage);
router.get("/:id", getMessageById)
router.delete("/", deleteMessages)

export default router;