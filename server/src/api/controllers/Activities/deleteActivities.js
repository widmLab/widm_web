var conn = require('../../connect');
var moment = require('moment');

exports.deleteActivities = function(req,res){
    process.on('unhandledRejection', error => {
        console.log('unhandledRejection', error.message);
    });
    let AID = req.body.aid;
    let db = conn.emit(false, 'WIDMWEB');

    qs = `Delete from Activities where AID=${AID}`
    db
    .query(qs)
    .then(data=>{
        console.log(data)
        if(data.affectedRows === 0)
            res.status(400).json({status:"Bad Request",data:`You Should Give the correct aid in Activities`})
        else
            res.status(200).json({status:"OK",data:data})
    })
    .catch(err => {
        console.log(err);
    })
}
