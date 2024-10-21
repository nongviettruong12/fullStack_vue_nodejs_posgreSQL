const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sequelize = require("./config/database");
const itemRouter = require("./routes/itemRoutes");
const userRoutes = require('./routes/userRoutes');
const authRouter = require('./routes/authRoutes');
const { verifyToken, isAdmin } = require('./middleware/authMiddleware');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use("/api", itemRouter);
app.use('/api/auth',authRouter)
app.use('/api', userRoutes);


app.get('/api/admin/data', verifyToken, isAdmin, (req, res) => {
  res.json({ message: 'This is admin data' });
});

sequelize
  .sync({ alter: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
