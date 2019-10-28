var conn = require('../../connect');
var moment = require('moment');

exports.postUser = function(req,res){
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

   console.log(`SID:${sid} name:${name} email:${email} sex:${sex}`)
   if(sid == undefined | name == undefined | email == undefined | sex == undefined){
     res.status(400).json({status:"Bad Request",data:'Wrong format of post body ( need sid,name,email,sex )'});
   }else{
      let db = conn.emit(false, 'WIDMWEB');
      let res_json = {
        status_code : 0,
        datas : {
          status : "",
          data : ""
        }
      }
      db
      .query(`select sid from \`member\` where sid=${sid}`)
      .then(data => {
         //console.log(data.length);cyv
         if(data.length === 0){
            db
            .query(` insert into \`member\` (sid,name,email,sex) values ('${sid}','${name}','${email}','${sex}') `)
            .then(()=>{
                return new Promise(function(resolve,reject){
                    db
                    .query(` insert into \`PersonInformation\` (sid,website,hobby,introduction) values ('${sid}','${website}','${hobby}','${intro}')`)
                    .then(()=>resolve())
                    .catch(err => {
                      console.log(err)
                      db
                      .query(`delete from \`member\` where sid = ${sid}`)
                      .then(()=>{
                        res_json.status_code = 400;
                        res_json.datas.status = "Bad Request";
                        res_json.datas.data = `(website,hobby,introduction) wrong format !`;
                        res.status(res_json.status_code).json(res_json.datas);
                      })
                      .then(()=>resolve())
                    })
                })
            })
            .then(()=>{
                return new Promise(function(resolve,reject){
                  db
                  .query(` insert into \`schoolroll\` (sid,degree,start_date,end_date,program) values ('${sid}','${degree}','${start_date}','${end_date}','${program}' )`)
                  .then(()=>{
                    res_json.status_code = 201;
                    res_json.datas.status = "Created";
                    res_json.datas.data = `SID:${sid} has been insert successfully !`;
                    res.status(res_json.status_code).json(res_json.datas);
                  })
                  .then(()=>resolve())
                  .catch(err => {
                    console.log(err)
                    db
                    .query(`delete from \`member\` where sid = ${sid}`)
                    .then(()=>{
                      res_json.status_code = 400;
                      res_json.datas.status = "Bad Request";
                      res_json.datas.data = `(degree,start_date,end_date,program) wrong format !`;
                      res.status(res_json.status_code).json(res_json.datas);
                    })
                    .then(()=>resolve())
                  })
                })  
            })
            .catch(err => {console.log(err)})
         }
         else{
            res_json.status_code = 422;
            res_json.datas.status = "Unprocessable Entity";
            res_json.datas.data = `SID:${sid} already exists !`;
            res.status(res_json.status_code).json(res_json.datas);
         }
      })
      .catch(err => {
        console.log(err);
      })
   }
}