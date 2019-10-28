var conn = require('../../connect');
var moment = require('moment');

exports.getActivities = function(req,res){
    process.on('unhandledRejection', error => {
        console.log('unhandledRejection', error.message);
    });
    let AID = req.body.aid;
    let db = conn.emit(false, 'WIDMWEB');
    if(AID == undefined)
        qs = `Select * from ActivitiesType`
    else{
        qs = `Select * from Activities where AID=${AID}`
        db
        .query(qs)
        .then(data=>{
            res.status(200).json({datas:{status:"OK",data}});
        })
    }
    db
    .query(qs)
    .then(data1=>{
        var activities = {}  
        data1.map(function(row,i){
            qs_activities = `Select * from Activities where Tid=${row.TID}`
            db
            .query(qs_activities)
            .then(data2=>{
                var type = []
                data2.map(function(activity){
                    type.push({name:activity.Activity_Name,data:activity.Date})
                })
                //console.log(type)
                activities[row.type] = Object.assign(type)
                //console.log(activities)
                if(data1.length === i+1)
                    res.status(200).json({datas:{status:"OK",activities}});
            })
        })
    })
    .catch(err => {
    console.log(err);
    })
}
