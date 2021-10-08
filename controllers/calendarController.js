const Calendar = require('../models/calendar');
const User = require('../models/user');

module.exports.calendar_post = async (req, res) => {
    const { title, description, link, image, date, start, end, dbId } = req.body;
    const { email } = await User.findById(dbId);

    try {
        const meet = await Calendar.create({ email, title, description, link, image, date, start, end });
        res.status(200).json({ meet: meet._id });
    } catch (err) {
        res.status(400).json(err.message);
    }
}

module.exports.calendar_get = async (req, res) => {
    try {
        const { email } = await User.findById(req.params.id);
        const meet = await Calendar.find({ email });
        res.status(200).json({ meet })
    } catch (err) {
        res.status(400).json(err.message);
    }
}

module.exports.calendar_getParticular = async (req, res) => {
    try {
        const meet = await Calendar.findById(req.params.id);
        res.status(200).json({ meet })
    } catch (err) {
        res.status(400).json(err.message);
    }
}

module.exports.calendar_delete = async (req, res) => {
    try {
        await Calendar.findByIdAndDelete(req.params.id);
        res.status(200).json("Meet Deleted")
    } catch (err) {
        res.status(400).json(err.message);
    }
}