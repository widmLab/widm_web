var conn = require('../../connect');
var moment = require('moment');
exports.putPublication = function(req,res){
  let db = conn.emit(false, 'WIDMWEB');
  let name = req.body.name;
  let date = req.body.date;
  let pid = req.body.pid;
  let tid = req.body.tid;
  process.on('unhandledRejection', error => {
    console.log('unhandledRejection', error.message);
   });
  if(pid == undefined)
    res.status(400).json({status:"Bad Request",data:`You Should Give the pid in Publication`})
  qs = `Select * from Publication where PID=${pid}`;
  db
  .query(qs)
  .then(data => {
    console.log(data.length)
    if(data.length == 1){
      data.map(function(row){
          console.log(row)
        name = (name === undefined) ? row['Publication_Name'] : name;
        date = (date === undefined) ? row['Date'] : date;
        tid = (tid === undefined) ? row['TID'] : tid;
      })
    }
    else{ res.status(400).json({status:"Bad Request",data:`PID:${pid} not exists in Publication!`})}
   })
   .then(()=>{
    return new Promise(function(resolve,reject){
        qs = `Update Publication Set Publication_Name=\"${name}\",date=\"${date}\",TID=${tid} where PID=${pid}`;
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