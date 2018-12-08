'use strict';
window.payments = [];
console.log('1g');
$('#paymentSubmit').click(function() {
    console.log('1');
    window.payments.push(collectPaymentData());
    console.log(window.payments);
});

function collectPaymentData() {
    let payment = {};
    payment.specificationNumber = $('#specification-number').val();
    payment.data = $('#specification-data').val();
    payment.value = $('#specification-value').val();
    
    return payment;
}

