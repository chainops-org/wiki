# Установка
___

### Минимальные требования

<div class="ssv-marked-list">
<div class="ssv-marked-list__item">
<div class="ssv-marked-list__icon-wrapper">
<svg class="ssv-marked-list__icon" viewBox="0 0 16 16" fill="none" preserveAspectRatio="xMidYMid meet"  style={{height: 16.2 + 'px', width: 16.2 + 'px'}}><path fill-rule="evenodd" clip-rule="evenodd" d="M5.72 11.833l8.826-8.836.708.706-9.18 9.19a.5.5 0 01-.707.001l-4.37-4.36.706-.708 4.016 4.007z" fill="currentColor"></path></svg>
</div> 
<span class="ssv-marked-list__item-text">Machine running Ubuntu with 1 core, 2GB RAM, 5GB storage</span>
</div> 

<div class="ssv-marked-list__item">
<div class="ssv-marked-list__icon-wrapper">
<svg class="ssv-marked-list__icon" viewBox="0 0 16 16" fill="none" preserveAspectRatio="xMidYMid meet"  style={{height: 16.2 + 'px', width: 16.2 + 'px'}}><path fill-rule="evenodd" clip-rule="evenodd" d="M5.72 11.833l8.826-8.836.708.706-9.18 9.19a.5.5 0 01-.707.001l-4.37-4.36.706-.708 4.016 4.007z" fill="currentColor"></path></svg>
</div> 
<span class="ssv-marked-list__item-text">Узел ETH1 с включенным Websocket</span>
</div> 

<div class="ssv-marked-list__item">
<div class="ssv-marked-list__icon-wrapper">
<svg class="ssv-marked-list__icon" viewBox="0 0 16 16" fill="none" preserveAspectRatio="xMidYMid meet"  style={{height: 16.2 + 'px', width: 16.2 + 'px'}}><path fill-rule="evenodd" clip-rule="evenodd" d="M5.72 11.833l8.826-8.836.708.706-9.18 9.19a.5.5 0 01-.707.001l-4.37-4.36.706-.708 4.016 4.007z" fill="currentColor"></path></svg>
</div> 
<span class="ssv-marked-list__item-text">Клиент узла ETH2 - Prysm, Lighthouse, Tekou, Nimbus (или любой клиент, использующий стандартный REST HTTP)</span>
</div> 

</div>


### Настройка Хостинг-сервера

Для настройки вашего узла поддерживаются все облачные сервисы (см. справочный пример на AWS <a href="https://github.com/bloxapp/ssv/blob/main/docs/OPERATOR_GETTING_STARTED.md#setting-aws-server-for-operator">здесь</a>).

:::info

При настройке брандмауэра убедитесь, что открыты порты, указанные в разделе "5. Установить конфигурационный файл" (по умолчанию 12000 UDP и 13000 TCP).

:::

:::tip Обрати внимание

<a href="https://eth-docker.net/docs/Support/BloxSSV">Настройка ноды SSV</a> также доступна с помощью <a href='https://eth-docker.net/docs/About/Overview'>eth-docker</a>.

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs className="unique-tabs">
  <TabItem label="MacOS" value="mac">

```bash
cd ./{path to the folder to which the key pair file was downloaded}

chmod 400 {key pair file name}

ssh -i {key pair file name} ubuntu@{instance public IP you took from AWS}
```

  </TabItem>
  <TabItem label="Windows" value="win">

```bash
cd /{path to the folder to which the key pair file was downloaded}

ssh -i {key pair file name} ubuntu@{instance public IP you took from AWS}
```

  </TabItem>
</Tabs>


### Скрипт установки

```bash
sudo su

$ wget https://raw.githubusercontent.com/bloxapp/ssv/main/install.sh

chmod +x install.sh

./install.sh
```

### Генерирование ключей оператора

Открытый ключ вашего оператора (PK) и Секретный ключ (SK) генерируются с помощью этой команды:

:::info
Ваш PK необходим при  <a href="/docs/ssv.network/node/operatornode/registration">регистрации вашего оператора</a> в сети.
:::


```bash
docker run -d --name=ssv_node_op_key -it 'bloxstaking/ssv-node:latest' \
/go/bin/ssvnode generate-operator-keys && docker logs ssv_node_op_key --follow \
&& docker stop ssv_node_op_key && docker rm ssv_node_op_key
```


<Tabs className="unique-tabs">
  <TabItem label="Пример PK" value="pk">

```json
LS0tLS1CRUdJTiBSU0EgUFVCTElDIEtFWS0tLS0tCk1JSUJJakFOQmdrcWhraUc5dzBCQVFFRkFBT0NBUThBTUlJQkNnS0NBUUVBMDswYVdEK3RibndzYVdLYjF3UnEKM0xheW8rL1dSeGh3aVJ0aXFsL0dmZGozaHY0Unh5K1FwVzh6666RK1dJNmJ1VFc4bzN2ZmsydDMwNUlQRTdCVApZR3ZoS666MFNoYmlHVXVQcXpxQnVSTjB6OTUxV3VlcEJwV3RkeTdUaDVsT0w1cTQ3REFqbFFDdi95NlJLZzM5Ck9nTXZnZ1BaNTRNWHJZcFdINlJqa3hoVUxvWXQxTEVBN05pU3JHU3JqdGxCTlZiRHR5d666WFp0SnNkM2tjbTMKNkw0anZHd2I0RjhqTmlzSUU5eWFLd2J1SmV6dHpGdjY1YXRiV25hVFdzbmg1bDNrZ05uMlJLWktqZ1pycmRGdApuT2t3Vmh6M2JDRTFUZWpua1kwLzN4QTBIWjVONC9IUUF1Rit2TllYb040aDBicnVTdlVmZTBLTndvMDNFQ3l3Ckl3SURBUUFCCi0tLS0tRU5EIFJTQSBQVUJMSUMgS0VZLS0tLS0U
```

  </TabItem>
  <TabItem label="Пример SK" value="sk">

