# Методы модуля оператора
___
<h3><span class="ssv-text-bg">registerOperator</span></h3>
<br/>
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
     <span>operatorName</span>
  </div>
  <div class="ssv-cell">
    <span>string</span>
  </div>
  <div class="ssv-cell">
    <span>Отображаемое имя оператора.</span>
  </div>

  <div class="ssv-cell">
     <span>publicKey</span>
  </div>
  <div class="ssv-cell">
    <span>bytes</span>
  </div>
  <div class="ssv-cell">
    <span>Открытый ключ оператора (генерируется как часть настройки ноды).</span>
  </div>

  <div class="ssv-cell">
     <span>operatorFee</span>
  </div>
  <div class="ssv-cell">
    <span>uint256</span>
  </div>
  <div class="ssv-cell">
    <span>Плата, взимаемая оператором (выраженная в токенах SSV за блок)</span>
  </div>
</div>

<br/>
<h3><span class="ssv-text-bg">registerOperator</span></h3>
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
     <span>operatorId</span>
  </div>
  <div class="ssv-cell">
    <span>uint256</span>
  </div>
  <div class="ssv-cell">
    <span>Id оператора</span>
  </div>
</div>

<br/>
<h3><span class="ssv-text-bg">getOperatorById</span></h3>
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
     <span>operatorId</span>
  </div>
  <div class="ssv-cell">
    <span>uint256</span>
  </div>
  <div class="ssv-cell">
    <span>Id оператора</span>
  </div>

  <div class="ssv-cell">
     <span>executionBeginTime</span>
  </div>
  <div class="ssv-cell">
    <span>uint256</span>
  </div>
  <div class="ssv-cell">
    <span>Отметка времени, когда оператор может выполнить заявленную плату</span>
  </div>

  <div class="ssv-cell">
     <span>executionExpirationTime</span>
  </div>
  <div class="ssv-cell">
    <span>uint256</span>
  </div>
  <div class="ssv-cell">
    <span>Отметка времени истечения срока действия объявленной комиссии</span>
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
     <span>ownerAddress</span>
  </div>
  <div class="ssv-cell">
    <span>address</span>
  </div>
  <div class="ssv-cell">
    <span>Адрес администратора оператора (для целей управления).</span>
  </div>

  <div class="ssv-cell">
     <span>id</span>
  </div>
  <div class="ssv-cell">
    <span>uint256</span>
  </div>
  <div class="ssv-cell">
    <span>Id оператора</span>
  </div>

  <div class="ssv-cell">
     <span>publicKey</span>
  </div>
  <div class="ssv-cell">
    <span>bytes</span>
  </div>
  <div class="ssv-cell">
    <span>Открытый(публичный) ключ оператора</span>
  </div>

  <div class="ssv-cell">
     <span>fee</span>
  </div>
  <div class="ssv-cell">
    <span>uint256</span>
  </div>
  <div class="ssv-cell">
    <span>Плата, взимаемая оператором (выраженная в токенах SSV за блок)</span>
  </div>  

<div class="ssv-cell">
     <span>validators</span>
  </div>
  <div class="ssv-cell">
    <span>uint256</span>
  </div>
  <div class="ssv-cell">
    <span>Количество управляемых валидаторов</span>
  </div>

<div class="ssv-cell">
     <span>active</span>
  </div>
  <div class="ssv-cell">
    <span>boolean</span>
  </div>
  <div class="ssv-cell">
    <span>Состояние сети оператора</span>
  </div>

<div class="ssv-cell">
     <span>score</span>
  </div>
  <div class="ssv-cell">
    <span>uint256</span>
  </div>
  <div class="ssv-cell">
    <span>Оценка оператора</span>
  </div>
</div>

<br/>
<h3><span class="ssv-text-bg">declareOperatorFee</span></h3>
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
     <span>operatorId</span>
  </div>
  <div class="ssv-cell">
    <span>uint256</span>
  </div>
  <div class="ssv-cell">
    <span>Id оператора</span>
  </div>

  <div class="ssv-cell">
     <span>operatorFee</span>
  </div>
  <div class="ssv-cell">
    <span>uint256</span>
  </div>
  <div class="ssv-cell">
    <span>Новая плата (выраженная в токенах SSV за блок).</span>
  </div>

</div>

<br/>
<h3><span class="ssv-text-bg">executeOperatorFee</span></h3>
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
     <span>operatorId</span>
  </div>
  <div class="ssv-cell">
    <span>uint256</span>
  </div>
  <div class="ssv-cell">
    <span>Id оператора</span>
  </div>
</div>

<br/>
<h3><span class="ssv-text-bg">cancelDeclaredOperatorFee</span></h3>
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
     <span>operatorId</span>
  </div>
  <div class="ssv-cell">
    <span>uint256</span>
  </div>
  <div class="ssv-cell">
    <span>Id оператора</span>
  </div>
</div>


<br/>
<h3><span class="ssv-text-bg">getOperatorDeclaredFee</span></h3>
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
     <span>operatorId</span>
  </div>
  <div class="ssv-cell">
    <span>uint256</span>
  </div>
  <div class="ssv-cell">
    <span>Id оператора</span>
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
     <span>declaredFee</span>
  </div>
  <div class="ssv-cell">
    <span>uint256</span>
  </div>
  <div class="ssv-cell">
    <span>Заявленная плата, взимаемая оператором (выраженная в токенах SSV за блок)</span>
  </div>
</div>

<br/>
<h3><span class="ssv-text-bg">getOperatorFee</span></h3>
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
     <span>operatorId</span>
  </div>
  <div class="ssv-cell">
    <span>uint256</span>
  </div>
  <div class="ssv-cell">
    <span>Id оператора</span>
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
     <span>declaredFee</span>
  </div>
  <div class="ssv-cell">
    <span>uint256</span>
  </div>
  <div class="ssv-cell">
    <span>Заявленная плата, взимаемая оператором (выраженная в токенах SSV за блок)</span>
  </div>
</div>

