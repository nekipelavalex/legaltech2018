'use strict';
window.payments = [];

$().ready(function () {
    $.fn.datepicker.defaults.format = "dd/mm/yyyy";
    $('#specification-data').datepicker();
});

$('#payment-submit').click(function() {
    window.payments.push(collectPaymentData());
    $('#payment-modal').modal('hide');
    $("#payment-modal input").each(function(indx, element){
        $(element).val("");
      });
});

function collectPaymentData() {
    let payment = {};
    payment.specificationNumber = $('#specification-number').val();
    payment.data = $('#specification-data').val();
    payment.value = $('#specification-value').val();
    
    return payment;
}

