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




// The code below goes to the urls and fetches the phone numbers, then inserts then into the db.
phoneGrabber.getAll((resp) => {
    console.log('aqui esta completo', resp);
    dbWritter.queryAll(resp);
});



    let db = new sqlite3.Database('../api/db.sqlite3');

        let detailsResp = "SELECT api_campaign.details, api_results.results FROM api_campaign INNER JOIN api_results ON api_campaign.id == api_results.fk_campaign_id";

        db.all(detailsResp, function(err, rows) {
        console.log('QUERY ', err, rows);
        for(let i=0;i<rows.length;i++){
            messageSender.messageAll(rows[i].details, rows[i].results);
        }
    });

    db.close();




















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