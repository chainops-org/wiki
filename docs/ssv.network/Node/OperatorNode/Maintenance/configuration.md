# Конфигурация

При использовании .env необходимо создать config.yaml (может быть пустым), и env переопределит его.


<div class="ssv-table ssv-table-6col shadow-right-border">
  <div class="ssv-cell ssv-text-bold">
    <span>Необходим</span>
  </div>
  <div class="ssv-cell ssv-text-bold">
     <span >Yaml ключ</span>
  </div>
  <div class="ssv-cell ssv-text-bold">
     <span >Env key</span>
  </div>
  <div class="ssv-cell ssv-text-bold">
     <span >По умолчанию</span>
  </div>
  <div class="ssv-cell ssv-text-bold">
     <span >Тип</span>
  </div>
  <div class="ssv-cell ssv-text-bold">
     <span >Описание</span>
  </div>

  <div class="ssv-cell">
     <span>✓</span>
  </div>
  <div class="ssv-cell">
    <span>OperatorPrivateKey</span>
  </div>
  <div class="ssv-cell">
    <span>OPERATOR_KEY</span>
  </div>
  <div class="ssv-cell">
    <span>Empty</span>
  </div>
  <div class="ssv-cell">
    <span>Base64</span>
  </div>
  <div class="ssv-cell">
    <span>Закрытый ключ оператора, используемый для расшифровки событий контракта, генерируемых во время настройки узла</span>
  </div>

  <div class="ssv-cell">
     <span>X</span>
  </div>
  <div class="ssv-cell">
    <span>EnableProfile</span>
  </div>
  <div class="ssv-cell">
    <span>ENABLE_PROFILE</span>
  </div>
  <div class="ssv-cell">
    <span>False</span>
  </div>
  <div class="ssv-cell">
    <span>Bool</span>
  </div>
  <div class="ssv-cell">
    <span>Включает инструменты профилирования go</span>
  </div>

  <div class="ssv-cell">
     <span>X</span>
  </div>
  <div class="ssv-cell">
    <span>MetricsAPIPort</span>
  </div>
  <div class="ssv-cell">
    <span>METRICS_API_PORT</span>
  </div>
  <div class="ssv-cell">
    <span>Empty</span>
  </div>
  <div class="ssv-cell">
    <span>Int</span>
  </div>
  <div class="ssv-cell">
    <span>Порт API метрики</span>
  </div>

  <div class="ssv-cell">
     <span>X</span>
  </div>
  <div class="ssv-cell">
    <span>NetworkPrivateKey</span>
  </div>
  <div class="ssv-cell">
    <span>NETWORK_PRIVATE_KEY</span>
  </div>
  <div class="ssv-cell">
    <span>Empty</span>
  </div>
  <div class="ssv-cell">
    <span>String</span>
  </div>
  <div class="ssv-cell">
    <span>libP2P PK, если оставить его пустым, будет сгенерирован узлом</span>
  </div>

  <div class="ssv-cell">
     <span>X</span>
  </div>
  <div class="ssv-cell">
    <span>ReadOnlyMode</span>
  </div>
  <div class="ssv-cell">
    <span>READ_ONLY_MODE</span>
  </div>
  <div class="ssv-cell">
    <span>False</span>
  </div>
  <div class="ssv-cell">
    <span>Bool</span>
  </div>
  <div class="ssv-cell">
    <span>Запустите узел в режиме “только для чтения”. Узел не будет выполнять свои обязанности.</span>
  </div>
</div>

<br/>

<h4><span>Global (Yaml Parent Key)</span></h4>

<div class="ssv-table ssv-table-6col shadow-right-border">
  <div class="ssv-cell ssv-text-bold">
    <span>Необходим</span>
  </div>
  <div class="ssv-cell ssv-text-bold">
     <span >Yaml ключ</span>
  </div>
  <div class="ssv-cell ssv-text-bold">
     <span >Env key</span>
  </div>
  <div class="ssv-cell ssv-text-bold">
     <span >По умолчанию</span>
  </div>
  <div class="ssv-cell ssv-text-bold">
     <span >Допустимые варианты</span>
  </div>
  <div class="ssv-cell ssv-text-bold">
     <span >Описание</span>
  </div>

  <div class="ssv-cell">
     <span>X</span>
  </div>
  <div class="ssv-cell">
    <span>LogLevel</span>
  </div>
  <div class="ssv-cell">
    <span>LOG_LEVEL</span>
  </div>
  <div class="ssv-cell">
    <span>info</span>
  </div>
  <div class="ssv-cell">
    <span>Info, Debug, Warn, Error, Dpanic, Panic, Fatal</span>
  </div>
  <div class="ssv-cell">
    <span>Определяет тип для логирования в журнала регистратора</span>
  </div>

  <div class="ssv-cell">
     <span>X</span>
  </div>
  <div class="ssv-cell">
    <span>LogFormat</span>
  </div>
  <div class="ssv-cell">
    <span>LOG_FORMAT</span>
  </div>
  <div class="ssv-cell">
    <span>console</span>
  </div>
  <div class="ssv-cell">
    <span>console - (default) prints logs in JS (?) format
