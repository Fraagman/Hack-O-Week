const products = [
    {
        id: 1,
        title: "Titanium Smart Watch",
        price: "$299.00",
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 2,
        title: "Noise-Cancelling Headphones",
        price: "$349.00",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 3,
        title: "Minimalist Sneaker",
        price: "$125.00",
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 4,
        title: "Analog Film Camera",
        price: "$599.00",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 5,
        title: "Designer Sunglasses",
        price: "$180.00",
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 6,
        title: "Mechanical Keyboard",
        price: "$150.00",
        image: "https://images.unsplash.com/photo-1587829741301-3dc89defe8be?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 7,
        title: "Smart Home Speaker",
        price: "$99.00",
        image: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 8,
        title: "Premium Leather Bag",
        price: "$245.00",
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=600&q=80"
    }
];

const grid = document.getElementById('product-grid');
const cartBadge = document.querySelector('.cart-badge');
let cartCount = 0;

function renderProducts() {
    products.forEach((product, index) => {
        const card = document.createElement('article');
        card.className = 'product-card fade-in';
        card.style.animationDelay = `${index * 0.1}s`;

        card.innerHTML = `
            <div class="image-wrapper">
                <img src="${product.image}" alt="${product.title}" loading="lazy">
            </div>
            <div class="card-content">
                <h3 class="product-title">${product.title}</h3>
                <p class="product-price">${product.price}</p>
                <button class="add-btn" onclick="addToCart(this)">
                    <ion-icon name="cart-outline"></ion-icon>
                    Add to Cart
                </button>
            </div>
        `;

        grid.appendChild(card);
    });
}

function addToCart(btn) {
    // Visual feedback
    const originalText = btn.innerHTML;
    
    btn.innerHTML = `<ion-icon name="checkmark-outline"></ion-icon> Added`;
    btn.style.background = 'var(--accent)';
    btn.style.transform = 'scale(0.98)';
    
    // Update cart count
    cartCount++;
    cartBadge.textContent = cartCount;
    
    // Animate badge
    cartBadge.style.transform = 'scale(1.5)';
    setTimeout(() => {
        cartBadge.style.transform = 'scale(1)';
    }, 200);

    // Reset button after 2 seconds
    setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.background = '';
        btn.style.transform = '';
    }, 2000);
}

// Initialize
document.addEventListener('DOMContentLoaded', renderProducts);
