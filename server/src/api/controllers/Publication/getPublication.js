var conn = require('../../connect');
var moment = require('moment');

exports.getPublication = function(req,res){
    process.on('unhandledRejection', error => {
        console.log('unhandledRejection', error.message);
    });
    let PID = req.body.pid;
    let db = conn.emit(false, 'WIDMWEB');
    if(PID == undefined)
        qs = `Select * from PublicationType`
    else{
        qs = `Select * from Publication where PID=${PID}`
        db
        .query(qs)
        .then(data=>{
            res.status(200).json({datas:{status:"OK",data}});
        })
    }
    db
    .query(qs)
    .then(data1=>{
        var Publication = {}  
        data1.map(function(row,i){
            qs_Publication = `Select * from Publication where Tid=${row.TID}`
            db
            .query(qs_Publication)
            .then(data2=>{
                var type = []
                data2.map(function(pub){
                    type.push({name:pub.Publication_Name,data:pub.Date})
                })
                //console.log(type)
                Publication[row.type] = Object.assign(type)
                //console.log(Publication)
                if(data1.length === i+1)
                    res.status(200).json({datas:{status:"OK",Publication}});
            })
        })
    })
    .catch(err => {
    console.log(err);
    })
}