<br/>
json - prints logs in JSON format</span>
  </div>
  <div class="ssv-cell">
    <span>Определяет форму вывода</span>
  </div>

  <div class="ssv-cell">
     <span>X</span>
  </div>
  <div class="ssv-cell">
    <span>LogLevelFormat</span>
  </div>
  <div class="ssv-cell">
    <span>LOG_LEVEL_FORMAT</span>
  </div>
  <div class="ssv-cell">
    <span>capitalColor</span>
  </div>
  <div class="ssv-cell">
    <span>capitalColor - (default) prints all logs in capitol with color
<br/>
capital - prints all logs in capitals
<br/>
lowercase - prints logs in lowercase</span>
  </div>
  <div class="ssv-cell">
    <span>Определяет возможности форматирования лога</span>
  </div>
</div>

<br/>

<h4><span>Global (Yaml Parent Key)</span></h4>

<div class="ssv-table ssv-table-6col shadow-right-border">
  <div class="ssv-cell ssv-text-bold">
    <span>Необходим</span>
  </div>
  <div class="ssv-cell ssv-text-bold">
     <span >Yaml ключ</span>
  </div>
  <div class="ssv-cell ssv-text-bold">
     <span >Env key</span>
  </div>
  <div class="ssv-cell ssv-text-bold">
     <span >По умолчанию</span>
  </div>
  <div class="ssv-cell ssv-text-bold">
     <span >Допустимые варианты</span>
  </div>
  <div class="ssv-cell ssv-text-bold">
     <span >Описание</span>
  </div>

  <div class="ssv-cell">
     <span>X</span>
  </div>
  <div class="ssv-cell">
    <span>Type</span>
  </div>
  <div class="ssv-cell">
    <span>DB_TYPE</span>
  </div>
  <div class="ssv-cell">
    <span>badger-db</span>
  </div>
  <div class="ssv-cell">
    <span>badger-db,Badger-memory</span>
  </div>
  <div class="ssv-cell">
    <span>Тип БД. Может быть как на диске, так и в памяти</span>
  </div>

  <div class="ssv-cell">
     <span>X</span>
  </div>
  <div class="ssv-cell">
    <span>Path</span>
  </div>
  <div class="ssv-cell">
    <span>DB_PATH</span>
  </div>
  <div class="ssv-cell">
    <span>./data/db</span>
  </div>
  <div class="ssv-cell">
    <span>принимает любой путь на сервере</span>
  </div>
  <div class="ssv-cell">
    <span>Путь к хранилищу</span>
  </div>

  <div class="ssv-cell">
     <span>X</span>
  </div>
  <div class="ssv-cell">
    <span>Reporting</span>
  </div>
  <div class="ssv-cell">
    <span>DB_REPORTING</span>
  </div>
  <div class="ssv-cell">
    <span>false</span>
  </div>
  <div class="ssv-cell">
    <span>Bool</span>
  </div>
  <div class="ssv-cell">
    <span>Определяет, как переключать отчеты по журналам БД</span>
  </div>
</div>

<br/>

<h4><span>ValidatorOptions (не требуются)</span></h4>

<div class="ssv-table ssv-table-6col shadow-right-border">
  <div class="ssv-cell ssv-text-bold">
    <span>Необходим</span>
  </div>
  <div class="ssv-cell ssv-text-bold">
     <span >Yaml ключ</span>
  </div>
  <div class="ssv-cell ssv-text-bold">
     <span >Env key</span>
  </div>
  <div class="ssv-cell ssv-text-bold">
     <span >По умолчанию</span>
  </div>
  <div class="ssv-cell ssv-text-bold">
     <span >Допустимые варианты</span>
  </div>
  <div class="ssv-cell ssv-text-bold">
     <span >Описание</span>
  </div>

  <div class="ssv-cell">
     <span>X</span>
  </div>
  <div class="ssv-cell">
    <span>SignatureCollectionTimeout</span>
  </div>
  <div class="ssv-cell">
    <span>SIGNATURE_COLLECTION_TIMEOUT</span>
  </div>
  <div class="ssv-cell">
    <span>5s</span>
  </div>
  <div class="ssv-cell">
    <span>Ms (milliseconde) <br/>
