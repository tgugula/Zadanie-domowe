window.onload = function () {
    let totalPrice = 0.00;

    updateSum(totalPrice);

    let buttons = document.getElementsByClassName('add-to-basket');
    for (let button of buttons) {
        button.addEventListener('click', function (e) {
            addToCard(e.target.parentElement);
        });
    }

    document.getElementById('basket').addEventListener('click', function (e) {
        if (e.target.classList.contains('remove-product')) {
            removeElement(e.target);
        }
    });

    document.getElementById('basket').addEventListener('click', function (e) {
        if (e.target.classList.contains('remove-all-products')) {
            removeAllElements(e.target);
        }
    });

    function addToCard(parentOfProduct) {
        let productToAdd = document.createElement('div');
        productToAdd.classList.add('card-product');
        let productNameToAdd = document.createElement('p');
        let productPriceToAdd = document.createElement('p');
        productPriceToAdd.classList.add('card-product-price');
        let productRemoveButtonToAdd = document.createElement('button');
        productRemoveButtonToAdd.textContent = 'usuń';
        productRemoveButtonToAdd.classList.add('remove-product');


        let nameOfProduct = parentOfProduct.firstElementChild;
        let priceOfProduct = nameOfProduct.nextElementSibling;

        productNameToAdd.textContent = nameOfProduct.textContent;
        productPriceToAdd.textContent = priceOfProduct.textContent;

        productToAdd.appendChild(productNameToAdd);
        productToAdd.appendChild(productPriceToAdd);
        productToAdd.appendChild(productRemoveButtonToAdd);
        document.getElementById('basket').appendChild(productToAdd);
        totalPrice += parseFloat(priceOfProduct.textContent);
        updateSum(totalPrice)
    }


    function updateSum(value) {
        document.getElementById('total-sum').textContent = value.toFixed(2);
    }

    function removeElement(clickedElement) {
        let elementToRemove = clickedElement.parentElement;
        document.getElementById('basket').removeChild(elementToRemove);
        totalPrice -= parseFloat(clickedElement.previousElementSibling.textContent);
        updateSum(totalPrice);
    };
    
    document.getElementById('basket').addEventListener('click', function (e) {
    if (e.target.classList.contains('buy')) {
        popup(e.target);
    }
});
function popup() {
    if (window.confirm('Czy chcesz nabyć zawartość koszyka?')) {
        window.open ("index.html")
    }

};
}
