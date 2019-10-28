var conn = require('../../connect');
var moment = require('moment');
exports.getAbout = function(req,res){
  let db = conn.emit(false, 'WIDMWEB');
  uuid = 1;
  qs = `select * from About`;
  db
   .query(qs)
   .then(data => {
    if(data.length === 0){
        res.status(400).json({status:"Bad Request",data:'Information in About is wrong'});
    }
    About = data
    uuid = data[0].UUID
   })
   .then(()=>{
    return new Promise(function(resolve,reject){
        qs = `select * from Experience where UUID=${uuid}`;
        db
        .query(qs)
        .then(data => {
        if(data.length === 0){
            res.status(400).json({status:"Bad Request",data:'There is no experience'});
        }
        experience = []
        data.map(function(row){
          experience.push({'name':data[0].name,'time':data[0].time})
        })
        About[0]['experience'] = experience
        console.log(About)
        res.status(200).json({datas:{status:"OK",About}});
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