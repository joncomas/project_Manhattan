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

    concatUrlsList = [];
    phonesList = {
        phoneNumber: 0,
        url: ''
    };
    totalList = [];


    if (err) console.log('aqui ', err);
    let obj = JSON.parse(data);
    //dataStringified = data.toString();
    //console.log(obj.lista);
    for (i = 0; i < obj.lista.length; i++) {
        let publication = obj.lista[i]
        const target = url + publication;
        concatUrlsList.push(target)
        //console.log(concatUrlsList)
    }

    for (j = 0; j < concatUrlsList.length; j++) {
        rp(concatUrlsList[j])
            .then(function(html) {
                goldMine = $('.prj-phones-item', html).text()
                catchedPhoneNumber = goldMine.replace(/\s+/g, '');
                console.log('Telefonos', catchedPhoneNumber)
                if(catchedPhoneNumber != ''){
                    totalList.push(catchedPhoneNumber)
                    return totalList
                }
            })
            .catch(function(err) {
                //handle error
        });
    }
    console.log(totalList)
});


