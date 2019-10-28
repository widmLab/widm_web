var conn = require('../../connect');
var moment = require('moment');

exports.deleteUser = function(req,res){
    let sid = req.params.sid;
    console.log(`SID:${sid}`)
    if(sid == undefined){
        res.status(400).json({status:"Bad Request",data:'Wrong format of delete body'});
    }else{
        let db = conn.emit(false, 'WIDMWEB');
        db
        .query(`delete from \`member\` where sid = ${sid}`)
        .then(()=>console.log(`delete one \`member\` success (sid=${sid})`))
        .then(()=>res.status(200).json({status:"OK",data:"Success delete data"}))
        .catch(err => {console.log(err)})
    }
}