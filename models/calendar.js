const mongoose = require('mongoose');

const calendarSchema = new mongoose.Schema({
    email: {
        type: String,
        sparse: true
    },
    title: {
        type: String,
        required: true,
        uppercase: true
    },
    description: String,
    link: String,
    date: String,
    image: String,
    start: String,
    end: String
});

const Calendar = mongoose.model('meet', calendarSchema);

module.exports = Calendar;