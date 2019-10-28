var express = require('express');
var router = express.Router();
var {postPublication} = require('../controllers/Publication/postPublication');
var {getPublication} = require('../controllers/Publication/getPublication');
var {deletePublication} = require('../controllers/Publication/deletePublication');
var {putPublication} = require('../controllers/Publication/putPublication');

router.get('/', getPublication);
router.post('/', postPublication);
router.delete('/', deletePublication);
router.put('/', putPublication);
module.exports = router;