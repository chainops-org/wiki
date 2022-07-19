# Установка

## Требования

- Кошелек в тестовой сети Goerli, пополненный достаточным количеством GoETH для оплаты газа за транзакцию
- Эндпоинт узла исполнительного уровня
- Надежное интернет-соединение

## Установка

```bash
git clone https://github.com/bloxapp/ssv-liquidator.git
cd ssv-liquidator
yarn install
yarn cli --help
```

:::info $~$

Эта установка требует наличия NodeJS на вашей машине.

:::

## Аргументы

| Параметр                 | Описание                                                                                                                                                                            |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--node-url`             | Эндпоинт узла Ethereum                                                                                                                                                              |
| `--private-key`          | Приватный ключ кошелька ликвидатора                                                                                                                                                 |
| `--ssv-token-address`    | Адрес контракта токена SSV                                                                                                                                                          |
| `--ssv-contract-address` | Адрес контракта [ssv.network](https://docs.ssv.network/developers/smart-contracts#_bhl3qnbkn7py)                                                                                    |
| `--gas-price`            | Эвристика цены на газ в соответствии с медианной ценой на газ, предложенной web3 gas price oracle: <ul><li>Низкий (\*0.1) </li><li>Средний (\*0.2)</li><li>Высокий(\*0.3)</li></ul> |

## Запуск

Узел ликвидатора может быть инициирован с помощью аргументов в команде yarn cli или с помощью переменных .env.

<Tabs>
<TabItem value="cli" label="CLI">

    yarn cli --node-url <ETH1 NODE URL> --private-key <LIQUIDATOR WALLET ADDRESS PK> --ssv-token-address <SSV NETWORK CONTRACT> --ssv-contract-address <SSV CONTRACT ADDRESS> --gas-price <PREFFERED GAS PRICE>

</TabItem>
<TabItem value="env" label=".Env variables">

```
 NODE_URL=<ETH1 NODE URL>
 SSV_NETWORK_ADDRESS=<SSV NETWORK CONTRACT>
 SSV_TOKEN_ADDRESS=0x425890f2a5g84hw94
 ACCOUNT_PRIVATE_KEY=<LIQUIDATOR WALLET ADDRESS PK>
 GAS_PRICE=<PREFFERED GAS PRICE>
```

</TabItem>

</Tabs>

import Tabs from '@theme/Tabs';

import TabItem from '@theme/TabItem';
