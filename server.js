const express = require("express");
const exphbs = require("express-handlebars");


const PORT = process.env.PORT || 3001;
const app = express();

const sequelize = require("./config/connection");


app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(require("./controller"));

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log("App listening on PORT " + PORT));
});