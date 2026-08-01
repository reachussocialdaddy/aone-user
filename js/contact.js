// ========================================
// A ONE BAKERY - CONTACT PAGE LOGIC
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<span>Sending...</span> <i class="fas fa-spinner fa-spin"></i>';
            }
            
            setTimeout(() => {
                if (typeof showToast === 'function') {
                    showToast("Thank you! Your message has been sent to A One Bakery.");
                } else {
                    alert("Thank you! Your message has been sent to A One Bakery.");
                }
                
                contactForm.reset();
                
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = '<span>Send Message</span> <i class="fas fa-paper-plane"></i>';
                }
            }, 1000);
        });
    }
});
