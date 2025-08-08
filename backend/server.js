require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/UserRoutes');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI ,{
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
})
  .then(()=>{
    console.log("DB Connected");
  });


  app.use("/api/user", userRoutes);
const PORT = process.env.PORT ;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

