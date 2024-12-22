import express from "express";
import cors from "cors"
import { connectDB } from "./config/db.js";
import userRouter from "./routes/userRoutes.js";
import 'dotenv/config'

const app = express();

app.use(express.json())
app.use(cors())

const PORT = 3000;

connectDB()

app.use("/api/user",userRouter)

app.get("/", (req, res) => {
  res.send("Herae");
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