s (secondes) <br/>
M (minutes) <br/>
H (hour)</span>
  </div>
  <div class="ssv-cell">
    <span>Тайм-аут для сбора подписей после достижения консенсуса</span>
  </div>

  <div class="ssv-cell">
     <span>X</span>
  </div>
  <div class="ssv-cell">
    <span>MetadataUpdateInterval</span>
  </div>
  <div class="ssv-cell">
    <span>METADATA_UPDATE_INTERVAL</span>
  </div>
  <div class="ssv-cell">
    <span>12m</span>
  </div>
  <div class="ssv-cell">
    <span>Ms (milliseconde) <br/>
s (secondes) <br/>
M (minutes) <br/>
H (hour)</span>
  </div>
  <div class="ssv-cell">
    <span>Интервал обновления метаданных валидаторау</span>
  </div>

  <div class="ssv-cell">
     <span>X</span>
  </div>
  <div class="ssv-cell">
    <span>HistorySyncRateLimit</span>
  </div>
  <div class="ssv-cell">
    <span>HISTORY_SYNC_BACKOFF</span>
  </div>
  <div class="ssv-cell">
    <span>Ms (milliseconde) <br/>
s (secondes) <br/>
M (minutes) <br/>
H (hour)</span>
  </div>
  <div class="ssv-cell">
    <span>Bool</span>
  </div>
  <div class="ssv-cell">
    <span>Задержка синхронизации сообщений процесса (задержка между сообщениями)</span>
  </div>
</div>

<br/>

<h4><span>Shares (Для целей тестирования! Все значения, требуемые при тестировании)</span></h4>

<div class="ssv-table ssv-table-6col shadow-right-border">
  <div class="ssv-cell ssv-text-bold">
    <span>Необходим</span>
  </div>
  <div class="ssv-cell ssv-text-bold">
     <span >Yaml ключ</span>
  </div>
  <div class="ssv-cell ssv-text-bold">
     <span >Env key</span>
  </div>
  <div class="ssv-cell ssv-text-bold">
     <span >По умолчанию</span>
  </div>
  <div class="ssv-cell ssv-text-bold">
     <span >Допустимые варианты</span>
  </div>
  <div class="ssv-cell ssv-text-bold">
     <span >Описание</span>
  </div>

  <div class="ssv-cell">
     <span>✓</span>
  </div>
  <div class="ssv-cell">
    <span>NodeID</span>
  </div>
  <div class="ssv-cell">
    <span>NodeID</span>
  </div>
  <div class="ssv-cell">
    <span>-</span>
  </div>
  <div class="ssv-cell">
    <span>Int</span>
  </div>
  <div class="ssv-cell">
    <span>Идентификатор узла</span>
  </div>

  <div class="ssv-cell">
     <span>✓</span>
  </div>
  <div class="ssv-cell">
    <span>PublicKey</span>
  </div>
  <div class="ssv-cell">
    <span>LOCAL_NODE_ID</span>
  </div>
  <div class="ssv-cell">
    <span>-</span>
  </div>
  <div class="ssv-cell">
    <span>String</span>
  </div>
  <div class="ssv-cell">
    <span>Открытый ключ валидатора</span>
  </div>

  <div class="ssv-cell">
     <span>✓</span>
  </div>
  <div class="ssv-cell">
    <span>ShareKey</span>
  </div>
  <div class="ssv-cell">
    <span>LOCAL_SHARE_KEY</span>
  </div>
  <div class="ssv-cell">
    <span>-</span>
  </div>
  <div class="ssv-cell">
    <span>String</span>
  </div>
  <div class="ssv-cell">
    <span>Локальный общий ключ</span>
  </div>

  <div class="ssv-cell">
     <span>✓</span>
  </div>
  <div class="ssv-cell">
    <span>Committee</span>
  </div>
  <div class="ssv-cell">
    <span>LOCAL_COMMITTEE</span>
  </div>
  <div class="ssv-cell">
    <span>-</span>
  </div>
  <div class="ssv-cell">
    <span>map[string]int
<a href="https://github.com/bloxapp/ssv/blob/main/config/example_share.yaml"> Пример </a>
</span>
  </div>
  <div class="ssv-cell">
    <span>Массив локальных комитетов валидаторов</span>
  </div>

  <div class="ssv-cell">
     <span>✓</span>
  </div>
  <div class="ssv-cell">
    <span>OwnerAddress</span>
  </div>
  <div class="ssv-cell">
    <span>LOCAL_OWNER_ADDRESS</span>
  </div>
  <div class="ssv-cell">
    <span>-</span>
  </div>
  <div class="ssv-cell">
    <span>ETH1 address</span>
  </div>
  <div class="ssv-cell">
    <span>Адрес владельца локального валидатора</span>
  </div>

  
