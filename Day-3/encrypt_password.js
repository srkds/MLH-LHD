const crypto = require('crypto')

function encryptPassword(plainPassword) {
    var encryptedPassword  = crypto.createHmac('sha256','password').update(plainPassword).digest("hex");
  return encryptedPassword;  
}

console.log(encryptPassword("IamusingPassword"))