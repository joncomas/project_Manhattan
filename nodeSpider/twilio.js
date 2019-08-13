// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'AC761170e2a7add93aedc5df0e98793cad';
const authToken = '6bcfc7c21a251fdb59942719e1f13e72';
const client = require('twilio')(accountSid, authToken);

const messageAll = (body, to) => {


  console.log("El siguiente mensaje: "+body+" ha sido enviado al numero: "+to+ " en este momento")

   /*
    client.messages
    .create({
        body: body,
        from: '+56937610029',
        to: to
    })
    .then(message => console.log(message.sid));
*/
}

module.exports = {
    messageAll
}