```json
LS0tLS1CRUdJTiBSU0EgUFJJVkFURSBLRVktLS0tLQpNSUlFcEFJQkFBS0NBUUVBMCswYVdEK3RibndzYVdLYjF3UnEzTGF5bysvV1J4aHdpUnRpcWwvR2ZkajNodjRSCnh5K1FwVzhFRUNRK1dJNmJ1VFc4bzN8YmsydDMwNUlQRTdCVFlHdmhKem4wU2hiaUdVdVBxenFCdVJOMHo5NTEKV3VlcEJwV3RkeTdUaDVsT0w1cTQ3REFqbFFDdi95NlJLZzM5T2dNdmdnUFo2VE1YcllwV0g2UmpreGhVTG9ZcwpxTEVBN05pU3JHU3JqdGxCTlZiRHR5d3lGWFp0SnNkM6gykTM2TDRqdkd3YjRGOGpOaXNJRTl5YUt3YnVKZXq0RnpGdjY1YXRiV25hVFdzbmg1bDNrZ05uMlJLWktqZ1pycmRGdG5Pa3dWaHozYkNFMVRlam5rWTAvM3hBMEhaNU4KNC9IU666Rit2TllYb040aDBicnVTdlVmZTBLTndvMDNFQ3l3SXdJREFRQUJBb0lCQUQvbW9XZjBvMlhLR1ZZWgpmcVlCMWZzQk43SkkwaEtUNHZMa2lBYVpaRzl6NlljUnV1aVZoZ2JzQjR5RENSWWd3Z0hCbTBTc1NFamFRY0pRCnF5MGpvTEJWTndtdDV1UWtMRDYyVXZhdGFJb1d2TVVrN2J2Z1dFMzgrZFlURDRNMmphVzdBSUZ2TG50eVBwOHkKT21FMDRLTUtiTnZHTDRHcWZ6dzdseVpwV2dEeTY0bWdkMk8rd21aZFNhdkR0TGNza666bHVSTEQxYklKVDQxSApwY3hKVk5qVmhFU3NGM1NGdXM4ZmpERXJiYmFQbnNTNWI3Z0hGUUJpZG5iYWhjOG5MOGFkT2M5Nks4a2FIWEFYCjJlSEloQitwSmdwUjU0bXY1bjZWTFljTUhXVTVyWE14emNicXQxVGFuMjI3MTA2NTRRQmIzY1ByT1V5UkI3REkKU1NEUzc0a0NnWUVBN1U4M0t4cWJpQy9mR2c4VUxMVjAzWktrOCtHWlNKZFlhN2ZnS2dXVCsvQjJLa2xPY2Y0TAoxcHYxMmlFbTdnVE5FYnNhaElpTm8wYlo5eEx2aG9NdTZoNSp
```

  </TabItem>
</Tabs>

:::danger

Пожалуйста, не забудьте сохранить и создать резервную копию вашего секретного ключа оператора в надежном месте.
Не делитесь этим ключом ни с кем.

:::


### Создание конфигурационного файла

Заполните все заполнители (например, <span class='ssv-text-bg'> <ETH 2.0 node> </span> или <span class='ssv-text-bg'> <директория db> </span>) фактическими значениями и выполните приведенную ниже команду для создания файла config.yaml.

```bash
yq n db.Path "<db folder>" | tee config.yaml \
  && yq w -i config.yaml eth2.Network "prater" \
  && yq w -i config.yaml eth2.BeaconNodeAddr "<ETH 2.0 node>" \
  && yq w -i config.yaml eth1.ETH1Addr "<ETH1 node WebSocket address>" \
  && yq w -i config.yaml eth1.RegistryContractAddr "0x687fb596F3892904F879118e2113e1EEe8746C2E" \
  && yq w -i config.yaml OperatorPrivateKey "<private key of the operator>"
```

:::info

Пожалуйста, убедитесь, что ваша конечная точка ETH 1 взаимодействует через websocket, а не через HTTPS, чтобы поддерживать подписки и уведомления

:::

#### Отладка конфигурации

Чтобы просмотреть журналы отладки, добавьте соответствующий раздел в config.yaml, выполнив:

```bash
 yq w -i config.yaml global.LogLevel "debug"
```

#### Конфигурация метрик

Чтобы включить <a href="https://github.com/bloxapp/ssv/tree/main/monitoring/metrics">метрики</a>, должна быть установлена соответствующая конфигурация:

```bash
 yq w -i config.yaml MetricsAPIPort "15000"
```

### Запуск ноды в Docker

**Запустите образ docker в той же папке, в которой вы создали config.yaml:**

```bash
docker run -d --restart unless-stopped --name=ssv_node -e \
CONFIG_PATH=./config.yaml -p 13000:13000 -p 12000:12000 -v \
$(pwd)/config.yaml:/config.yaml -v $(pwd):/data -it \
'bloxstaking/ssv-node:latest' make BUILD_PATH=/go/bin/ssvnode start-node \ 
&& docker logs ssv_node --follow
```

#### Обновление образа ноды SSV

Выключите запущенный контейнер и скачайте последний образ или его определенную версию

```bash
docker rm -f ssv_node && docker pull bloxstaking/ssv-node:latest
```
