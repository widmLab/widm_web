var conn = require('../../connect');
var moment = require('moment');

exports.postExperience = function(req,res){
   let uuid = req.body.uuid;
   let name = req.body.name;
   let time = req.body.time;
   if(uuid == undefined)
     uuid = 1
   if(uuid == undefined | name == undefined | time == undefined){
     res.status(400).json({status:"Bad Request",data:'Wrong format of post body ( need name,time )'});
   }else{
      let db = conn.emit(false, 'WIDMWEB');
      //qs = "SELECT MAX(id) as id FROM Experience"
      qs = "Select id+1 available_id from Experience t where not exists(select * from Experience where id = t.id + 1) order by id Limit 1"
      db
      .query(qs)
      .then(data=>{
        console.log(data[0].available_id)
        id = data[0].available_id
      })
      .then(()=>{
        return new Promise(function(resolve,reject){
            db
            .query(`Insert into Experience (uuid,id,name,time) VALUES (${uuid},${id},\"${name}\",${time})`)
            .then(data => {
                if(data.affectedRows === 0)
                    res.status(400).json({datas:{status:"Bad Request",data:data}})
                else
                    res.status(200).json({datas:{status:"OK",data}});
          })
        })
      })
      .catch(err => {
        console.log(err);
      })
    }
}