# Основные ошибки

## Узел не участвует

**Вопрос: Почему я получаю ошибку `"failed to check address"`?**

:::danger $~$

{"level":"debug","time":"2021-12-13T06:45:24.529069Z","caller":"p2p/discovery.go:56","message":"failed to check address","app":"SSV-Node:v0.1.7","component":"p2p","id":"16Uiu2HAmQYHdvGW2rtCejsz3BCNJsoBWpD9Kd2NuZWRgGggkKg4h","addr":"220.158.208.20:13000","err":"IP address is not accessible: dial tcp 220.158.208.20:13000: i/o timeout"}

:::

**Ответ:** Порт 13000 закрыт - пожалуйста, убедитесь, что он открыт (на уровне докера и машины) и перезапустите ваш узел.
Для подтверждения вы должны увидеть сообщение "Address was checked successfully".

**Вопрос: Почему я получаю сообщение `"no indices, duties won’t be fetched"`?**
**Ответ:** Могут быть слндующие причины:

1. Ни один валидатор не выбрал ваш оператор в качестве одного из своих операторов (в целях тестирования вы всегда можете открыть один и выбрать себя в качестве одного из управляющих операторов).
2. Ваш узел использует открытый ключ оператора, отличный от того, который вы зарегистрировали в сети (с помощью веб-приложения SSV).
   Шаги, подтверждающие, что вы используете один и тот же ключ:
3. Найдите ключ оператора, который вы зарегистрировали в сети, в [ssv эксплорере](https://explorer.ssv.network/).
4. Найдите открытый ключ оператора, который вы сгенерировали в узле во время настройки.
5. Сравните ключи - если они не совпадают, вы должны обновить свой закрытый ключ в файле `config.yaml` узла, согласно [этому шагу](https://docs.ssv.network/run-a-node/operator-node/maintenance/troubleshooting).

:::info $~$

{"level":"info","time":"2021-12-13T06:45:14.466457Z","caller":"operator/storage.go:122","message":"setup operator privateKey is DONE!","app":"SSV-Node:v0.1.7","who":"operatorKeys","public-key":"LS0tLS1CRUdJTiBSU0EgUFVCTElDIEtFWS0tLS0tCk1JSUJJakFOQmdrcWhraUc5dzBCQVFFRkFBT0NBUThBTUlJQkNnS0NBUUVBOHRXRG0xbTNtYW5Ra0xweVpLMzcKMGNHRGoydlBTWStRWVFBd3BWOXZpWThKVlgzT2J0VjNLL24xNy9peGZ2VEx5aGZKckgzYStpS1NIcDl5WEU4cQp6N2RhOTlaVzU4RzAyeDF0ZnpuV1REMmFpbklpMDAwdjQ5RjFTdzlYOUttQUg5VzNGdjBaREpadzZKVFd3R0ZiCmZiTmM2cGVvTG5ucnllWlVXb09ZQms0TVg2Um9QV2ZXNUJEaURaeHFqVjdvbFV3ZnFBMW5OeU96RXFCMEtkSW8KbExSZFA4ODZBNFJrZGpjUDc5aWdrM0RjVVdCMDhpZlM4SFlvS012ZUZrek0yR2dmOG5LRnFmSnFYNzlybFR4cApSTnlheUZOYXhZWEY4enBBMHlYRGFHQ0I1TitzZ1N2Yjg1WDAydWVCa1NadFFUMUMyTGMxWlZkbERFZVpGNFNlCkh3SURBUUFCCi0tLS0tRU5EIFJTQSBQVUJMSUMgS0VZLS0tLS0K"}

:::

## Проблемы с эндпоинтами

**Вопрос: Почему мой ETH1 эндпоинт не подключается?**

**Ответ:** убедитесь, что ваша эндпоинт ETH1 работает с использованием Websocket, это необходимо для потоковой передачи событий из сетевых контрактов.

**Вопрос: Почему я получаю ошибку "port 13000 already running"?**

**Ответ:**Это может произойти, если вы запустили узел консенсуса и узел SSV на одной машине - пожалуйста, убедитесь, что вы изменили порт узла SSV на любой другой порт в следующих местах:

1. config.yaml `TcpPort: <NEW_PORT>`
2. Команда докера `-p NEW_PORT:NEW_PORT`
3. Уровень машины - настройка в соответствии с облачным провайдером (включение нового порта).

После обновления порта, пожалуйста, перезапустите узел SSV и убедитесь, что ошибка не появляется.

:::info $~$

Не нашли ответа на интересующий вас вопрос? Пообщайтесь с другими операторами сети на нашем [канале Discord](https://discord.gg/kqWmdU8dQ2)

:::
