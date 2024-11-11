for (let i = 1; i <= 30; i++){
    //кнопки для отправки в корзину и из корзины
    let product = localStorage.getItem('product' + i.toString());
    let idButton = 'button' + i.toString();
    let button = document.getElementById(idButton);
    let countProducts = localStorage.getItem('countProducts');

    if(countProducts == null || countProducts == 'null' || countProducts < 0)
    {
        countProducts = 0;
        localStorage.setItem('countProducts', countProducts);
    }

    if(!product)
    {
        button.addEventListener('click', ToBasket);
    
        function ToBasket()
        {
            button.value = 'В корзине';
            button.className = 'butt1';
            countProducts++;
            localStorage.setItem('countProducts', countProducts);
            localStorage.setItem('product' + i.toString(), all_products[i]);
            location.reload();
        }
    }
    else if(product)
    {
        button.value = 'В корзине';
        button.className = 'butt1';

        button.addEventListener('click', DelFromBasket);

        function DelFromBasket()
        {
            button.value = 'В корзину';
            button.className = 'butt';
            countProducts--;
            localStorage.setItem('countProducts', countProducts);
            localStorage.removeItem('product' + i.toString());
            localStorage.removeItem('countPrice' + i.toString());
            localStorage.removeItem('priceProduct' + i.toString());
            location.reload();
        }
    }
}
for (let i = 1; i <= 24; i++){
    //Информация о продукте
    let button_info = document.getElementById('info' + i.toString());
    let descriptionProduct = document.getElementById('description');
    let nameProduct = document.getElementById('nameProduct');
    let divImg = document.getElementById('divImg');
        
    button_info.addEventListener('click', info_Product);
        
    function info_Product()
    {
        nameProduct.innerHTML = all_products[i].name;
        descriptionProduct.innerHTML = 'Состав: ' + all_products[i].description;
        divImg.innerHTML = '<img src="' + all_products[i].image + '" class="' + all_products[i].classImg + '">'
    }
}