const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

const sequelize = require("./config/connection")

app.get("/", (req, res) => {

})

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log("App listening on PORT " + PORT));
});