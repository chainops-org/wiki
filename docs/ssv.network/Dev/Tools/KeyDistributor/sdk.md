# SDK. Пакет инструментов для разработки
___
<span class='ssv-text-bg'>SSV Key Distributor SDK</span> - это библиотека JS/TS, которая позволяет разработчикам интегрировать распространение ключей
валидатора в KeyShares в свое приложение.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs className="unique-tabs">
  <TabItem label="Yarn" value="yarn">

```bash
yarn add https://github.com/bloxapp/ssv-keys.git
```
  </TabItem>
  <TabItem label="NPM" value="npm">

```bash
npm install https://github.com/bloxapp/ssv-keys.git
```
  </TabItem>
</Tabs>

### Методы

Метод Keystore(опционально)

Возвращает ключ проверки из существующего файла хранилища ключей.

```js
// Imports
import { EthereumKeyStore } from 'ssv-keys'  

// Get the private key from the keystore using the keystore password

// Get required data from the keystore file
const keyStore = new EthereumKeyStore(JSON.stringify(keystore));
// Get public key using the keystore password
  const publicKey = await keyStore.getPublicKey(keystorePassword); 
// Get private key using the keystore password
  const privateKey = await keyStore.getPrivateKey(keystorePassword); 
  
// Log the public key
console.debug('Public Key: ' + publicKey); 
// Log the private key
console.debug('Private Key: ' + privateKey); 
```

### Метод KeyShare

Возвращает ключ проверки из существующего файла хранилища ключей.


```js
// Build the shares

// Imports
import { Encryption, Threshold } from 'ssv-keys'
import { encode } from 'js-base64'
const operators = require('./operators.json');

// Initialize the Threshold class
const thresholdInstance = new Threshold();
// Create the threshold instance using the private key
const threshold = await thresholdInstance.create(privateKey);
// Build the shares using an array of operator public keys
let shares = new Encryption(operators, threshold.shares).encrypt();

// Loop through the operators RSA keys and format them as base64
shares = shares.map((share) => {
    share.operatorPublicKey = encode(share.operatorPublicKey);
// Return the operator key and KeyShares (sharePublicKey & shareEncrypted)  
    return share;
});
```

### Метод регистрации данных валидатора

Возвращает результат транзакции <a href="/docs/ssv.network/dev/smartcontracts/validators_methods">registerValidator()</a> из ключа валидатора и набора ключей оператора

```js
// Build transaction payload
// Imports
import { encode } from 'js-base64'
import { Web3 } from 'web3'
const operatorIds = require('./operatorIds.json');

// Initialize the web3 class
  const web3 = new Web3(); 
// Loop through the operators and encode them as ABI parameters
  const operatorsPublicKeys = operators.map((operator) => web3.eth.abi.encodeParameter('string', encode(operator)));
// Get all the public keys from the shares
  const sharePublicKeys = shares.map((share) => share.publicKey);
// Get all the private keys from the shares and encode them as ABI parameters
  const shareEncrypted = shares.map((share) => web3.eth.abi.encodeParameter('string', share.privateKey));


// Token amount (liquidation collateral and operational runway balance to be funded)
  const tokenAmount = web3.utils.toBN(123456789).toString(); /


// Return all the needed params to build a transaction payload
  return [
    threshold.validatorPublicKey,
    `[${operatorIds.join(',')}]`,
    operatorsPublicKeys,
    sharesPublicKeys,
    sharesEncrypted,
    tokenAmount
  ]
```
