$().ready(function () {
    $.fn.datepicker.defaults.format = "mm/dd/yyyy";
    $('#shipmendDate').datepicker({
        startDate: '-3d'
    });
});