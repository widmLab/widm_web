var conn = require('../../connect');
var moment = require('moment');

exports.putUser = function(req,res){
    let sid = req.body.sid;
    let name = req.body.name;
    let email = req.body.email;
    let sex = req.body.sex;
    let website = req.body.website;
    let hobby = req.body.hobby;
    let intro = req.body.introduction;
    let degree = req.body.degree;
    let start_date = req.body.start_date;
    let end_date = req.body.end_date;
    let program = req.body.program;
    if(sid == undefined){
      res.status(400).json({status:"Bad Request",data:'Wrong format of post body ( need sid )'});
    }
    else{
       let db = conn.emit(false, 'WIDMWEB');
       let res_json = {
         status_code : 0,
         datas : {
           status : "",
           data : ""
         }
       }
       db
       .query(`select * from \`member\` where sid = ${sid}`)
       .then(data => {
          if(data.length === 1){
             data.map(function(row){
                name = (name === undefined) ? row['name'] : name;
                email = (email === undefined) ? row['Email'] : email;
                sex = (sex === undefined) ? row['Sex'] : sex;
                name = (name === undefined) ? row['name'] : name;
              })
             }
           else{ res.status(400).json({status:"Bad Request",data:`SID:${sid} not exists in member!`})}
       })
       .then(()=>{
         return new Promise(function(resolve,reject){
             db
             .query(`select * from SchoolRoll where sid = ${sid}`)
             .then(data=>{
               if(data.length === 1){
                 data.map(function(row){
                   degree = (degree === undefined) ? row['Degree'] : degree;
                   start_date = (start_date === undefined) ? row['Start_Date'] : start_date;
                   start_date = moment(start_date).format('YYYY-MM-DD');
                   end_date = (end_date === undefined) ? row['End_Date'] : end_date;
                   end_date = moment(end_date).format('YYYY-MM-DD');
                   program = (program === undefined) ? row['Program'] : program;
                 })
               }
               else{ res.status(400).json({status:"Bad Request",data:`SID:${sid} not exists in SchoolRoll!`})}
             })
             .then(()=>resolve())
             .catch(err => {
               console.log(err)
             })
           })
         })
       .then(()=>{
         return new Promise(function(resolve,reject){
             db
             .query(`select * from PersonInformation where sid = ${sid}`)
             .then(data=>{
               if(data.length === 1){
                 data.map(function(row){
                   website = (website === undefined) ? row['Website'] : website;
                   hobby = (hobby === undefined) ? row['Hobby'] : hobby;
                   intro = (intro === undefined) ? row['Introduction'] : intro;
                 })
               }
               else{ res.status(400).json({status:"Bad Request",data:`SID:${sid} not exists in PersonInformation!`})}
             })
             .then(()=>resolve())
             .catch(err => {
               console.log(err)
             })
           })
         })
       .then(()=>{
         return new Promise(function(resolve,reject){
           db.query(`update \`member\` Set name='${name}',Email='${email}',Sex='${sex}' where sid = '${sid}'`)
           .then(()=>resolve())
           .catch(err => {
             res.status(400).json({status:"Bad Request",data:err})
           })
           db.query(`update SchoolRoll Set Degree='${degree}',Start_Date='${start_date}',End_Date='${end_date}',Program='${program}' where sid = '${sid}'`)
           .then(()=>resolve())
           .catch(err => {
             res.status(400).json({status:"Bad Request",data:err})
           })
           db.query(`update PersonInformation Set Website='${website}',Hobby='${hobby}',Introduction='${intro}' where sid = '${sid}'`)
           .then(()=>resolve())
           .catch(err => {
             res.status(400).json({status:"Bad Request",data:err})
           })
         })
       })
       .then(()=>res.status(200).json({status:"OK",data:"Success Update data"}))
       .catch(err => {console.log(err)})
     }
}