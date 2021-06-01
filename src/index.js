import express from "express";

const app = express();

app.use(express.json());

import db from "./models/main";

db.sequelize.sync();

require("./routes/user")(app);
require("./routes/group")(app);
require("./routes/user-group")(app);

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