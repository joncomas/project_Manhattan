
const rp = require('request-promise');
const $ = require('cheerio');

let getPhoneListURL = async () => {
    const maxSearchPages = 3;
    const arrUrl = [];

    for (let page = 0; page < maxSearchPages; page++) {
        const url = 'https://www.portalinmobiliario.com/venta/casa/lo-barnechea-metropolitana?ca=3&pd=500000&ph=800000&ts=1&dd=4&mn=3&or=&sf=1&sp=0&at=0&pg=' + (page + 1);
        const html = await rp(url);

        const lista = $('.product-item', html);
        if (lista !== undefined && lista.length > 0) {
            for (let i = 0; i < lista.length; i++) {
                arrUrl.push($('.product-item-summary a', lista[i])[0].attribs.href);
            }
        } else {
            console.log('NO se encontraron listas')
        }
    }

    return arrUrl;
};

module.exports = {
    getListURL
}