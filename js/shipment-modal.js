'use strict';
window.shipments = [];

$().ready(function () {
    $.fn.datepicker.defaults.format = "dd/mm/yyyy";
    $('#shipmend-date').datepicker();
});

$('#shipmend-submit').click(function () {
    console.log('1');
    window.shipments.push(collectShipmentData());
    $('#shipmend-modal').modal('hide');
    $("#shipmend-modal input").each(function (indx, element) {
        $(element).val("");
    });
});

function collectShipmentData() {
    let shipment = {};
    shipment.specificationNumber2 = $('#specification-number2').val();
    shipment.shipmendDate = $('#shipmend-date').val();
    shipment.stitch = $('#stitch').val();
    shipment.refinancingRate = $('#refinancing-rate').val();
    shipment.daysCount = $('#days-count').val();
    shipment.penalty = $('#penalty').val();

    return shipment;
}