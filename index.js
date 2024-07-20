import express from 'express';
import morgan from 'morgan'
import dotenv from 'dotenv';
import mongoose from 'mongoose'
import router from "./src/routes/auth.js"
import userRouter from "./src/routes/user.js"
import cors from 'cors'; 

const app = express();
app.use(express.json())
dotenv.config()
app.use(morgan('dev'));

const port = process.env.PORT 
const dbUrl = process.env.MONGODB_URL

app.use(cors());

//connect the database
const connect = (url) => {
    mongoose.connect(url)
       .then(() => console.log('DB Connected Successfully'))
       .catch(err => console.log("Error Connecting to DB", err));
}
connect(dbUrl)

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to BetaHouse API');
  });
  

//routes
app.use("/auth", router)
app.use("/api/user", userRouter)


app.listen(port, () => {
    console.log(`server listening on port ${port}`);
})