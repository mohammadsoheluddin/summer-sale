document.addEventListener('DOMContentLoaded', function () {
    const closeModalBtn = document.getElementById('go-home');

    closeModalBtn.addEventListener('click', function () {
        window.location.reload(); // Refresh the page
    });
});

function getPrice(priceID) {
    const priceField = document.getElementById(priceID);
    const price = parseFloat(priceField.innerText);
    return price;
}

function productPriceCalculation(productId){
    const productPrice = getPrice(productId);
    const productOldTotalPrice = getPrice('total-price');
    const productNewTotalPrice = productPrice + productOldTotalPrice;
    document.getElementById('total-price').innerText = productNewTotalPrice.toFixed(2);
    document.getElementById('total').innerText = productNewTotalPrice.toFixed(2);

    const confirmBtn = document.getElementById('confirm');
    if(productNewTotalPrice > 0){
        confirmBtn.disabled = false;
    } else{
        confirmBtn.disabled = true;
    }

    const applyButton = document.getElementById('btn-apply');
    const couponCode = document.getElementById('coupon-code');

    if (productNewTotalPrice >= 200) {
        applyButton.disabled = false;
        applyButton.addEventListener('click', function () {
            if (couponCode.value === 'SELL200') {
                const discount = productNewTotalPrice * 0.2;
                const grandTotal = productNewTotalPrice - discount;
                document.getElementById('discount').innerText = discount.toFixed(2);
                document.getElementById('total').innerText = grandTotal.toFixed(2);
            }
        });
    } else {
        applyButton.disabled = true;
    }
}

document.getElementById('btn-add-1').addEventListener('click', function () {
    productPriceCalculation('product-card-1')
});

document.getElementById('btn-add-2').addEventListener('click', function () {
    productPriceCalculation('product-card-2')
});

document.getElementById('btn-add-3').addEventListener('click', function () {
    productPriceCalculation('product-card-3')
});

document.getElementById('btn-add-4').addEventListener('click', function () {
    productPriceCalculation('product-card-4')
});

document.getElementById('btn-add-5').addEventListener('click', function () {
    productPriceCalculation('product-card-5')
});

document.getElementById('btn-add-6').addEventListener('click', function () {
    productPriceCalculation('product-card-6')
});

document.getElementById('btn-add-7').addEventListener('click', function () {
    productPriceCalculation('product-card-7')
});

document.getElementById('btn-add-8').addEventListener('click', function () {
    productPriceCalculation('product-card-8')
});

document.getElementById('btn-add-9').addEventListener('click', function () {
    productPriceCalculation('product-card-9')
});
























