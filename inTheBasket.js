//получение количества продуктов 
let countProducts = localStorage.getItem('countProducts');

if(countProducts == null || countProducts == 'null' || countProducts < 0)
{
    countProducts = 0;
    localStorage.setItem('countProducts', countProducts);
}

if(countProducts >= 1)
{
    //создание кнопок очистки корзины и оформление
    let block_products = document.getElementById('products_in_bag');

    let divBasc = document.getElementById('basc');
    let divNone = document.getElementById('destroy');

    divBasc.removeChild(divNone);

    let basket = document.getElementById('basket');

    let total_price_div = document.createElement('div');
    let butt_div = document.createElement('div');
    let total_price_text = document.createElement('p');
        
    total_price_div.className = 'total_div';
    total_price_text.className = 'total_p';
        
    total_price_div.appendChild(total_price_text);
    total_price_div.appendChild(butt_div);
    basket.appendChild(total_price_div);

    total_price_text.innerHTML = 'Итого: ';
    butt_div.innerHTML += '<input type="button" value="Очистить корзину" class="buttClear" id="ClearButt">';
    butt_div.innerHTML += '<input type="button" value="Оформить заказ" class="buttTotal" id="TotalButt">';

    let MaxTovar = Number;
    MaxTovar = 20;
    
    let summa = 0;

    for(let i = 0; i <= 30; i++)
    {
        //получение товара из localStorage
        let product = localStorage.getItem('product' + i.toString());
        
        if(product)
        {   
            //добавление карточки товара в корзину
            let count = localStorage.getItem('countPrice' + i.toString());
            let prices = localStorage.getItem('priceProduct' + i.toString());

            if(count == null || count == 0 || count == 'null')
            {
                count = 1;
                localStorage.setItem('countPrice' + i.toString(), count);
            }
            if(prices == null || prices == 0 || prices == 'null' || prices == 1)
            {
                prices = (all_products[i].price * count).toFixed(1);
                localStorage.setItem('priceProduct' + i.toString(), prices);
            }

            new_card = document.createElement('div');
            new_card.classList.add('cards');

            new_card.innerHTML += '<img src ="' + all_products[i].image + '"' + ' ' + 'class="' + all_products[i].classImg + '"' + '>';
            new_card.innerHTML += '<p>' + all_products[i].name + '</p>';

            div = document.createElement('div');

            divLeft = document.createElement('div');
            divLeft.classList.add('left');
            divRight = document.createElement('div');
            divRight.classList.add('right');
    
            divLeft.innerHTML += '<p id="price' + i.toString() + '">' + prices + 'p' + '</p>';

            divRight.innerHTML += '<input type="button" value="-" class="butt" id="' + 'buttonMinus' + i.toString() + '">';
            divRight.innerHTML += '<p class ="count" id="' + 'count' + i.toString() + '">' + count.toString() +'</p>';
            divRight.innerHTML += '<input type="button" value="+" class="butt" id="' + 'buttonPlus' + i.toString() + '">';

            div.appendChild(divLeft);
            div.appendChild(divRight);
    
            new_card.appendChild(div);
    
            block_products.appendChild(new_card);

            summa = summa + (+all_products[i].price) * (+count);

            //кнопки + и -
            let idMinus = 'buttonMinus' + i.toString();
            let idPlus = 'buttonPlus' + i.toString();
            let idCount = 'count' + i.toString();
            let idPrice = 'price' + i.toString();
    
            let buttonM = document.getElementById(idMinus);
            let buttonP = document.getElementById(idPlus);
            let countText = document.getElementById(idCount);
            let textPrice = document.getElementById(idPrice);

            total_price_text.innerHTML = 'Итого: ' + summa.toFixed(1) + 'p';

            buttonM.addEventListener('click', minusProduct);
            buttonP.addEventListener('click', plusProduct);

            function minusProduct()
            {
                count--;
                countText.innerHTML = count;
                prices = ((+all_products[i].price) * (+count)).toFixed(1);
                textPrice.innerHTML = prices + 'p';

                summa = summa - (+all_products[i].price);
                total_price_text.innerHTML = 'Итого: ' + summa.toFixed(1) + 'p';
                total_p_in_dialog.innerHTML = 'Итоговая цена: ' + summa.toFixed(1);

                localStorage.setItem('countPrice' + i.toString(), count);
                localStorage.setItem('priceProduct' + i.toString(), prices);

                if(count <= 0)
                {
                    countProducts--;
                    localStorage.setItem('countProducts', countProducts);

                    localStorage.removeItem('product' + i.toString());
                    localStorage.removeItem('countPrice' + i.toString());
                    localStorage.removeItem('priceProduct' + i.toString());
                    localStorage.removeItem('Total');
                    
                    location.reload();
                }
            }
            

            function plusProduct()
            {
                if(count < MaxTovar)
                {
                    count++;
                    countText.innerHTML = count;
                    prices = ((+all_products[i].price) * (+count)).toFixed(1);
                    textPrice.innerHTML = prices + 'p';

                    summa = summa + (+all_products[i].price);
                    total_price_text.innerHTML = 'Итого: ' + summa.toFixed(1) + 'p';
                    total_p_in_dialog.innerHTML = 'Итоговая цена: ' + summa.toFixed(1);

                    localStorage.setItem('countPrice' + i.toString(), count);
                    localStorage.setItem('priceProduct' + i.toString(), prices);
                }
            }

            //кнопка очистки корзины
            let button_Clear = document.getElementById('ClearButt');

            button_Clear.addEventListener('click', ClearBasket);

            function ClearBasket()
            {
                localStorage.removeItem('product' + i.toString());
                localStorage.removeItem('countPrice' + i.toString());
                localStorage.removeItem('priceProduct' + i.toString());
                localStorage.removeItem('Total');
    
                countProducts = 0;
                localStorage.setItem('countProducts', countProducts);
                location.reload();
            }

            //диалог с итоговой ценой
            let name_user = localStorage.getItem('user_name');
            let phone_user = localStorage.getItem('user_phone');
            let address_user = localStorage.getItem('user_address');

            if (name_user == null || name_user <= 0 || name_user == 'null'){
                name_user = 0;
            }
            if (phone_user == null || phone_user <= 0 || phone_user == 'null'){
                phone_user = 0;
            }
            if (address_user == null || address_user <= 0 || address_user == 'null'){
                address_user = 0;
            }

            let button_Total = document.getElementById('TotalButt');
            let total_p_in_dialog = document.getElementById('totals');
            total_p_in_dialog.innerHTML = 'Итоговая цена: ' + summa.toFixed(1);

            button_Total.addEventListener('click', Total);

            function Total()
            {
                if(name_user == 0 || phone_user == 0 || address_user == 0)
                {
                    window.notLogin.showModal()
                }
                else{
                    window.LoginTrue.showModal()
                }
            }

            //диалог с номером заказа
            let button_oformlen = document.getElementById('Oformit');
            let random_p = document.getElementById('random');
            let random_number = Math.random() * (999 - 100) + 100;

            button_oformlen.addEventListener('click', Oformlen);

            function Oformlen()
            {
                window.LoginTrue.close();
                random_p.innerHTML = 'Номер вашего заказа: ' + random_number.toFixed(0);

                window.ZakazOformlen.showModal()
            }
            
            //кнопка для выхода из диалога оформления
            let button_exit_oformlen = document.getElementById('exitButton');

            button_exit_oformlen.addEventListener('click', Ogidanie);

            function Ogidanie()
            {
                localStorage.removeItem('product' + i.toString());
                localStorage.removeItem('countPrice' + i.toString());
                localStorage.removeItem('priceProduct' + i.toString());
    
                countProducts = 0;
                localStorage.setItem('countProducts', countProducts);
                location.reload();
            }
        }
    }
}