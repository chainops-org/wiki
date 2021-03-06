# Учетные записи

Учетная запись пользователя создается при регистрации оператора или валидатора в сети и является центральной точкой для
всех административных функций. Это означает, что адрес, инициировавший транзакцию, является владельцем учетной записи, и
все, что регистрируется с этого адреса, агрегируется в эту учетную запись.

## Баланс

Поскольку токен SSV служит платежным уровнем сети, денежный поток между стейкерами и операторами облегчается за счет
поддержания баланса SSV на счете.

Остаток на счете состоит из двух обязательных частей: ликвидационного обеспечения и операционной взлетно-посадочной
полосы:

![Alt text](/img/ssv/ssv_account_01.png)

### Ликвидационное обеспечение

Учетная запись должна содержать залоговое обеспечение, чтобы гарантировать, что у пользователей всегда будет достаточный
баланс для покрытия их операционных расходов (см. раздел ликвидация). Если остаток средств выводится и расходуется на
обеспечение счета, этот счет становится пригодным для ликвидации. Этот порог также может быть достигнут, когда
операционные расходы исчерпаны - из-за текущих платежей, производимых операторам, - и счет опускается ниже порогового
значения.

* Чтобы рассчитать, какой объем финансирования необходим в качестве обеспечения для каждого валидатора:

:::info

$$ 

Liquidatio\:Collateral = (O_{1_{fee}} + O_{2_{fee}} + O_{3_{fee}} + O_{4_{fee}} + N_{fee}) * LTP 

$$

:::

* Где:
    * $O_{1\dots4_{fee}}$ - комиссия оператора($SSV/блок)
    * $N_{fee}$ - комиссия сети($SSV/блок)
    * $LTP$ - пороговый период ликвидации (кол-во блоков)

### Рабочая взлетно-посадочная полоса

Операционная взлетно-посадочная полоса - это любые дополнительные средства, добавленные к балансу счета, которые
продлевают работу валидатора. Это означает, что все дополнительные средства, добавленные к балансу счета после
требуемого обеспечения, увеличат операционную полосу валидатора.

* Чтобы рассчитать, сколько средств необходимо для запуска каждого валидатора

:::info

$$ 

Liquidatio\:Collateral = (O_{1_{fee}} + O_{2_{fee}} + O_{3_{fee}} + O_{4_{fee}} + N_{fee}) * Period 

$$

:::

* Где:
    * $O_{1\dots4_{fee}}$ - комиссия оператора($SSV/блок)
    * $N_{fee}$ - комиссия сети($SSV/блок)
    * $Period$ - период эксплуатации (кол-во блоков)

:::caution Внимание

Пожалуйста, обратите внимание, что, поскольку сборы оператора и сети являются динамическими, требуемое ликвидационное
обеспечение и эксплуатационные расходы могут варьироваться в зависимости от динамики сети.

:::

Баланс счета необходимо контролировать, чтобы обеспечить непрерывную работу валидатора (ов) пользователя. Чтобы
управлять балансами, пользователи могут вносить или выводить средства по своему желанию.

### Депонирование

Депозиты могут быть внесены на счет, чтобы гарантировать, что пользователь избежит ликвидации и расширит свою
операционную полосу.

### Изъятие

Снятие средств позволяет пользователям удалять любой избыточный баланс, который у них есть, для повышения эффективности
использования капитала или получения прибыли (в случае, если они выступают в качестве оператора в сети). Ограничение,
однако, заключается в том, что пользователь не может отозвать свое ликвидационное обеспечение. Залог возвращается только
при выходе из сети (удалите валидатор). Это означает, что для поддержания работы валидатора пользователь может снимать
средства только в пределах своей взлетно-посадочной полосы.

* Чтобы рассчитать влияние депозитов и снятия средств на операционную эффективность вашего счета:

:::info

$$ 

  Ranway\:Change = \frac{Amount}{Burn\:Rate}

$$

:::

* Где:
  * $Amount$ - внесенная или снятая сумма($SSV)
  * $Burn\:Rate$ - скорость, с которой учетная запись тратит $SSV за блок(см <a href="http://localhost:3000/docs/ssv.network/protocol/tokenomic/liquidations">тут</a>)
