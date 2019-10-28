var conn = require('../../connect');
var moment = require('moment');

exports.getPublicationType = function(req,res){
    process.on('unhandledRejection', error => {
        console.log('unhandledRejection', error.message);
    });
    let tid = req.body.tid;
    let db = conn.emit(false, 'WIDMWEB');
    if(tid == undefined){
        qs = `Select * from PublicationType`
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
        qs = `Select * from PublicationType where TID=${tid}`
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
