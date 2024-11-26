$(document).ready(() => {
    $('.toggle').hide(0);
    $('#toggle').on('click', () => {
        $('.toggle').slideToggle(500);
    });
});