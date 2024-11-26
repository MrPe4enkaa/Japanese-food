document.addEventListener('DOMContentLoaded', () => {
    let count = 1;

    let button = document.getElementById('toggle');
    let list = document.querySelector('.toggle');
    $(list).hide(0);
    $(button).on('click', () => {
        if (gsap.isTweening(button)) return;
        $(list).slideToggle(400);
        count++;
        gsap.to(button, {
            rotation: '+=90',
            duration: 0.4,
        });
        if (count % 2 === 0) {
            gsap.fromTo(list, {
                y: -80,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                duration: 0.4

            });
        } else {
            gsap.to(list, {
                y: -40,
                opacity: 0,
                duration: 0.5,
            })
        }
    });
});