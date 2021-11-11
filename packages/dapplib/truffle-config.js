require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'inner knife flush space struggle decrease magic home harvest casual equal gentle'; 
let testAccounts = [
"0xe3330fa4450c54cb1edcdb68f61a832f9ea8a516894ba9d630bce2d3eae19f3a",
"0x8804395d942d983e075c8d5216c0e0fc596293221a82a036791cf0c0f6169bdb",
"0xcb1ce285d5b3e35bcaad109a9255795e1c2a5dfc98718fb88da0d98e7238c8fe",
"0x8f07d2fc8c45e7eca116434ddb2ba54a951ae69e1f06ee04c542f800207dee1c",
"0x9d0f0f3373795e2f3671b1d93738f7cc50b9ce38d1a9c93ddc206ac76f6fdef5",
"0x7ad853f1fdcb2f1c8ff8c975e0ee5b01d338ffeada7e50373d0e0b4a1c241730",
"0xfa4d52d256d79c4011946f44ade0338eb3ccc1f30362e56f78cddd594f653c49",
"0x1325358640ef7a0d8d1bd9a4e646c2e792c0c1538192fbeaf8e0204d98b87faf",
"0xc01b92adc8801c96d48f7e8320c0b499bd3e1387fdf704a27149dfece67b9707",
"0x6773d99eea0dc8a8e64f573bc945768ac482bc51ae2fad6148c8f2b971c875e0"
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


