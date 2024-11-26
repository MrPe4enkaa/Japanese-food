$(document).ready(() => {
    $('.toggle').hide(0);
    $('#toggle').on('click', () => {
        $('.toggle').toggle(400);
    });
});