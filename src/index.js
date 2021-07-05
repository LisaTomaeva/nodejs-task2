import express from "express";

import UserRoute from "./routes/user";
import GroupRoute from "./routes/group";
import UserGroupRoute from "./routes/user-group";

import { methodsLogger, errorsLogger } from "./config/logger";

import db from "./models/main";

const app = express();

app.use(express.json());
app.use(methodsLogger);

db.sequelize.sync();

UserRoute(app);
GroupRoute(app);
UserGroupRoute(app);

app.use(errorsLogger);

process.on('uncaughtException', err => winston.error('uncaught exception: ', err));
process.on('unhandledRejection', (reason, p) => winston.error('unhandled Promise rejection: ', reason, p));

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