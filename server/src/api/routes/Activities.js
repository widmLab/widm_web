var express = require('express');
var router = express.Router();
var {postActivities} = require('../controllers/Activities/postActivities');
var {getActivities} = require('../controllers/Activities/getActivities');
var {deleteActivities} = require('../controllers/Activities/deleteActivities');
var {putActivities} = require('../controllers/Activities/putActivities');

router.post('/', postActivities);
router.get('/', getActivities);
router.delete('/', deleteActivities);
router.put('/', putActivities);
module.exports = router;