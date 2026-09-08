let products = document.getElementById("products");
let cartProducts = document.getElementById("cart-products");


let data = [
    {
        id: 1,
        product: "Jacket",
        price: 100,
        icon: "fa-vest"
    },
    {
        id: 2,
        product: "Watch",
        price: 130,
        icon: "fa-clock"
    },
    {
        id: 3,
        product: "T-shirt",
        price: 120,
        icon: "fa-tshirt"
    },
    {
        id: 4,
        product: "Shoes",
        price: 150,
        icon: "fa-shoe-prints"
    },
    {
        id: 5,
        product: "Backpack",
        price: 80,
        icon: "fa-suitcase"
    },
    {
        id: 6,
        product: "Cap",
        price: 45,
        icon: "fa-hat-cowboy"
    },
    {
        id: 7,
        product: "Sunglasses",
        price: 95,
        icon: "fa-glasses"
    },
    {
        id: 8,
        product: "Belt",
        price: 60,
        icon: "fa-grip-lines"
    },
    {
        id: 9,
        product: "Socks",
        price: 25,
        icon: "fa-socks"
    },
    {
        id: 10,
        product: "Scarf",
        price: 70,
        icon: "fa-scroll"
    }
];

function drawItems() {
    let items = data.map(function (item) {
        return `
        <div class="product-card">
            <div class="badge">NEW</div>
            <div class="icon-wrap">
                <i class="fas ${item.icon}"></i>
            </div>
            <h3>${item.product}</h3>
            <div class="price">${item.price}</div>
            <button class="add-to-cart" onclick="addToCart(${item.id})">
                <i class="fas fa-plus"></i> Add
            </button>
        </div>`;
    });
    products.innerHTML = items.join("");
}

drawItems();

let cart = [];

function addToCart(id) {
    let product = data.find(function (item) {
        return item.id === id;
    });
    
    
    let existing = cart.find(function (item) {
        return item.id === id;
    });
    
    if (!existing) {
        cart.push(product);
        drawCart();
        showNotification(product.product);
    } else {
        alert("This item is already in your cart!");
    }
}

function drawCart() {
    if (cart.length === 0) {
        cartProducts.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-bag"></i>
                Your cart is empty
            </div>
        `;
        return;
    }
    
    let cartItem = cart.map(function (item) {
        return `
        <div class="cart-item">
            <div class="cart-icon">
                <i class="fas ${item.icon}"></i>
            </div>
            <div class="cart-info">
                <h4>${item.product}</h4>
                <span>$${item.price}</span>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${item.id})">
                <i class="fas fa-times"></i>
            </button>
        </div>`;
    });
    
    
    let total = cart.reduce(function (sum, item) {
        return sum + item.price;
    }, 0);
    
    cartProducts.innerHTML = cartItem.join("") + `
        <div class="cart-total">
            <span>Total</span>
            <span class="total-amount">$${total}</span>
        </div>
    `;
}

function removeFromCart(id) {
    let index = cart.findIndex(function (item) {
        return item.id === id;
    });
    if (index !== -1) {
        cart.splice(index, 1);
        drawCart();
    }
}

function showNotification(productName) {
    console.log(`✅ ${productName} added to cart!`);
}