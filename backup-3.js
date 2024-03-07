document.addEventListener('DOMContentLoaded', function () {
    const cartContainer = document.querySelector('.cart-container');
    const mainSection = document.querySelector('main');
    const flexibleDiv = document.querySelector('.flex-1');
    const closeModalBtn = document.getElementById('go-home');

    // Handle scroll event
    function handleScroll() {
        if (window.innerWidth >= 768) {
            const scrollPosition = window.scrollY;
            const mainOffsetTop = mainSection.offsetTop;

            if (scrollPosition >= mainOffsetTop) {
                cartContainer.style.position = 'fixed';
                cartContainer.style.top = '10px';
                cartContainer.style.right = '90px';
                flexibleDiv.classList.remove('flex-1');
            } else {
                cartContainer.style.position = 'static';
                flexibleDiv.classList.add('flex-1');
            }
        } else {
            cartContainer.style.position = 'static';
            flexibleDiv.classList.add('flex-1');
        }
    }

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Ensure cart container position is correct on page load

    // Handle "Go Home" button click
    closeModalBtn.addEventListener('click', function () {
        window.location.reload(); // Refresh the page
    });

    // Handle product button clicks using event delegation
    document.addEventListener('click', function (event) {
        const target = event.target;
        if (target && target.id.startsWith('btn-add-')) {
            const productId = 'product-card-' + target.id.slice(8);
            productPriceCalculation(productId);
        }
    });
});

// Function to retrieve price from DOM
function getPrice(priceID) {
    const priceField = document.getElementById(priceID);
    const price = parseFloat(priceField.innerText);
    return price;
}

// Function to calculate product price
function productPriceCalculation(productId) {
    const productPrice = getPrice(productId);
    const productOldTotalPrice = getPrice('total-price');
    const productNewTotalPrice = productPrice + productOldTotalPrice;

    document.getElementById('total-price').innerText = productNewTotalPrice.toFixed(2);
    document.getElementById('total').innerText = productNewTotalPrice.toFixed(2);

    const confirmBtn = document.getElementById('confirm');
    confirmBtn.disabled = productNewTotalPrice <= 0;

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

// Add event listeners for product buttons
for (let i = 1; i <= 9; i++) {
    document.getElementById(`btn-add-${i}`).addEventListener('click', function () {
        productPriceCalculation(`product-card-${i}`);
    });
}
