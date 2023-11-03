const Cookies = require('js-cookie');

function CreateAndSetWebCookie(cookie_name){
    Cookies.set(cookie_name, 'location', { expires: 7, domain: "http://spacoheloisarocha.com.br/", path: '/', priority: 'minimum'});
}

module.exports = {CreateAndSetWebCookie};