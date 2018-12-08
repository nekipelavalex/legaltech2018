let payment = {};
$('#paymentSubmit').click(addPaymentData);
function addPaymentData() {
    payment.specificationNumver = $('#specification-number').attr('value');
    payment.data = $('#specification-data').attr('value');
    payment.value = $('#specification-value').attr('value');
    window.payments.push(payment);
}

