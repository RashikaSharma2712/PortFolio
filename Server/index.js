
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 4000;

const dbConnect = require("./config/Database");
dbConnect();

app.use(express.json());
app.use(cors({
  origin: "*",
  credentials: true,
}));

const contactRoute= require('./routes/contact');
app.use("/api/v1",contactRoute);
// Add your routes here
// app.use("/api", yourRoutes);
app.get("/",(req,res)=>{
  return res.json({
    success:true,
    message:"Welcome to Portfolio",
  });
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


