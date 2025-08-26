require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/UserRoutes');

const app = express();

app.use(cors());
app.use(express.json());

const MONGO_URI = process.env.MONGODB_URI;

// mongoose.connect("mongodb://localhost:27017/netflix",{
//     // useNewUrlParser: true,
//     // useUnifiedTopology: true,
// })
//   .then(()=>{
//     console.log("DB Connected");
//   });

  mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));


  app.use("/api/user", userRoutes);
app.listen(5000, () => {
  console.log("server started on port 5000");
});
