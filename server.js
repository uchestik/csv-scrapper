var express = require('express');
var app = express();
var cors = require('cors')
var csv = require("csvtojson");
var jsonList;
app.use(cors())

csv(
  {
    workerNum:4  // workerNum>=1
}
)
    .fromFile('./short.csv')
    .on("json",function(jsonArrayObj){ //when parse finished, result will be emitted here.
      // console.log(jsonArrayObj)
     })
     .on('end_parsed',(jsonArrObj)=>{
         jsonList = jsonArrObj
    })
     .on('done',(json)=>{
      console.log('end')
  })


app.get('/api/csv', function(req,res){
    res.send(jsonList)
})





app.listen(5000);