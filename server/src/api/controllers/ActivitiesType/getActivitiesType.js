var conn = require('../../connect');
var moment = require('moment');

exports.getActivitiesType = function(req,res){
    process.on('unhandledRejection', error => {
        console.log('unhandledRejection', error.message);
    });
    let tid = req.body.tid;
    let db = conn.emit(false, 'WIDMWEB');
    if(tid == undefined){
        qs = `Select * from ActivitiesType`
        db
        .query(qs)
        .then(data=>{
            res.status(200).json({datas:{status:"OK",data}});
        })
        .catch(err => {
            console.log(err);
            })
    }
    else{
        qs = `Select * from ActivitiesType where TID=${tid}`
        db
        .query(qs)
        .then(data=>{
            res.status(200).json({datas:{status:"OK",data}});
        })
        .catch(err => {
            console.log(err);
            })
    }
}
