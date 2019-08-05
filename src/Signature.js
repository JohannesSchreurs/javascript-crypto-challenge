const nacl = require('libsodium-wrappers');

let keypair;

const libsodiumLoaded = async () => await nacl.ready;

(async () => {
    await libsodiumLoaded();
    keypair = nacl.crypto_sign_keypair();
})();

const verifyingKey = async () => {
    await libsodiumLoaded();
    return keypair.publicKey;
}

const sign = async (msg) => {
    await libsodiumLoaded();
    return nacl.crypto_sign(msg, keypair.privateKey);
}

module.exports.verifyingKey = verifyingKey;
module.exports.sign = sign;
