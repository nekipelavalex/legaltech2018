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
    payment.data = $('#payment_data').val();
    payment.value = parseInt($('#payment_value').val());

    window.payments.push(payment);
}

function updatePaymentCountLabel(){
    $('#payment_count').text('(' + window.payments.length + ')');
}