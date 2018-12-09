'use strict';

$('#calculate').click(function () {
    let averageDebt = 0;
    window.shipments.forEach(function (shipment) {
        let paymentsValueSumm = 0;
        window.payments.forEach(function (payment) {
            if(payment.specificationNumber == shipment.specificationNumber){
                paymentsValueSumm += payment.value;
            }
        });
        
        averageDebt += (shipment.specificationValue - paymentsValueSumm);
    });

    alert("Общий долг: " + averageDebt);
});