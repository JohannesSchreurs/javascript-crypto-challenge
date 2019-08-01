const nacl = require('libsodium-wrappers');

let keypair;

(async() => {
    await nacl.ready;
    keypair = nacl.crypto_sign_keypair();
})();

const verifyingKey = async () => keypair.publicKey;

const sign = async (msg) => nacl.crypto_sign(msg, keypair.privateKey);

module.exports.verifyingKey = verifyingKey;
module.exports.sign = sign;