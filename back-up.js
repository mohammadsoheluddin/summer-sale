function getPrice(priceID) {
    const priceField = document.getElementById(priceID);
    const price = parseFloat(priceField.innerText);
    return price;
}

// Kitchen Accessories-1
document.getElementById('btn-add-1').addEventListener('click', function () {
    const kAccPrice = getPrice('k-accessories-1-price');
    const oldTotalPrice = getPrice('total-price');
    const newTotalPrice = parseFloat(kAccPrice + oldTotalPrice);
    document.getElementById('total-price').innerText = newTotalPrice.toFixed(2);

    if (newTotalPrice >= 200) {
        document.getElementById('btn-apply').disabled = false;
        const couponCode = document.getElementById('coupon-code');
        if (couponCode === 'SELL20') {
            const discount = newTotalPrice * 0.2;
            document.getElementById('discount').innerText = discount.toFixed(2);

            const grandTotal = newTotalPrice - discount;
            document.getElementById('total').innerText = grandTotal.toFixed(2);
        } 
        // else {
        //     document.getElementById('discount').innerText = discount.toFixed(2);
        //     document.getElementById('total').innerText = newTotalPrice.toFixed(2);
        // }
    } else {
        document.getElementById('btn-apply').disabled = true;
        // document.getElementById('discount').innerText = discount;
        document.getElementById('total').innerText = newTotalPrice.toFixed(2);
    }

    // const couponCode = document.getElementById('coupon-code');
    // if (couponCode === 'SELL20') {
    //     const discount = newTotalPrice * 0.2;
    //     document.getElementById('discount').innerText = discount.toFixed(2);

    //     const grandTotal = newTotalPrice - discount;
    //     document.getElementById('total').innerText = grandTotal.toFixed(2);
    // } else {
    //     document.getElementById('discount').innerText = discount.toFixed(2);
    //     document.getElementById('total').innerText = newTotalPrice.toFixed(2);
    // }

})



