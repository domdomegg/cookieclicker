// Get various elements from the DOM
e_cookie = document.getElementById('cookie');
e_cookieQuantity = document.getElementById('cookieQuantity');
e_cookieQuantity_under = document.getElementById('cookieQuantity_under');
e_products = document.getElementById('products');

// Create eventlistener on cookie
e_cookie.addEventListener('click', cookieClick);

// Start with 0 cookies and empty storeOptions object
var cookies = 0;
var storeOptions = {};

// User clicks the giant cookie
function cookieClick() {
    // They get a cookie
    cookies += 1;
    // Show them how many cookies they have
    displayCookies();
}

// Display cookies
function displayCookies() {
    if(cookies == 1) {
        e_cookieQuantity_under.innerHTML = 'cookie';
    } else {
        e_cookieQuantity_under.innerHTML = 'cookies';
    }
    e_cookieQuantity.innerHTML = cookies.toLocaleString();
}

function addStoreOption(storeOption) {
    var s = "<li class='product' id='" + storeOption.id + "'>" +
            "<p class='product_owned'>" + ((storeOption.product_owned === 0) ? "" : storeOption.product_owned) + "</p>" +
            "<img src='" + storeOption.image_src + "' alt='" + storeOption.product_name +"' class='product_image'  width='50px' height='50px'>" +
            "<div class='product_text'>" +
            "<p class='product_title'><span class='product_name'>" + storeOption.product_name + "</span> (<span class='product_cps'>" + storeOption.product_cps.toLocaleString() + "</span> cps)</p>" +
            "<p class='product_price'>" + storeOption.product_price.toLocaleString() + "</p></li>" +
            "</div>";
    e_products.innerHTML += s;
}

// Creates cursor storeOption object
storeOptions["1"] = {
    id: 1,
    product_owned: 3,
    image_src: "cursor.svg",
    product_name: "Cursor",
    product_cps: 0.1,
    product_price: 10
};

addStoreOption(storeOptions["1"]);
