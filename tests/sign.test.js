const nacl = require('libsodium-wrappers')
const Signature = require('../src/Signature')

//Added a beforeAll() function, to make sure libsodium was correctly loaded in (as the loading the library requires are Promise to be fulfilled)
beforeAll(async () => {
  await nacl.ready
})

describe('signing module', () => {
  it('provides a verifying key', async () => {
    expect(await Signature.verifyingKey()).toBeDefined()
  })
  it('returns a signed message', async () => {
    const msg = nacl.randombytes_buf(1024)
    const signedMsg = await Signature.sign(msg)
    const verifyingKey = await Signature.verifyingKey()
    expect(nacl.crypto_sign_open(signedMsg, verifyingKey)).toEqual(msg)
  })
})
