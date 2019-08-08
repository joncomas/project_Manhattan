const sqlite3 = require('sqlite3').verbose();
const save = require('save-file');
const search = require('./search');
const getter = require('request-promise');
const rp = require('request-promise');
const url = 'https://www.portalinmobiliario.com';
const $ = require('cheerio');
const fs = require('fs');


// Here a data.json is created for us to be able to work with url locally
search.getListURL().then((res) => {

    save(JSON.stringify({
        lista: res
    }), 'data.json').then((file) => {
        console.log('resp', res.length);
    })

});

// Here we read from the data.json created to extract the info needed from each one
fs.readFile(__dirname + '/data.json', (err, data) => {

    concatUrlsList = [];
    phonesList = {
        phoneNumber: 0,
        url: ''
    };
    totalList = [];

//Here we parse the data from the file.json
    if (err) console.log('aqui ', err);
    let obj = JSON.parse(data);
    //This for loop joins the urls contained in the lista and the ppal url.
    for (i = 0; i < obj.lista.length; i++) {
        let publication = obj.lista[i]
        const target = url + publication;
        concatUrlsList.push(target)
    }
    // This for loop goes over each concatenated url
    for (j = 0; j < concatUrlsList.length; j++) {
        rp(concatUrlsList[j])
            .then(function(html) {
                //Here it looks for the class holding the phone number
                goldMine = $('.prj-phones-item', html).text()
                // Here the numbers gotten get cleaned
                catchedPhoneNumber = goldMine.replace(/\s+/g, '');

            })
            .catch(function(err) {
                //handle error
        });
    }
});


