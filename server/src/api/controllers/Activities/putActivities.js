var conn = require('../../connect');
var moment = require('moment');
exports.putActivities = function(req,res){
  let db = conn.emit(false, 'WIDMWEB');
  let name = req.body.name;
  let date = req.body.date;
  let aid = req.body.aid;
  let tid = req.body.tid;
  process.on('unhandledRejection', error => {
    console.log('unhandledRejection', error.message);
   });
  if(aid == undefined)
    res.status(400).json({status:"Bad Request",data:`You Should Give the aid in Activities`})
  qs = `Select * from Activities where AID=${aid}`;
  db
  .query(qs)
  .then(data => {
    console.log(data.length)
    if(data.length == 1){
      data.map(function(row){
          console.log(row)
        name = (name === undefined) ? row['Activity_Name'] : name;
        date = (date === undefined) ? row['Date'] : date;
        tid = (tid === undefined) ? row['TID'] : tid;
      })
    }
    else{ res.status(400).json({status:"Bad Request",data:`AID:${aid} not exists in Activities!`})}
   })
   .then(()=>{
    return new Promise(function(resolve,reject){
        qs = `Update Activities Set Activity_Name=\"${name}\",date=\"${date}\",TID=${tid} where AID=${aid}`;
        db
        .query(qs)
        .then(data => {
            if(data.affectedRows === 0)
                res.status(400).json({datas:{status:"Bad Request",data:data}})
            else
                res.status(200).json({datas:{status:"OK",data}});
        })
        .catch(err => {
          console.log(err);
        })
      })
    })
   .catch(err => {
     console.log(err);
   })

}