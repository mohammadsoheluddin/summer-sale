function getPrice(priceID) {
    const priceField = document.getElementById(priceID);
    const price = parseFloat(priceField.innerText);
    return price;
}

document.getElementById('btn-add-1').addEventListener('click', function () {
    const kAccPrice = getPrice('k-accessories-1-price');
    const oldTotalPrice = getPrice('total-price');
    const newTotalPrice = kAccPrice + oldTotalPrice;
    document.getElementById('total-price').innerText = newTotalPrice.toFixed(2);
    document.getElementById('total').innerText = newTotalPrice.toFixed(2);

    const confirmBtn = document.getElementById('confirm');
    if(newTotalPrice > 0){
        confirmBtn.disabled = false;
    } else{
        confirmBtn.disabled = true;
    }

    const applyButton = document.getElementById('btn-apply');
    const couponCode = document.getElementById('coupon-code');

    if (newTotalPrice >= 200) {
        applyButton.disabled = false;
        applyButton.addEventListener('click', function () {
            if (couponCode.value === 'SELL200') {
                const discount = newTotalPrice * 0.2;
                const grandTotal = newTotalPrice - discount;
                document.getElementById('discount').innerText = discount.toFixed(2);
                document.getElementById('total').innerText = grandTotal.toFixed(2);
            }
        });
    } else {
        applyButton.disabled = true;
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const closeModalBtn = document.getElementById('go-home');

    closeModalBtn.addEventListener('click', function () {
        window.location.reload(); // Refresh the page
    });
});



