var express = require('express');
var router = express.Router();
var {deleteUser} = require('../controllers/member/deleteUser');
var {getUser} = require('../controllers/member/getUser');
var {postUser} = require('../controllers/member/postUser');
var {putUser} = require('../controllers/member/putUser');

/* GET user */
router.get('/', getUser);
/* POST user */ 
router.post('/',postUser);
/* DELETE user */
router.delete('/:sid',deleteUser);
/* PUT user */
router.put('/',putUser);
      
module.exports = router;

