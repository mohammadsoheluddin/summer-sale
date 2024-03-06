function getPrice(priceID){
    const priceField = document.getElementById(priceID);
    const price = parseFloat(priceField.innerText);
    return price;
}


document.getElementById('btn-add').addEventListener('click', function(){
    const kAccPrice = getPrice('k-accessories-1-price');
    console.log(kAccPrice);
    const oldTotalPrice = getPrice('total-price');
    console.log(oldTotalPrice);
    const totalPrice = parseFloat(kAccPrice + oldTotalPrice);
    
    oldTotalPrice.innerText = totalPrice;

})