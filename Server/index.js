
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

const dbConnect = require("./config/Database");
dbConnect();

app.use(express.json());
app.use(cors({
  origin: "*",
  credentials: true,
}));

// Add your routes here
// app.use("/api", yourRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