</div>

<br/>

<h4><span>ETH2 (Yaml Parent Key)</span></h4>

<div class="ssv-table ssv-table-6col shadow-right-border">
  <div class="ssv-cell ssv-text-bold">
    <span>Необходим</span>
  </div>
  <div class="ssv-cell ssv-text-bold">
     <span >Yaml ключ</span>
  </div>
  <div class="ssv-cell ssv-text-bold">
     <span >Env key</span>
  </div>
  <div class="ssv-cell ssv-text-bold">
     <span >По умолчанию</span>
  </div>
  <div class="ssv-cell ssv-text-bold">
     <span >Допустимые варианты</span>
  </div>
  <div class="ssv-cell ssv-text-bold">
     <span >Описание</span>
  </div>

  <div class="ssv-cell">
     <span>X</span>
  </div>
  <div class="ssv-cell">
    <span>Network</span>
  </div>
  <div class="ssv-cell">
    <span>NETWORK</span>
  </div>
  <div class="ssv-cell">
    <span>Prater</span>
  </div>
  <div class="ssv-cell">
    <span>Prater Mainnet (еще не готов)</span>
  </div>
  <div class="ssv-cell">
    <span>Тип сети Eth2</span>
  </div>

  <div class="ssv-cell">
     <span>✓</span>
  </div>
  <div class="ssv-cell">
    <span>BeaconNodeAddr</span>
  </div>
  <div class="ssv-cell">
    <span>BEACON_NODE_ADDR</span>
  </div>
  <div class="ssv-cell">
    <span>-</span>
  </div>
  <div class="ssv-cell">
    <span>Url-адрес с указанием порта. Поддержка с или без “http://”</span>
  </div>
  <div class="ssv-cell">
    <span>Адрес Beacon Node</span>
  </div>

</div>
<br/>

<h4><span>P2P (Yaml Parent Key)</span></h4>

<div class="ssv-table ssv-table-6col shadow-right-border">
  <div class="ssv-cell ssv-text-bold">
    <span>Необходим</span>
  </div>
  <div class="ssv-cell ssv-text-bold">
     <span >Yaml ключ</span>
  </div>
  <div class="ssv-cell ssv-text-bold">
     <span >Env key</span>
  </div>
  <div class="ssv-cell ssv-text-bold">
     <span >По умолчанию</span>
  </div>
  <div class="ssv-cell ssv-text-bold">
     <span >Допустимые варианты</span>
  </div>
  <div class="ssv-cell ssv-text-bold">
     <span >Описание</span>
  </div>

  <div class="ssv-cell">
     <span>X</span>
  </div>
  <div class="ssv-cell">
    <span>Enr</span>
  </div>
  <div class="ssv-cell">
    <span>ENR_KEY</span>
  </div>
  <div class="ssv-cell">
    <span>Загрузочный узел Blox ENR</span>
  </div>
  <div class="ssv-cell">
    <span>Формат ENR</span>
  </div>
  <div class="ssv-cell">
    <span>ENR, используемый в discovery</span>
  </div>

  <div class="ssv-cell">
     <span>X</span>
  </div>
  <div class="ssv-cell">
    <span>DiscoveryType</span>
  </div>
  <div class="ssv-cell">
    <span>DISCOVERY_TYPE_KEY</span>
  </div>
  <div class="ssv-cell">
    <span>dicv5</span>
  </div>
  <div class="ssv-cell">
    <span>

* Discv5
* Mdns

</span>
  </div>
  <div class="ssv-cell">
    <span>Метод использующийся при p2p обнаружении</span>
  </div>

  <div class="ssv-cell">
     <span>X</span>
  </div>
  <div class="ssv-cell">
    <span>DiscoveryType</span>
  </div>
  <div class="ssv-cell">
    <span>DISCOVERY_TYPE_KEY</span>
  </div>
  <div class="ssv-cell">
    <span>dicv5</span>
  </div>
  <div class="ssv-cell">
    <span>

* Discv5
* Mdns

