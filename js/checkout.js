// ========================================
// A ONE BAKERY - CHECKOUT PAGE LOGIC
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    const placeOrderBtn = document.getElementById('placeOrderBtn');
    
    if (placeOrderBtn) {
        placeOrderBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Basic input validation
            const inputs = document.querySelectorAll('.checkout-form input[required], .checkout-form textarea[required]');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = '#e74c3c';
                } else {
                    input.style.borderColor = '';
                }
            });
            
            if (!isValid) {
                if (typeof showToast === 'function') {
                    showToast("Please fill in all required checkout fields.");
                } else {
                    alert("Please fill in all required checkout fields.");
                }
                return;
            }
            
            placeOrderBtn.disabled = true;
            placeOrderBtn.innerHTML = '<span>Processing Order...</span> <i class="fas fa-spinner fa-spin"></i>';
            
            setTimeout(() => {
                // Clear cart in localStorage
                localStorage.removeItem('a1_cart');
                window.location.href = 'success.html';
            }, 1200);
        });
    }
});
