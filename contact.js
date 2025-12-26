/**
 * BSPP Contact Form Logic
 */

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
});

function handleFormSubmit(e) {
    e.preventDefault();
    
    const btn = document.getElementById('submit-btn');
    const originalContent = btn.innerHTML;
    
    // Loading State
    btn.disabled = true;
    btn.innerHTML = `
        <div class="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
        <span>Envoi en cours...</span>
    `;
    
    // Simulate API call
    setTimeout(() => {
        // Success
        const form = document.getElementById('contact-form');
        const successMsg = document.getElementById('success-message');
        
        form.classList.add('hidden');
        successMsg.classList.remove('hidden');
        
        // Reset button for future
        btn.disabled = false;
        btn.innerHTML = originalContent;
        
        // Vibration if mobile
        if (navigator.vibrate) {
            navigator.vibrate([100, 50, 100]);
        }
    }, 2000);
}

function resetForm() {
    const form = document.getElementById('contact-form');
    const successMsg = document.getElementById('success-message');
    
    form.reset();
    successMsg.classList.add('hidden');
    form.classList.remove('hidden');
}
