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
    shipment.refinancingRate = $('#refinancing_rate').val();
    shipment.daysCount = parseInt($('#days_count').val());
    shipment.penalty = parseInt($('#penalty').val());
    shipment.specificationValue = parseInt($('#specification_value').val());

    window.shipments.push(shipment);
}

function updateShipmentsCountLabel(){
    $('#shipments_count').text('(' + window.shipments.length + ')');
}