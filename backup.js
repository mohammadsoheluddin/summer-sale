
window.addEventListener('DOMContentLoaded', function () {
    const cartContainer = document.querySelector('.cart-container');
    const mainSection = document.querySelector('main');

    // Get the offset top of the main section
    const mainOffsetTop = mainSection.offsetTop;

    // Add scroll event listener
    window.addEventListener('scroll', function () {
        // Get the current scroll position
        const scrollPosition = window.scrollY;

        // Check if the scroll position is greater than or equal to the main section's offset top
        if (scrollPosition >= mainOffsetTop) {
            // If so, fix the cart container
            cartContainer.style.position = 'fixed';
            cartContainer.style.top = '10px';
            cartContainer.style.right = '90px';
        } else {
            // Otherwise, revert to the default position
            cartContainer.style.position = 'static';
        }
    });
});