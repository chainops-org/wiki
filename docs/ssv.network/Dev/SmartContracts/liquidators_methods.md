# Методы модуля ликвидации
___
<h3><span class="ssv-text-bg">getAddressBurnRate</span></h3>
<span>Параметры вызова</span>

<div class="ssv-table-3col">
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
     <span>ownerAddress</span>
  </div>
  <div class="ssv-cell">
    <span>address</span>
  </div>
  <div class="ssv-cell">
    <span>Адрес пользователя</span>
  </div>
</div>
<br/>
<span>Возвращаемые значения</span>

<div class="ssv-table-3col">
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
     <span>burnRate</span>
  </div>
  <div class="ssv-cell">
    <span>uint256</span>
  </div>
  <div class="ssv-cell">
    <span>Ставка за блок, в котором учетная запись тратит SSV.</span>
  </div>
</div>

<h3><span class="ssv-text-bg">isLiquidatable</span></h3>
<span>Параметры вызова</span>

<div class="ssv-table-3col">
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
     <span>ownerAddress</span>
  </div>
  <div class="ssv-cell">
    <span>address</span>
  </div>
  <div class="ssv-cell">
    <span>Адрес пользователя</span>
  </div>
</div>
<br/>
<span>Возвращаемые значения</span>

<div class="ssv-table-3col">
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
     <span>isLiquidatable</span>
  </div>
  <div class="ssv-cell">
    <span>boolean</span>
  </div>
  <div class="ssv-cell">
    <span>Указание на то, может ли учетная запись быть ликвидирована</span>
  </div>
</div>

<h3><span class="ssv-text-bg">liquidate</span></h3>
<span>Параметры вызова</span>

<div class="ssv-table-3col">
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
     <span>ownerAddress[]</span>
  </div>
  <div class="ssv-cell">
    <span>addresses[]</span>
  </div>
  <div class="ssv-cell">
    <span>Массив пользовательских адресов</span>
  </div>
</div>

<h3><span class="ssv-text-bg">isLiquidated</span></h3>
<span>Параметры вызова</span>

<div class="ssv-table-3col">
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
     <span>ownerAddress</span>
  </div>
  <div class="ssv-cell">
    <span>address</span>
  </div>
  <div class="ssv-cell">
    <span>Адрес пользователя</span>
  </div>
</div>
<br/>
<span>Возвращаемые значения</span>

<div class="ssv-table-3col">
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
     <span>isLiquidated</span>
  </div>
  <div class="ssv-cell">
    <span>boolean</span>
  </div>
  <div class="ssv-cell">
    <span>Указание на то, что учетная запись ликвидирована</span>
  </div>
</div>
