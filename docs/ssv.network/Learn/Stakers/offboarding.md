# Удаление валидатора

Валидаторы могут покинуть сеть в любое время, независимо от того, запускать ли ее самостоятельно или переносить в другую службу. 

Выбор удаления средства проверки приведет к:

* Удалите все записи их ключей валидатора из ssv.network.

* Остановите работу валидатора пользователя, что приведет к инактивации и может привести к штрафам в цепочке маяков, поскольку она больше не поддерживается сетью.


Если учетная запись имеет несколько валидаторов, ликвидационное обеспечение для удаленного валидатора будет добавлено к их операционному балансу и может быть снято с баланса учетной записи.

:::info

Чтобы избежать сокращения, рекомендуется подождать не менее 2 эпох, прежде чем запускать удаленного валидатора на альтернативной службе.

:::