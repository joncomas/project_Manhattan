const sqlite3 = require('sqlite3').verbose();
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

/*
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

            })
            .catch(function(err) {
                //handle error
        });
    }
});

*/




                testing = ['2345678949484', '23456543456'];

                // open database in memory
                    let db = new sqlite3.Database('../api/db.sqlite3');
                    // construct the insert statement with multiple placeholders
                    // based on the number of rows
                    // let resultados = testing.map((phones) => '(?)').join(',');
                    testing.forEach((nummer) => {
                        let sql = 'INSERT INTO api_results (results, fk_campaign_id) VALUES (' + nummer + ', 13);';

                                db.run(sql, function(err) {
                            if (err) {
                                return console.error(err.message);
                            }
                            console.log(`Rows inserted ${this.changes}`);
                        });

                        let sqlCheckData = "SELECT * FROM api_results ";
                        db.all(sqlCheckData, function(err, rows) {
                            console.log('QUERY ', err,rows)
                        });


                    })


                    //let sql = 'DELETE FROM api_results; VACUUM;';

                    // close the database connection
                    db.close();