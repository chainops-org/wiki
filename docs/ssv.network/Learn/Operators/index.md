# Операторы

Операторы предоставляют аппаратную инфраструктуру, запускают протокол SSV и несут ответственность за поддержание общего
состояния ssv.network. Операторы сами определяют свои сборы и получают компенсацию за свои комплексные услуги для сети,
управляя и поддерживая валидаторы от имени стейкеров.

## Ввод оператора в эксплуатацию

Чтобы присоединиться к сети в качестве оператора, пользователь должен запустить узел SSV.

Это программное обеспечение, содержащее реализацию протокола SSV и интеграцию с интеллектуальными контрактами сети.

Это можно сделать, установив программное обеспечение узла на компьютер с последующей регистрацией оператора либо через
смарт-контракт, либо через интерфейс webapp.

### Плата оператору

Операторы устанавливают свои собственные сборы, выраженные в токенах SSV, которые взимаются с каждого валидатора,
который выбирает их в качестве одного из своих операторов.

Доходы оператора выплачиваются на баланс их счета и могут быть выведены на их кошелек в любое время.

### Конфигурация платы

Операторы изначально устанавливают свою плату при регистрации оператора в сети.

Сборы представлены в виде ежегодных платежей, но на практике выплачиваются операторам непрерывно в виде непрерывного
процесса - за каждый пройденный блок.

Это означает, что при настройке платы оператора через смарт-контракт (будь то при регистрации или обновлении платы)
операторы должны устанавливать предпочитаемую плату в соответствии с форматом платы за блок.

* Для расчета платы за блок в соответствии с желаемой годовой платой в фиатных валютах (USD):

:::info

$$
Fee\:per\:block = \frac{Annuel\:Fee_{usd}}{SSV_{usd}} / Blocks_{year}
$$

:::
* Где:
  * $$Annuel\:Fee_{usd}$$ - желаемая плата за год в долларах США
  * $$SSV_{usd}$$ - цена SSV в долларах США
  * $$Blocks_{year}$$ - среднее количество блоков за год ([смотри тут](https://ycharts.com/indicators/ethereum_blocks_per_day))