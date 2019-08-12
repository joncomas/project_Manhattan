//db required
const sqlite3 = require('sqlite3').verbose();
const save = require('save-file');
//Imports from folder
//const search = require('./search');
const dbWritter = require('./dbWritter');
const phoneGrabber = require('./phoneGrabber')
//System required
const rp = require('request-promise');
const $ = require('cheerio');
const fs = require('fs');

//console.log(search);
//console.log(dbWritter);

phoneGrabber.getAll((resp) => {
    console.log('aqui esta completo', resp);
    dbWritter.queryAll((resp) => {
        console.log('por aqui esta completo', resp)
    });
});