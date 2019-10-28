var conn = require('../../connect');
var moment = require('moment');
exports.getUser = function(req,res){
  let db = conn.emit(false, 'WIDMWEB');
  let sid = req.body.sid;
  if(sid == undefined){
    qs = `select * from \`member\` join PersonInformation join schoolroll where member.sid = PersonInformation.sid and PersonInformation.sid = schoolroll.sid`;
  }else{
    qs = `select * from \`member\` join PersonInformation join schoolroll where member.sid = PersonInformation.sid and PersonInformation.sid = schoolroll.sid and member.sid = ${sid}` ;
  }
  db
   .query(qs)
   .then(data => {
      data.map(function(row){
        let new_start_date = moment(row['Start_Date']).format('YYYY-MM');
        row['Start_Date'] = new_start_date;
        let new_end_date = moment(row['End_Date']).format('YYYY-MM');
        row['End_Date'] = new_end_date;
      })
      res.status(200).json({datas:{status:"OK",data}});
   })
   .catch(err => {
     console.log(err);
   })
}