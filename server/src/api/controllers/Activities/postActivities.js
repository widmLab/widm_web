var conn = require('../../connect');
var moment = require('moment');

exports.postActivities = function(req,res){
   let type = req.body.type;
   let name = req.body.name;
   let date = req.body.date;
   let tid = req.body.tid;
   process.on('unhandledRejection', error => {
    console.log('unhandledRejection', error.message);
   });
   if(name == undefined | date == undefined | tid == undefined){
     res.status(400).json({status:"Bad Request",data:'Wrong format of post body ( need name,date,tid )'});
   }else{
      let db = conn.emit(false, 'WIDMWEB');
      qs = "Select AID+1 available_id from Activities t where not exists(select * from Activities where AID = t.AID + 1) order by AID Limit 1"
      db
      .query(qs)
      .then(data=>{
        console.log(data[0])
        if(data[0] == undefined)
            id = 1
        else
            id = data[0].available_id
      })
      .then(()=>{
        return new Promise(function(resolve,reject){
            db
            .query(`Insert into Activities(AID,Activity_Name,Date,TID) VALUES (${id},\"${name}\",\"${date}\",${tid})`)
            .then(data => {
                console.log('~')
                if(data.affectedRows === 0)
                    res.status(400).json({datas:{status:"Bad Request",data:data}})
                else
                    res.status(200).json({datas:{status:"OK",data}});
          })
        })
        .catch(error => { console.log('caught', err.message); });

      })
      .catch(err => {
        console.log(err);
      })
    }
}