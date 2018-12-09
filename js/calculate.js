'use strict';

$('#calculate').click(function () {
    let averageDebt = calculateAverageDebt();
    let overalPercent = calculatePercent();
    let overalPenalty = calculatePenalty();

    alert(  'Сумма основного долга: ' + averageDebt.toFixed(4) + '\r\n' +
            'Пеня за просрочку: ' + overalPenalty.toFixed(4) + '\r\n' +
            'Процент за пользование чужими ден. ср.: ' + overalPercent.toFixed(4)
        );
});

function calculateAverageDebt(){
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

    return  shipmentsValueSumm - paymentsValueSumm;
}

function calculatePercent(){
    let overalPercent = 0;
    window.shipments.forEach(function (shipment) {
        let shipmentOveralPercent = 0;
        let coefRefinance = (shipment.refinancingRate/100) / shipment.daysCount;

        window.payments.forEach(function (payment) {
            if(payment.specificationNumber == shipment.specificationNumber){
                var pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
                var paymentDate = new Date(payment.date.replace(pattern,'$3-$2-$1'));
                let shipmendDate = new Date(shipment.shipmendDate.replace(pattern,'$3-$2-$1'));
                let daysDifference = Math.floor((paymentDate - shipmendDate) / (1000*60*60*24));
                let days = daysDifference - shipment.stitch;

                shipmentOveralPercent += (payment.value * coefRefinance * days)
            }
        });

        overalPercent += shipmentOveralPercent;
    });

    return overalPercent;
}

function calculatePenalty(){
    let overalPenalty = 0;
    window.shipments.forEach(function (shipment) {
        let shipmentOveralPenalty = 0;
        let penaltyPercent = (shipment.penalty/100);

        window.payments.forEach(function (payment) {
            if(payment.specificationNumber == shipment.specificationNumber){
                var pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
                var paymentDate = new Date(payment.date.replace(pattern,'$3-$2-$1'));
                let shipmendDate = new Date(shipment.shipmendDate.replace(pattern,'$3-$2-$1'));
                let daysDifference = Math.floor((paymentDate - shipmendDate) / (1000*60*60*24));
                let days = daysDifference - shipment.stitch;

                shipmentOveralPenalty += (payment.value * penaltyPercent * days)
            }
        });

        overalPenalty += shipmentOveralPenalty;
    });

    return overalPenalty;
}