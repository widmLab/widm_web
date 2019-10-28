var conn = require('../../connect');
var moment = require('moment');
exports.putActivitiesType = function(req,res){
  let db = conn.emit(false, 'WIDMWEB');
  let type = req.body.type;
  let tid = req.body.tid;
  process.on('unhandledRejection', error => {
    console.log('unhandledRejection', error.message);
   });
  if(tid == undefined)
    res.status(400).json({status:"Bad Request",data:`You Should Give the tid in Activities`})
  qs = `Select * from ActivitiesType where TID=${tid}`;
  db
  .query(qs)
  .then(data => {
    console.log(data.length)
    if(data.length == 1){
      data.map(function(row){
        console.log(row)
        type = (type === undefined) ? row['type'] : type;
      })
    }
    else{ res.status(400).json({status:"Bad Request",data:`TID:${tid} not exists in Activities!`})}
   })
   .then(()=>{
    return new Promise(function(resolve,reject){
        qs = `Update ActivitiesType Set type=\"${type}\"where TID=${tid}`;
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