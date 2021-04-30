require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'grid area fringe speak guard render remember million hidden forum flock student'; 
let testAccounts = [
"0x8434acfc8f2bbaf9bb7502b2d2a422c2a4946a456bfc4ccdf2784c5d9ed4779b",
"0x44c2dd642e5750555869befbbff8f975467bdf4299cf16f556139cf9f88f5be5",
"0xdc6661c8880f50f94a84daef565f49e8b6ce6e9d8e9048e30427ab73a2db71a7",
"0x8ca6a73f917c94a330edfc3d2ef4695a0387713bafd2d53ff7362e088e1116ff",
"0x28572b6b7cef4e09ead953765715326b8a316ebc897f8ce1953a571ad1eaa471",
"0x3eb961686546424b8182e8c40557b76841bd644681bf2c4d749d27fcb5a186a4",
"0x0672342a7fbee8fdd47cb75f446fd68308731dac98a763c6c1002f37a964750f",
"0x176e6169b79ac02bbd4800661a0cb51b4debcd32aca5373ded78cf57ccc2d53d",
"0x5bdde48dde61d48d3b0cf148b6af9939a5c7e53a4d2570d1b152ae6b9ec89882",
"0x6fd7b819b55feeaa84bdb06eca3f06ee09f1117cadde34ee46ece7a3fca4b4fb"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


