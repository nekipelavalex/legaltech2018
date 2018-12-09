'use strict';

$('#calculate').click(function () {
    let averageDebt = 0;
    let shipmentsValueSumm = 0;
    let paymentsValueSumm = 0;
    let specificationsNumber = [];

    window.shipments.forEach(function (shipment) {
        shipmentsValueSumm += shipment.specificationValue;
        specificationsNumber.push(shipment.specificationNumber);
    });

    window.payments.forEach(function (payment) {
        if(specificationsNumber.includes(payment.specificationNumber)){
            paymentsValueSumm += payment.value;
        }
    });

    averageDebt =  shipmentsValueSumm - paymentsValueSumm;

    alert("Сумма основного долга: " + averageDebt);
});