</span>
  </div>
  <div class="ssv-cell">
    <span>Метод использующийся при p2p обнаружении</span>
  </div>

  <div class="ssv-cell">
     <span>X</span>
  </div>
  <div class="ssv-cell">
    <span>TCPPort</span>
  </div>
  <div class="ssv-cell">
    <span>TCP_PORT</span>
  </div>
  <div class="ssv-cell">
    <span>13000</span>
  </div>
  <div class="ssv-cell">
    <span>Int</span>
  </div>
  <div class="ssv-cell">
    <span>TCP порт p2p</span>
  </div>

  <div class="ssv-cell">
     <span>X</span>
  </div>
  <div class="ssv-cell">
    <span>UDPPort</span>
  </div>
  <div class="ssv-cell">
    <span>UDP_PORT</span>
  </div>
  <div class="ssv-cell">
    <span>12000</span>
  </div>
  <div class="ssv-cell">
    <span>Int</span>
  </div>
  <div class="ssv-cell">
    <span>UDP порт p2p</span>
  </div>

  <div class="ssv-cell">
     <span>X</span>
  </div>
  <div class="ssv-cell">
    <span>HostAddress</span>
  </div>
  <div class="ssv-cell">
    <span>HOST_ADDRESS</span>
  </div>
  <div class="ssv-cell">
    <span>-</span>
  </div>
  <div class="ssv-cell">
    <span>Ip address</span>
  </div>
  <div class="ssv-cell">
    <span>Внешний ip узла открытый для обнаружения
(Нет значения по умолчанию, если только при использовании MakeFile не требуется выборка ip с помощью resolver4)</span>
  </div>

  <div class="ssv-cell">
     <span>X</span>
  </div>
  <div class="ssv-cell">
    <span>RequestTimeout</span>
  </div>
  <div class="ssv-cell">
    <span>P2P_REQUEST_TIMEOUT</span>
  </div>
  <div class="ssv-cell">
    <span>5s</span>
  </div>
  <div class="ssv-cell">
    <span>Ms (milliseconde)<br/>
s (secondes)<br/>
M (minutes)<br/>
H (hour)</span>
  </div>
  <div class="ssv-cell">
    <span>Тайм-аут запроса BN (BeaconNode) </span>
  </div>

  <div class="ssv-cell">
     <span>X</span>
  </div>
  <div class="ssv-cell">
    <span>MaxBatchResponse</span>
  </div>
  <div class="ssv-cell">
    <span>P2P_MAX_BATCH_RESPONSE</span>
  </div>
  <div class="ssv-cell">
    <span>50</span>
  </div>
  <div class="ssv-cell">
    <span>Int</span>
  </div>
  <div class="ssv-cell">
    <span>Максимальное количество возвращаемых объектов в пакете</span>
  </div>

  <div class="ssv-cell">
     <span>X</span>
  </div>
  <div class="ssv-cell">
    <span>MaxPeers</span>
  </div>
  <div class="ssv-cell">
    <span>P2P_MAX_PEERS</span>
  </div>
  <div class="ssv-cell">
    <span>250</span>
  </div>
  <div class="ssv-cell">
    <span>Int</span>
  </div>
  <div class="ssv-cell">
    <span>Максимальное количество подключенных одноранговых узлов</span>
  </div>

  <div class="ssv-cell">
     <span>X</span>
  </div>
  <div class="ssv-cell">
    <span>PubSubTraceOut</span>
  </div>
  <div class="ssv-cell">
    <span>PUBSUB_TRACE_OUT</span>
  </div>
  <div class="ssv-cell">
    <span>-</span>
  </div>
  <div class="ssv-cell">
    <span>String</span>
  </div>
  <div class="ssv-cell">
    <span>Путь к файлу для хранения собранных трассировок pubsub</span>
  </div>

  <div class="ssv-cell">
     <span>X</span>
  </div>
  <div class="ssv-cell">
    <span>NetworkTrace</span>
  </div>
  <div class="ssv-cell">
    <span>NETWORK_TRACE</span>
  </div>
  <div class="ssv-cell">
    <span>False</span>
  </div>
  <div class="ssv-cell">
    <span>Bool</span>
  </div>
  <div class="ssv-cell">
    <span>
Логический флаг для включения сетевой отладки</span>
  </div>

  <div class="ssv-cell">
     <span>X</span>
  </div>
  <div class="ssv-cell">
    <span>ExporterPeerID</span>
  </div>
  <div class="ssv-cell">
    <span>EXPORTER_PEER_ID</span>
  </div>
  <div class="ssv-cell">
    <span>16Uiu2HAkvaBh2xjstjs1koEx3jpBn5Hsnz7Bv8pE4SuwFySkiAuf</span>
  </div>
  <div class="ssv-cell">
    <span>String</span>
  </div>
  <div class="ssv-cell">
    <span>
Oдноранговый идентификатор экспортера, чтобы избежать подключения.</span>
  </div>



</div>
