var conn = require('../../connect');
var moment = require('moment');
exports.deleteExperience = function(req,res){
  let db = conn.emit(false, 'WIDMWEB');
  let uuid = req.body.uuid;
  let id = req.body.id;
  if(uuid == undefined)
    uuid = 1
  if(id == undefined)
    res.status(400).json({status:"Bad Request",data:`You Should Give the id in Experience`})
  else{
    qs = `delete from Experience where UUID=${uuid} and id=${id}`;
    db
    .query(qs)
    //.then(()=>console.log(`delete one Experience whid id=${id}`))
    .then(data=>{
        if(data.affectedRows===0)
            res.status(400).json({status:"Bad Request",data:`You Should Give the correct id in Experience`})
        
        else
            res.status(200).json({status:"OK",data:data})
    })
    .catch(err => {console.log(err)})

  }

}