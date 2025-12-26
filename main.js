/**
 * BSPP Site - Main Logic
 * Handles Data Initialization, Navigation, Cart, and Common UI
 */

const STORAGE_KEY_DB = "bspp_store_db";
const STORAGE_KEY_AUTH = "bspp_store_auth";
const STORAGE_KEY_CART = "cart_count";

// Default Products
const DEFAULT_PRODUCTS = [
    {
        id: 1,
        name: "Écusson BSPP",
        price: 15,
        category: "Accessoires",
        icon: "shield",
        description: "Écusson officiel de la Brigade de Sapeurs-Pompiers de Paris. Brodé haute qualité.",
        isPopular: true
    },
    {
        id: 2,
        name: "T-shirt BSPP",
        price: 25,
        category: "Vêtements",
        icon: "shirt",
        description: "T-shirt bleu marine en coton bio avec logo BSPP sur le cœur.",
        isPopular: true
    },
    {
        id: 3,
        name: "Mug BSPP",
        price: 12,
        category: "Maison",
        icon: "coffee",
        description: "Mug en céramique résistant, idéal pour le café de garde.",
        isPopular: false
    },
    {
        id: 4,
        name: "Drapeau BSPP",
        price: 30,
        category: "Décoration",
        icon: "flag",
        description: "Grand drapeau aux couleurs de la brigade. 150x100cm.",
        isPopular: false
    }
];

// Initialize Data
function initData() {
    if (!localStorage.getItem(STORAGE_KEY_DB)) {
        console.log("Initializing default database...");
        localStorage.setItem(STORAGE_KEY_DB, JSON.stringify(DEFAULT_PRODUCTS));
    }
}

// Cart Logic
function updateCartCountDisplay() {
    const count = sessionStorage.getItem(STORAGE_KEY_CART) || 0;
    const badges = document.querySelectorAll('.cart-count');
    badges.forEach(badge => {
        badge.textContent = count;
        if (parseInt(count) > 0) {
            badge.classList.remove('hidden');
        } else {
            badge.classList.add('hidden');
        }
    });
}

function addToCart() {
    let count = parseInt(sessionStorage.getItem(STORAGE_KEY_CART) || 0);
    count++;
    sessionStorage.setItem(STORAGE_KEY_CART, count);
    updateCartCountDisplay();
    
    // Visual Feedback
    const cartIcons = document.querySelectorAll('.cart-icon-anim');
    cartIcons.forEach(icon => {
        icon.classList.add('scale-125', 'text-red-600');
        setTimeout(() => icon.classList.remove('scale-125', 'text-red-600'), 200);
    });

    // Mobile Vibration
    if (navigator.vibrate) {
        navigator.vibrate(50);
    }

    // Toast Notification
    showToast("Produit ajouté au panier !");
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = "fixed bottom-4 right-4 bg-green-600 text-white px-6 py-3 rounded shadow-lg transform translate-y-20 transition-transform duration-300 z-50 flex items-center gap-2";
    toast.innerHTML = `<i data-lucide="check-circle" class="w-5 h-5"></i> <span>${message}</span>`;
    document.body.appendChild(toast);
    lucide.createIcons();

    setTimeout(() => toast.classList.remove('translate-y-20'), 100);
    setTimeout(() => {
        toast.classList.add('translate-y-20');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Mobile Menu
function setupMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    
    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    }
}

// Common Initialization
document.addEventListener('DOMContentLoaded', () => {
    initData();
    updateCartCountDisplay();
    setupMobileMenu();
    lucide.createIcons();
});
