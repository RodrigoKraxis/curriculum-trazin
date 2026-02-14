$(document).ready(function () {
    var grid = new Muuri('.grid', { dragEnabled: true }); //Muuri

    $('#btn').on('click', function () {

        $('body').toggleClass('modo-stasis');

        if ($('body').hasClass('modo-stasis')) {
            $(this).text('Desactivar Stasis');
            $(this).removeClass('btn-info').addClass('btn-outline-light');
            $('#info').removeClass('d-none');
            $('.grid').addClass('block');
        } else {
            $(this).text('Activar Stasis');
            $(this).removeClass('btn-outline-light').addClass('btn-info');
            $('#info').addClass('d-none');
            $('.grid').removeClass('block');
        }
        grid.refreshItems().layout();
    });
});
