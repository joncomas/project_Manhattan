const save = require('save-file');
const search = require('./search');
const getter = require('request-promise');
const rp = require('request-promise');
const url = 'https://www.portalinmobiliario.com';
const $ = require('cheerio');
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

    phonesList = {
        phoneNumber: 0,
        url: ''
    }

    if (err) console.log('aqui ', err);
        let obj = JSON.parse(data);
        dataStringified = data.toString();
        let publication = obj.lista[0]
        fullUrl = url + publication
        const target = url + publication;


    rp(target)
        .then(function(html) {

            goldMine = $('.prj-phones-item', html).text()
            catchedphoneNumber = goldMine.replace(/\s+/g, '');
            //console.log($('.bday', html).text());
            phonesList.phoneNumber = catchedphoneNumber;
            phonesList.url = target
            console.log(phonesList)
        })
        .catch(function(err) {
            //handle error

        });
});



