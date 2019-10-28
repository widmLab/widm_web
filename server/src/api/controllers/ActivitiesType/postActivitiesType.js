var conn = require('../../connect');
var moment = require('moment');

exports.postActivitiesType = function(req,res){
   let type = req.body.type;
   process.on('unhandledRejection', error => {
    console.log('unhandledRejection', error.message);
   });
   if(type == undefined){
     res.status(400).json({status:"Bad Request",data:'Wrong format of post body ( need type )'});
   }else{
      let db = conn.emit(false, 'WIDMWEB');
      qs = "Select TID+1 available_id from ActivitiesType t where not exists(select * from ActivitiesType where TID = t.TID + 1) and exists(Select * from ActivitiesType where TID=1) order by TID Limit 1"
      db
      .query(qs)
      .then(data=>{
        console.log(data[0])
        if(data[0] == undefined)
            //id = 1
            qs = `Insert into ActivitiesType(type,TID) VALUES (\"${type}\",1)`
        else
            qs = `Insert into ActivitiesType(type,TID) VALUES (\"${type}\",${data[0].available_id})`
      })
      .then(()=>{
        return new Promise(function(resolve,reject){
          db
          .query(qs)
          .then(data=>{
            if(data.affectedRows === 0)
                res.status(400).json({datas:{status:"Bad Request",data:data}})
            else
                res.status(200).json({datas:{status:"OK",data}});
          })
        })
      })
      // .catch(err => {
      //   console.log(err);
      // })
    }
}