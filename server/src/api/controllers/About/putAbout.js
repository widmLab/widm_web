var conn = require('../../connect');
var moment = require('moment');
exports.putAbout = function(req,res){
  let db = conn.emit(false, 'WIDMWEB');
  let uuid = req.body.uuid;
  let image = req.body.image;
  let word_cloud = req.body.word_cloud;
  if(uuid == undefined)
    uuid = 1
  qs = `Select * from About where UUID=${uuid}`;
  db
  .query(qs)
  .then(data => {
    console.log(data.length)
    if(data.length == 1){
      data.map(function(row){
        console.log('!')
        console.log(row['Word_cloud'])
        image = (image === undefined) ? row['Image'] : image;
        word_cloud = (word_cloud === undefined) ? row['Word_cloud'] : word_cloud;
      })
      }
    else{ res.status(400).json({status:"Bad Request",data:`UUID:${uuid} not exists in About!`})}
   })
   .then(()=>{
    return new Promise(function(resolve,reject){
        qs = `Update \`About\` Set Image=\"${image}\",Word_cloud=\"${word_cloud}\" where UUID=${uuid}`;
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