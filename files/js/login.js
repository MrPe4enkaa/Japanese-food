document.addEventListener('DOMContentLoaded', () => {
    let buttLog_in = document.getElementById('log_in');
    buttLog_in.addEventListener('click', Funct_auth);

    var buttOpen = document.getElementById('open');
    var headerRight = document.getElementById('head_right');

    let inpName = document.getElementById('name');
    let inpPhone = document.getElementById('phone');
    let inpAddress = document.getElementById('address');

    function Funct_auth() {
        let user_name, user_phone, user_address;

        user_name = inpName.value;
        user_phone = inpPhone.value;
        user_address = inpAddress.value;

        localStorage.setItem('user_name', user_name);
        localStorage.setItem('user_phone', user_phone);
        localStorage.setItem('user_address', user_address);

        let count = 1;
        localStorage.setItem('countOfWindow', count);

        window.Okno.close();

        location.reload();
    }

    let log_user_name = localStorage.getItem('user_name');
    let log_user_phone = localStorage.getItem('user_phone');
    let log_user_address = localStorage.getItem('user_address');

    let log_name = document.getElementById('user_name');
    let log_phone = document.getElementById('user_phone');
    let log_address = document.getElementById('user_address');

    let count = localStorage.getItem('countOfWindow');

    if (count == 0) {
        headerRight.removeChild(buttOpen);
        headerRight.innerHTML += '<button id="open" onclick="window.Okno.showModal()"><img src="files/images/Header/avatar.png" alt="bag_png"></button>';
    }
    else if (count == 1) {
        headerRight.removeChild(buttOpen);
        headerRight.innerHTML += '<button id="open" onclick="window.Login.showModal()"><img src="files/images/Header/avatar.png" alt="bag_png"></button>';

        log_name.value = log_user_name;
        log_phone.value = log_user_phone;
        log_address.value = log_user_address;
    }

    let unlogButt = document.getElementById('unlog');

    unlogButt.addEventListener('click', UnLog);

    function UnLog() {
        localStorage.removeItem('user_name');
        localStorage.removeItem('user_phone');
        localStorage.removeItem('user_address');

        count = 0;
        localStorage.setItem('countOfWindow', count);

        window.Login.close();

        location.reload();
    }

    let inputName = document.getElementById('name');

    inputName.addEventListener('keydown', function (e) {
        if (e.key.match(/[0-9]/)) return e.preventDefault();
    });
});