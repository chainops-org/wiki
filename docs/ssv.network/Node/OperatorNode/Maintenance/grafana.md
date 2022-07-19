# Мониторинг - Grafana

Панель инструментов оператора Grafana - это отличный инструмент для анализа производительности вашего узла и отладки любых проблем с производительностью, которые вы можете обнаружить во время работы узла.

## Установка

Чтобы настроить собственную панель инструментов, выполните следующие действия:

1. Включите `MetricsAPIPort` на порту 15000

```bash
MetricsAPIPort: 15000
```

1. Настройте сервис Prometheus
2. Сконфигурируйте [prometheus.yaml](https://github.com/bloxapp/ssv/blob/main/monitoring/prometheus/prometheus.yaml) - не забудьте изменить цели на имя вашего узла:

```bash
# - <container_name>:15000
```

3. [Настройте Grafana](https://grafana.com/docs/grafana/latest/getting-started/getting-started/) и добавьте Prometheus в качестве источника данных.
4. [Импортируйте панели инструментов](https://grafana.com/docs/grafana/latest/dashboards/export-import/):
   - [Панель оператора](https://github.com/bloxapp/ssv/blob/main/monitoring/grafana/dashboard_ssv_operator.json)
   - [Панель валидатора](https://github.com/bloxapp/ssv/blob/main/monitoring/grafana/dashboard_ssv_validator.json)
5. Установите переменные панели инструментов:
   - `instance(target)` - имя контейнера, используемое в поле 'instance' для метрик, поступающих из Prometheus. В данном дашборде имена экземпляров: `example-node`, обязательно измените в соответствии с вашей настройкой в файле `dashboard_ssv_operator.json` или измените в [настройках панели](https://grafana.com/docs/grafana/latest/variables/variable-types/add-custom-variable/)
   - `validator_dashboard_id` - существует только в панели оператора, указывает на панель валидатора в наборе в `dashboard_ssv_operator.json` или изменяется в [настройках панели](https://grafana.com/docs/grafana/latest/variables/variable-types/add-constant-variable/)

Вот и все, ваша приборная панель Grafana должна быть готова к работе!

:::info

Нужна дополнительная помощь по мониторингу? Обращайтесь к другим операторам сети на нашем [канале Discord](https://discord.gg/kqWmdU8dQ2)

:::
