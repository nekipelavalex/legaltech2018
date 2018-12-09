'use strict';

window.shipments = [];

$('#shipment_submit').click(function () {
    if(!$(this).closest('form').valid()){
        return false;
    }

    addShipment();
    updateShipmentsCountLabel();
    closeModal('shipment_modal');
});

function addShipment() {
    let shipment = {};

    shipment.specificationNumber = $('#specification_number2').val();
    shipment.shipmendDate = $('#shipment_date').val();
    shipment.stitch = parseInt($('#stitch').val());
    shipment.refinancingRate = parseFloat($('#refinancing_rate').val());
    shipment.daysCount = parseInt($('#days_count').val());
    shipment.penalty = parseFloat($('#penalty').val());
    shipment.specificationValue = parseFloat($('#specification_value').val());

    window.shipments.push(shipment);
}

function updateShipmentsCountLabel(){
    $('#shipments_count').text('(' + window.shipments.length + ')');
}

$('#shipment_modal').on('shown.bs.modal', function () {
    $('#specification_number2').val('11-1');
    $('#shipment_date').val('30.10.2018');
    $('#specification_value').val('100');
    $('#stitch').val('15');
    $('#refinancing_rate').val('10');
    $('#penalty').val('0.1');
})