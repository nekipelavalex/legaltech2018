'use strict';

window.payments = [];

$('#payment_submit').click(function () {
    if(!$(this).closest('form').valid()){
        return false;
    }

    addPayment();
    updatePaymentCountLabel();
    closeModal('payment_modal');
});

function addPayment() {
    let payment = {};

    payment.specificationNumber = $('#specification_number').val();
    payment.date = $('#payment_date').val();
    payment.value = parseFloat($('#payment_value').val());

    window.payments.push(payment);
}

function updatePaymentCountLabel(){
    $('#payments_count').text('(' + window.payments.length + ')');
}

$('#payment_modal').on('shown.bs.modal', function () {
    $('#specification_number').val('11-1');
    $('#payment_date').val('30.12.2018');
    $('#payment_value').val('30');
})