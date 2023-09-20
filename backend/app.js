import connectDB from "./config/db.js";
import Express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv"
import router from "./routes/messageRoutes.js";
dotenv.config()

const PORT = process.env.PORT || 3000;
const app = Express();
connectDB();

app.use(cors())
app.use(Express.json());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.use("/api/messages", router)

app.listen(PORT, () => {
    console.log(`Server is runing on ${PORT}`)
})