# Методы модуля голосования
___
<h3><span class="ssv-text-bg">updateNetworkFee</span></h3>
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
     <span>networkFee</span>
  </div>
  <div class="ssv-cell">
    <span>uint256</span>
  </div>
  <div class="ssv-cell">
    <span>
        Плата, взимаемая сетью за каждого валидатора (выраженная в токенах SSV за блок).
    </span>
  </div>
</div>
<br/>
<h3><span class="ssv-text-bg">getNetworkFee</span></h3>
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
     <span>fee</span>
  </div>
  <div class="ssv-cell">
    <span>uint256</span>
  </div>
  <div class="ssv-cell">
    <span>
        Плата, взимаемая сетью (выраженная в токенах SSV за блок)
    </span>
  </div>
</div>
<br/>
<h3><span class="ssv-text-bg">withdrawNetworkEarnings</span></h3>
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
    <span>
        Сумма, подлежащая снятию
    </span>
  </div>
</div>

<br/>
<h3><span class="ssv-text-bg">getNetworkEarnings</span></h3>
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
    <span>
        Сумма, накопленных в казне сети
    </span>
  </div>
</div>

<br/>
<h3><span class="ssv-text-bg">updateLiquidationThresholdPeriod</span></h3>
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
     <span>blocks</span>
  </div>
  <div class="ssv-cell">
    <span>uint256</span>
  </div>
  <div class="ssv-cell">
    <span>
        Продолжительность в блоках, чтобы иметь достаточный баланс
    </span>
  </div>
</div>

<br/>
<h3><span class="ssv-text-bg">getLiquidationThresholdPeriod</span></h3>
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
     <span>blocks</span>
  </div>
  <div class="ssv-cell">
    <span>uint256</span>
  </div>
  <div class="ssv-cell">
    <span>
        Минимальная продолжительность (блоки), при которой пользователь должен иметь достаточный баланс (ликвидационное обеспечение), чтобы не быть ликвидированным.
    </span>
  </div>
</div>

<br/>
<h3><span class="ssv-text-bg">updateOperatorFeeIncreaseLimit</span></h3>
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
     <span>percentage</span>
  </div>
  <div class="ssv-cell">
    <span>uint256</span>
  </div>
  <div class="ssv-cell">
    <span>
        Максимальный процент увеличения
    </span>
  </div>
</div>

<br/>
<h3><span class="ssv-text-bg">getOperatorFeeIncreaseLimit</span></h3>
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
    <span>
        Максимальное увеличение в процентах, на которое оператор может обновить свою комиссию.
    </span>
  </div>
</div>

<br/>
<h3><span class="ssv-text-bg">updateDeclareOperatorFeePeriod</span></h3>
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
     <span>seconds</span>
  </div>
  <div class="ssv-cell">
    <span>uint256</span>
  </div>
  <div class="ssv-cell">
    <span>
       Период в секундах, пока вы не сможете собрать комиссию после его установки
    </span>
  </div>
</div>

<br/>
<h3><span class="ssv-text-bg">getDeclareOperatorFeePeriod</span></h3>
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
     <span>seconds</span>
  </div>
  <div class="ssv-cell">
    <span>uint256</span>
  </div>
  <div class="ssv-cell">
    <span>
       Продолжительность (секунды), пока оператор не сможет выполнить сбор комиссии после его изменения.
    </span>
  </div>
</div>

<br/>
<h3><span class="ssv-text-bg">updateExecuteOperatorFeePeriod</span></h3>
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
     <span>seconds</span>
  </div>
  <div class="ssv-cell">
    <span>uint256</span>
  </div>
  <div class="ssv-cell">
    <span>
       Период в секундах, в течение которого вы можете собрать плату за выполнение, пока она не истечет
    </span>
  </div>
</div>

<br/>
<h3><span class="ssv-text-bg">getExecuteOperatorFeePeriod</span></h3>
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
     <span>seconds</span>
  </div>
  <div class="ssv-cell">
    <span>uint256</span>
  </div>
  <div class="ssv-cell">
    <span>
       Продолжительность (секунды), в течение которой оператор может выполнить объявленную плату, пока она не истечет
    </span>
  </div>
</div>

<br/>
<h3><span class="ssv-text-bg">updateOperatorScore</span></h3>
<span>Параметры вызова</span>

<div class="ssv-table-3col ssv-table">
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
    <span>
       Id оператора
    </span>
  </div>

  <div class="ssv-cell">
     <span>operatorScore</span>
  </div>
  <div class="ssv-cell">
    <span>uint256</span>
  </div>
  <div class="ssv-cell">
    <span>
       Рейтинг оператора
    </span>
  </div>
</div>
