
const express = require("express")
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errorHandlers")
const connectDb = require("./config/dbConnection")

connectDb();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json())
app.use("/api/contacts", require("./routes/contactRoutes"))
app.use("/api/users", require("./routes/userRoutes"))
app.use(errorHandler)

app.listen(port, () => {
    console.log(`PORT running at : ${port}`)
})