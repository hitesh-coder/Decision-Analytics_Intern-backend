const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const port = process.env.PORT || 5000;

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const dbURI = process.env.MONGO_URI;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

const authRoutes = require('./routes/authRoutes');
const calendarRoutes = require('./routes/calendarRoute');

app.use("/api/auth", authRoutes);
app.use("/api/meet", calendarRoutes);

// Handle Production
if (process.env.NODE_ENV === 'production') {
    // Static folder
    app.use(express.static(__dirname + '/public/'))

    // Handle SPA
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'))
};

app.listen(port, () => {
    console.log(`App listining on ${port}`)
});