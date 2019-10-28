var conn = require('../../connect');
var moment = require('moment');

exports.deletePublication = function(req,res){
    process.on('unhandledRejection', error => {
        console.log('unhandledRejection', error.message);
    });
    let PID = req.body.pid;
    let db = conn.emit(false, 'WIDMWEB');

    qs = `Delete from Publication where PID=${PID}`
    db
    .query(qs)
    .then(data=>{
        console.log(data)
        if(data.affectedRows === 0)
            res.status(400).json({status:"Bad Request",data:`You Should Give the correct pid in Publication`})
        else
            res.status(200).json({status:"OK",data:data})
    })
    .catch(err => {
        console.log(err);
    })
}
