# Методы модуля валидатора
___
<h3><span class="ssv-text-bg">registerValidator</span></h3>
<span>Параметры вызова</span>

<div class="ssv-table-3col  ssv-table">
  <div class="ssv-cell ssv-text-bold">
    <span>Параметр</span>
  </div>
  <div class="ssv-cell ssv-text-bold">
     <span>Тип</span>
  </div>
  <div class="ssv-cell ssv-text-bold">
     <span>Описание</span>
  </div>

  <div class="ssv-cell">
     <span>publicKey</span>
  </div>
  <div class="ssv-cell">
    <span>bytes</span>
  </div>
  <div class="ssv-cell">
    <span>Открытый(публичный) ключ валидатора</span>
  </div>

  <div class="ssv-cell">
     <span>operatorIds</span>
  </div>
  <div class="ssv-cell">
    <span>unit256[]</span>
  </div>
  <div class="ssv-cell">
    <span>Список всех идентификаторов оператора.</span>
  </div>

  <div class="ssv-cell">
     <span>sharesPublicKeys</span>
  </div>
  <div class="ssv-cell">
    <span>bytes[]</span>
  </div>
  <div class="ssv-cell">
    <span>Список всех открытых ключей keyshares.</span>
  </div>

  <div class="ssv-cell">
     <span>sharesEncrypted</span>
  </div>
  <div class="ssv-cell">
    <span>bytes[]</span>
  </div>
  <div class="ssv-cell">
    <span>Список всех зашифрованных закрытых ключей keyshares.</span>
  </div>

  <div class="ssv-cell">
     <span>amount</span>
  </div>
  <div class="ssv-cell">
    <span>uint64</span>
  </div>
  <div class="ssv-cell">
    <span>Сумма токена SSV, подлежащая внесению в качестве платежа(не обязательно)</span>
  </div>
</div>
<br/>

<h3><span class="ssv-text-bg">updateValidator</span></h3>
<span>Параметры вызова</span>

<div class="ssv-table-3col  ssv-table">
  <div class="ssv-cell ssv-text-bold">
    <span>Параметр</span>
  </div>
  <div class="ssv-cell ssv-text-bold">
     <span>Тип</span>
  </div>
  <div class="ssv-cell ssv-text-bold">
     <span>Описание</span>
  </div>

  <div class="ssv-cell">
     <span>amount</span>
  </div>
  <div class="ssv-cell">
    <span>uint256</span>
  </div>
  <div class="ssv-cell">
    <span>Сумма токена SSV, подлежащая внесению в качестве платежа
(не обязательно)</span>
  </div>

  <div class="ssv-cell">
     <span>publicKey</span>
  </div>
  <div class="ssv-cell">
    <span>bytes</span>
  </div>
  <div class="ssv-cell">
    <span>Открытый ключ валидатора.</span>
  </div>

  <div class="ssv-cell">
     <span>operatorIds</span>
  </div>
  <div class="ssv-cell">
    <span>unit256[]</span>
  </div>
  <div class="ssv-cell">
    <span>Список всех идентификаторов оператора.</span>
  </div>

  <div class="ssv-cell">
     <span>sharesPublicKeys</span>
  </div>
  <div class="ssv-cell">
    <span>bytes[]</span>
  </div>
  <div class="ssv-cell">
    <span>Список всех открытых ключей keyshares.</span>
  </div>

  <div class="ssv-cell">
     <span>sharesEncrypted</span>
  </div>
  <div class="ssv-cell">
    <span>bytes[]</span>
  </div>
  <div class="ssv-cell">
    <span>Список всех зашифрованных закрытых ключей keyshares.</span>
  </div>
</div>
<br/>

<h3><span class="ssv-text-bg">removeValidator</span></h3>
<span>Параметры вызова</span>

<div class="ssv-table-3col  ssv-table">
  <div class="ssv-cell ssv-text-bold">
    <span>Параметр</span>
  </div>
  <div class="ssv-cell ssv-text-bold">
     <span>Тип</span>
  </div>
  <div class="ssv-cell ssv-text-bold">
     <span>Описание</span>
  </div>

  <div class="ssv-cell">
     <span>publicKey</span>
  </div>
  <div class="ssv-cell">
    <span>bytes</span>
  </div>
  <div class="ssv-cell">
    <span>Открытый ключ валидатора.</span>
  </div>
</div>
