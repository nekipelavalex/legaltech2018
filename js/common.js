'use strict';

$().ready(function () {
    $.fn.datepicker.defaults.format = "dd/mm/yyyy";
    $('.datepicker').datepicker({
        language: 'ru'
    });
});

$('.modal').on('hidden.bs.modal', function () {
    cleanModalData(this.id);
})

function closeModal(modalId){
    $('#' + modalId).modal('hide');
}

function cleanModalData(modalId){
    $('#' + modalId + ' ' + 'input').each(function (indx, element) {
        $(element).val("");
    });
}