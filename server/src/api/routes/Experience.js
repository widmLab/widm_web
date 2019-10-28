var express = require('express');
var router = express.Router();
var {putExperience} = require('../controllers/Experience/putExperience');
var {deleteExperience} = require('../controllers/Experience/deleteExperience');
var {postExperience} = require('../controllers/Experience/postExperience');

router.put('/', putExperience);
router.delete('/', deleteExperience);
router.post('/', postExperience);
      
module.exports = router;