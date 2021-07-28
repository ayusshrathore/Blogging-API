const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoute");
const adminRoute = require("./routes/adminRoute");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose
    .connect("mongodb://localhost:27017/blog", {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    .then(() => {
        console.info("--- Database connected ---");
    })
    .catch(() => {
        console.error("--- Database connection failed ---");
    });

const PORT = 8080;

app.listen(PORT, () => {
    console.info(`--- Server listening on PORT ${PORT} ---`);
});

app.use("/user", userRoute);
app.use("/admin", adminRoute);
