const { Router } = require('express');
const calendarController = require('../controllers/calendarController');

const router = Router();

router.post('/', calendarController.calendar_post);

router.get('/:id', calendarController.calendar_get);

router.get('/particular/:id', calendarController.calendar_getParticular);

router.delete('/:id', calendarController.calendar_delete);

module.exports = router;