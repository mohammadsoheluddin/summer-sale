document.addEventListener('DOMContentLoaded', function () {
    const cartContainer = document.querySelector('.cart-container');
    const mainSection = document.querySelector('main');
    const flexibleDiv = document.querySelector('.flex-1');
    const closeModalBtn = document.getElementById('go-home');
    const couponCodeInput = document.getElementById('coupon-code');
    const applyCouponBtn = document.getElementById('btn-apply');
    const confirmPurchaseBtn = document.getElementById('confirm');

    // Function to handle scrolling and position the cart container
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

    // Function to update the cart based on a product addition
    function updateCart(productName, productPrice) {
        // Update the cart UI
        const cartProducts = document.querySelector('.cart-products');
        const existingProduct = Array.from(cartProducts.children).find(child => child.textContent.includes(productName));

        if (existingProduct) {
            // If the product already exists in the cart, update its quantity and total price
            const quantityElement = existingProduct.querySelector('.quantity');
            const quantity = parseInt(quantityElement.textContent) + 1;
            quantityElement.textContent = quantity;

            const totalPriceElement = existingProduct.querySelector('.total-price');
            const totalPrice = parseFloat(totalPriceElement.textContent) + productPrice;
            totalPriceElement.textContent = totalPrice.toFixed(2);
        } else {
            // If the product is new to the cart, add it to the cart UI
            const productElement = document.createElement('div');
            productElement.classList.add('product-item');
            productElement.innerHTML = `
                <span>${cartProducts.children.length + 0} . </span>
                <span>${productName}</span>
                (Qty-<span class="quantity">1</span>)
                <span class="total-price">${productPrice.toFixed(2)}</span> TK
            `;
            cartProducts.appendChild(productElement);
        }

        // Update total price and enable/disable confirm purchase button
        updateTotalPrice();
    }

    // Function to update the total price and enable/disable confirm purchase button
    function updateTotalPrice() {
        const totalPriceElements = document.querySelectorAll('.total-price');
        let totalPrice = 0;

        totalPriceElements.forEach(element => {
            totalPrice += parseFloat(element.textContent);
        });

        const discount = calculateDiscount(totalPrice);
        const finalPrice = totalPrice - discount;

        document.getElementById('total-price').textContent = totalPrice.toFixed(2);
        document.getElementById('discount').textContent = discount.toFixed(2);
        document.getElementById('total').textContent = finalPrice.toFixed(2);
        confirmPurchaseBtn.disabled = finalPrice <= 0;
        applyCouponBtn.disabled = totalPrice < 200;
    }

    // Function to calculate discount based on coupon code
    function calculateDiscount(totalPrice) {
        if (totalPrice >= 200 && couponCodeInput.value.trim() === 'SELL200') {
            return totalPrice * 0.2;
        } else {
            return 0;
        }
    }

    // Event listener for scrolling
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Ensure cart container position is correct on page load

    // Event listener for "Go Home" button click
    closeModalBtn.addEventListener('click', function () {
        window.location.reload(); // Refresh the page
    });

    // Event listener for applying coupon
    applyCouponBtn.addEventListener('click', function () {
        updateTotalPrice();
    });

    // Event listener for product button clicks using event delegation
    document.addEventListener('click', function (event) {
        const target = event.target;
        if (target && target.id.startsWith('btn-add-')) {
            const productId = parseInt(target.id.split('-')[2]);
            const productName = document.getElementById(`product-name-${productId}`).textContent;
            const productPrice = parseFloat(document.getElementById(`product-price-${productId}`).textContent);
            updateCart(productName, productPrice);
        }
    });
});
