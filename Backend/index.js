import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";


import adminRoute from "./routes/admin.route.js"
import projectRoute from "./routes/project.route.js"
import clientRoute from "./routes/client.route.js"
import contactRoute from "./routes/contact.route.js"
import newsletterRoute from "./routes/newsletter.route.js"
import uploadRoute from "./routes/upload.route.js";

const app = express()
const port = process.env.PORT;
const mongoUrl = process.env.MONGO_URI;

mongoose.connect(mongoUrl).then(() => {
  console.log("connected to mongoDB Atlas..");
}).catch((e) => {
  console.log(e.message);
})

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/admin", adminRoute);
app.use("/api/project", projectRoute);
app.use("/api/client", clientRoute);
app.use("/api/contact", contactRoute);
app.use("/api/subscribe", newsletterRoute);
app.use("/api/upload", uploadRoute);

app.get('/', (req, res) => {
  res.send('Root route is working !')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});