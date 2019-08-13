//db required
const sqlite3 = require('sqlite3').verbose();
const save = require('save-file');
//Imports from folder
//const search = require('./search');
const dbWritter = require('./dbWritter');
const phoneGrabber = require('./phoneGrabber');
const messageSender = require('./twilio');
//System required
const rp = require('request-promise');
const $ = require('cheerio');
const fs = require('fs');



/*
// The code below goes to the urls and fetches the phone numbers, then inserts then into the db.
phoneGrabber.getAll((resp) => {
    console.log('aqui esta completo', resp);
    dbWritter.queryAll(resp);
});

*/



    let db = new sqlite3.Database('../api/db.sqlite3');
        let detailsResp = "SELECT details FROM api_campaign WHERE id = 2";
        db.all(detailsResp, function(err, rows) {
        console.log('QUERY ', err, rows)
        });




        let resultsResp = "SELECT results FROM api_results WHERE fk_campaign_id = 2";
        db.all(resultsResp, function(err, rows) {
        console.log('QUERY ', err, rows)
        });


    db.close();


//phoneGrabber.messageSender(details, resp);


















/*

// This thing down below DELETES THE FRICKING DATA BASE, so, BE CAREFULLL!!!



let db = new sqlite3.Database('../api/db.sqlite3')
let sql = 'DELETE FROM api_results WHERE fk_campaign_id == 12;;';
  db.run(sql, function(err) {
                            if (err) {
                                return console.error(err.message);
                            }
                            console.log(`Rows deleted ${this.changes}`);
                        });

*/