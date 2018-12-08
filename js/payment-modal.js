'use strict';
window.payments = [];

$('#paymentSubmit').click(function() {
    console.log('1');
    window.payments.push(collectPaymentData());
    $('#paymentModal').modal('hide');
    $("#paymentModal input").each(function(indx, element){
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

