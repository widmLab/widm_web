var express = require('express');
var router = express.Router();
var {getAbout} = require('../controllers/About/getAbout');
var {putAbout} = require('../controllers/About/putAbout');
/* GET about */
router.get('/', getAbout);
router.put('/', putAbout);
      
module.exports = router;