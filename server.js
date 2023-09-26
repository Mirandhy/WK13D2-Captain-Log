require("dotenv").config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; 
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const logRoutes = require("./controllers/logs");

const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;

mongoose.connect(mongoURI, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
    console.log("Connected to MongoDB");
});

db.on('error', (err) => console.log(err.message + ' Is MongoDB running?'));
db.on('open', () => console.log('MongoDB connected!'));
db.on('close', () => console.log('MongoDB disconnected'));

const jsxViewEngine = require("jsx-view-engine");
app.set("view engine", "jsx");
app.set("views", "./views");
app.engine("jsx", jsxViewEngine());

app.use((req, res, next) => {
    console.log("Middleware: I run for all routes");
    next();
});

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/api/test', (req, res) => {
    res.send('API route');
});

app.use("/logs", logRoutes);

app.get("*", (req, res) => {
    res.redirect("/logs");
});

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});