/* to check if we are able use api in  */

var request = require('request');
var num = 1;
var url = "https://jsonplaceholder.typicode.com/todos/" + num.toString()
var options = {
  'method': 'GET',
    'url' : url,
  'headers': {
    'Cookie': '__cfduid=d2dbefafc07fdfd06739a6274e4d21e831602756622'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  const obj = JSON.parse(response.body);
  const result = obj.title;
  console.log(obj)
});
