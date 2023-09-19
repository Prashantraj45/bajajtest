const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());


app.get('/bfhl', (req, res) => {
  const operationCode = 1;
  res.json({ status:200,operation_code: operationCode });
});


app.post('/bfhl', (req, res) => {
    const d=req.body.data;
    console.log(d);
    var alpha=[]
    var nums=[]
    var hgh="";
    for(var i=0;i<d.length;i++){
        var chk= parseInt(d[i]);
        if(!isNaN(chk)){
            nums.push(chk);
        }
        else{
            alpha.push(d[i]);
            if(hgh=="")hgh=d[i];
            if(hgh<d[i])hgh=d[i];
        }
    }
  

  res.json({
    is_success: true,
    user_id: "prashant_raj_02092001",
    email :"prashant.raj2020@vitstudent.ac.in",
    roll_number:"20BIT0452",
    numbers: nums,
    alphabets: alpha,
    "highest_alphabet":hgh
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
