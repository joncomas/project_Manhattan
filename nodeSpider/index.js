const search = require('./search');

search.getListURL().then((res) => {
    console.log('resp', res.length);
});