import connectDB from "./config/db.js";
import Express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import messageRouter from "./routes/messageRoutes.js";
import userRouter from "./routes/userRoutes.js"
dotenv.config();

// Fake käyttäjä testaukseen
// const dummyUser = {
//   id: "123",
//   username: "JohnDoe",
//   email: "john@example.com",
// };

const PORT = process.env.PORT || 3000;
const app = Express();

// app.use((req, res, next) => {
//     req.user = dummyUser;
//     next();
// });

connectDB();
app.use(cors());
app.use(Express.json());
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

app.use("/api/messages", messageRouter);
app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server is runing on ${PORT}`);
});
