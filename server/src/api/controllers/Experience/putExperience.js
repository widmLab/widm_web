var conn = require('../../connect');
var moment = require('moment');
exports.putExperience = function(req,res){
  let db = conn.emit(false, 'WIDMWEB');
  let uuid = req.body.uuid;
  let id = req.body.id;
  let name = req.body.name;
  let time = req.body.time;
  if(uuid == undefined)
    uuid = 1
  if(id == undefined)
    res.status(400).json({status:"Bad Request",data:`You Should Give the id in Experience`})
  qs = `Select * from Experience where UUID=${uuid} and id=${id}`;
  db
  .query(qs)
  .then(data => {
    console.log(data.length)
    if(data.length == 1){
      data.map(function(row){
        name = (name === undefined) ? row['name'] : name;
        time = (time === undefined) ? row['time'] : time;
      })
    }
    else{ res.status(400).json({status:"Bad Request",data:`UUID:${uuid} or id:${id} not exists in About!`})}
   })
   .then(()=>{
    return new Promise(function(resolve,reject){
        qs = `Update \`Experience\` Set Name=\"${name}\",Time=\"${time}\" where UUID=${uuid} and ID=${id}`;
        db
        .query(qs)
        .then(data => {
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