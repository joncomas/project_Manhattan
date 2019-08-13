const sqlite3 = require('sqlite3').verbose();


const queryAll = (arr) => {
    console.log(arr);
    const myphones = arr.slice();
                // open database in memory
                    let db = new sqlite3.Database('../api/db.sqlite3');
                    // construct the insert statement with multiple placeholders
                    // based on the number of rows
                    // let resultados = testing.map((phones) => '(?)').join(',');
                    /*arr.forEach((nummer) => {
                        let sql = 'INSERT INTO api_results (results, fk_campaign_id) VALUES (' + nummer + ', 2);';

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
                    })*/

                    myphones.map(phone => {
                        console.log(phone)
                        let sql = 'INSERT INTO api_results (results, fk_campaign_id) VALUES ("' + phone + '", 2);';

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
                    });

                    //let sql = 'DELETE FROM api_results; VACUUM;';
                    // close the database connection
                    db.close();

}

module.exports = {
    queryAll
}