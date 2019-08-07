fs = require('fs');

fs.readFile(__dirname + '/data.json', (err, data) => {
  if (err) console.log('aqui ', err);
  dataStringified = data.toString();
  neo = dataStringified.lista[0];
  console.log(neo)

});