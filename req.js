/* 
 https://ocr.space/ocrapi
*/
var request = require('request');
var fs = require('fs');
var result;
var options = {
  'method': 'POST',
  'url': 'https://api.ocr.space/parse/image',
  'headers': {
    'apikey': '640c8334fe88957'
  },
  formData: {
    'language': 'eng',
    'file': {
      'value': fs.createReadStream('/PS/Tag/ocr.png'),
      'options': {
        'filename': '/E:/PS/Tag/ocr.png',
        'contentType': null
      }
    }
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body)
  const result = JSON.parse(response.body);
  console.log(result.ParsedResults[0].ParsedText);
})

