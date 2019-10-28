var conn = require('../../connect');
var moment = require('moment');

exports.deletePublicationType = function(req,res){
    process.on('unhandledRejection', error => {
        console.log('unhandledRejection', error.message);
    });
    let tid = req.body.tid;
    let type = req.body.type;
    let db = conn.emit(false, 'WIDMWEB');

    qs = `Delete from PublicationType where TID=${tid} or type=\"${type}\"`
    db
    .query(qs)
    .then(data=>{
        console.log(data)
        if(data.affectedRows === 0)
            res.status(400).json({status:"Bad Request",data:`You Should Give the correct tid or type in PublicationType`})
        else
            res.status(200).json({status:"OK",data:data})
    })
    .catch(err => {
        console.log(err);
    })
}
