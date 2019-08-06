const save = require('save-file');
const search = require('./search');
const getter = require('request-promise');
fs = require('fs');

/*
search.getListURL().then((res) => {

    save(JSON.stringify({
        lista: res
    }), 'data.json').then((file) => {
        console.log('resp', res.length);
    })

});
*/




fs.readFile(__dirname + '/data.json', (err, data) => {
  if (err) console.log('aqui ', err);
  let obj = JSON.parse(data);
  dataStringified = data.toString();
  console.log('AQUUIIII!!!!!', obj.lista[0])
});

