import express from "express";

import UserRoute from "./routes/user";
import GroupRoute from "./routes/group";
import UserGroupRoute from "./routes/user-group";

import winstonLogger from "./config/logger";

import db from "./models/main";

const app = express();

app.use(express.json());
app.use(winstonLogger);

db.sequelize.sync();

UserRoute(app);
GroupRoute(app);
UserGroupRoute(app)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

app.use((err, req, res, next) => {
  if (err && err.error && err.error.isJoi) {
    res.status(400).json({
        type: err.type,
        message: err.error.toString()
    });
    } else {
      next(err);
    }
  });