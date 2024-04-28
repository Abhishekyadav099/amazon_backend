const express = require("express");
// const mongoose = require('mongoose');
const productsRouter = require('./routes/productsRoutes.js');
const mongoose = require("mongoose");
const app = express();
const userRouter = require("./routes/userRoutes.js");
const reviewRouter = require("./routes/reviewRoute.js")

app.use(express.json());
app.use('/api/products', productsRouter);
app.use('/api/users', userRouter);
app.use('/api/review',reviewRouter)

const url = 'mongodb+srv://$_USERNAME_$:$_PASSWORD_$@cluster0.ecnxdap.mongodb.net/$_DB_NAME_$?retryWrites=true&w=majority&appName=Cluster0'
const databaseuser = 'abhiyadavv1230';
const databasePassword = 'Abhi5613';
const databaseName = 'Amazon-Backend';


let dbLink = url.replace("$_USERNAME_$", databaseuser);
dbLink = dbLink.replace("$_PASSWORD_$", databasePassword);
dbLink = dbLink.replace("$_DB_NAME_$", databaseName);
console.log(dbLink);
mongoose.connect(dbLink)
    .then(
        () => console.log('---- Database Connected ----')
    );
app.listen(1400,
    () => console.log('----- App Started -----')
);