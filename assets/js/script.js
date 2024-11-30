document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('.service-checkbox');
    const totalPriceElement = document.getElementById('total-price');
    
    let totalPrice = 0;

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', (event) => {
            const price = parseFloat(event.target.value);

            if (event.target.checked) {
                totalPrice += price;
            } else {
                totalPrice -= price;
            }

            totalPriceElement.textContent = totalPrice;
            totalPriceElement.classList.add('price-animation');
            setTimeout(() => {
                totalPriceElement.classList.remove('price-animation');
            }, 500);
        });
    });
});