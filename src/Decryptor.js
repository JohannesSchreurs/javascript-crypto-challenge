const nacl = require('libsodium-wrappers');

let key = null;

const setKey = async _key => {
    key = _key;
}

const decrypt = async (ciphertext, nonce) => {
    if(key !== null) {
        return nacl.crypto_secretbox_open_easy(ciphertext, nonce, key);
    } else {
        throw 'no key'; 
    }
}

module.exports.setKey = setKey;
module.exports.decrypt = decrypt;
