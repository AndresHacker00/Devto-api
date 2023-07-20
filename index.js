require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./src/server");
const {DB_USERNAME, DB_PASSWORD, DB_URL, DB_NAME} = process.env
const dataBaseUrl = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_URL}/${DB_NAME}`

mongoose.connect(dataBaseUrl)
.then(() => {
    console.log("Estamos conectados al servidor");
    app.listen(8080, () => {
        console.log("Nuestro servidor esta levantado");
    })
})
.catch(err => {
    console.log("error", err);
})