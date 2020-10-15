const fetch = require("node-fetch");
var FormData = require('form-data');


// var myHeaders = new Headers();
// myHeaders.append("apikey", "640c8334fe88957");

var formdata = new FormData();
formdata.append("language", "eng");
formdata.append("file", fileInput.files[0], "/E:/PS/Tag/ocr.png");

var requestOptions = {
  method: 'POST',
  headers: {
    apikey : "640c8334fe88957" 
  },
  body: formdata,
  redirect: 'follow'
};

fetch("https://api.ocr.space/parse/image", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result.ParsedResults))
  .catch(error => console.log('error', error));