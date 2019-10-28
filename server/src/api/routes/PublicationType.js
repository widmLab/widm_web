var express = require('express');
var router = express.Router();
var {postPublicationType} = require('../controllers/PublicationType/postPublicationType');
var {getPublicationType} = require('../controllers/PublicationType/getPublicationType');
var {deletePublicationType} = require('../controllers/PublicationType/deletePublicationType');
var {putPublicationType} = require('../controllers/PublicationType/putPublicationType');

router.get('/', getPublicationType);
router.post('/', postPublicationType);
router.delete('/', deletePublicationType);
router.put('/', putPublicationType);
module.exports = router;