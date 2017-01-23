// Get various elements from the DOM
e_cookie = document.getElementById('cookie');
e_cookieQuantity = document.getElementById('cookieQuantity');
e_cookieQuantity_under = document.getElementById('cookieQuantity_under');
e_products = document.getElementById('products');

// Create eventlistener on cookie
e_cookie.addEventListener('click', cookieClick);

// Initialise variables
var cookies = 0;
var cps = 0;
var ticksPerSecond = 10;
var storeOptions = {};

// User clicks the giant cookie
function cookieClick() {
    // They get a cookie
    cookies++;
    // Show them how many cookies they have
    displayCookies();
}

// Display cookies
function displayCookies() {
    // Check plurals
    if(cookies == 1) {
        e_cookieQuantity_under.innerHTML = 'cookie';
    } else {
        e_cookieQuantity_under.innerHTML = 'cookies';
    }
    // Show number of cookies, always with 1 decimal place
    e_cookieQuantity.innerHTML = cookies.toLocaleString(undefined, { maximumFractionDigits: 1, minimumFractionDigits: 1 });
}

// Adds items to the store
function addStoreOption(storeOption) {
    // Create long string of HTML code that represents a product. Fills in with details from storeOption object where appropriate.
    var s = "<li class='product' id='" + storeOption.id + "'' onclick='purchaseStoreOption(" + storeOption.id + ")'>" +
            "<p class='product_owned'>" + ((storeOption.product_owned === 0) ? "" : storeOption.product_owned) + "</p>" +
            "<img src='" + storeOption.image_src + "' alt='" + storeOption.product_name +"' class='product_image'  width='50px' height='50px'>" +
            "<div class='product_text'>" +
            "<p class='product_title'><span class='product_name'>" + storeOption.product_name + "</span> (<span class='product_cps'>" + storeOption.product_cps.toLocaleString() + "</span> cps)</p>" +
            "<p class='product_price'>" + storeOption.product_price.toLocaleString() + "</p></li>" +
            "</div>";
    // Updates the proudct list with the new product
    e_products.innerHTML += s;
}

// Handles clicking on a product in the store
function purchaseStoreOption(id) {
    // Check they have enough cookies to purchase product
    if(storeOptions[id].product_price <= cookies) {
        // If they do, subtract that number of cookies
        cookies -= storeOptions[id].product_price;
        // Incremement the product_owned value
        storeOptions[id].product_owned++;
        // Update the DOM to reflect the new product_owned value
        document.getElementById(id).getElementsByClassName('product_owned')[0].innerHTML = storeOptions[id].product_owned;

        // Recalculate the cps
        calculateCps();
    }
}

// Calculates cps
function calculateCps() {
    // Reset the cps to zero
    cps = 0;
    // Loop through products
    for(var i = 0, keys = Object.keys(storeOptions); i < keys.length; i++) {
        // For each product, total cps = number owned * cps of one
        cps += storeOptions[keys[i]].product_owned * storeOptions[keys[i]].product_cps;
    }
}

// Every tick, update the number of cookies and display it
function gameLoop() {
    // Add the cookies earned in the last tick to the total
    cookies += (cps / ticksPerSecond);
    displayCookies();
}

// Creates example storeOption object
storeOptions = {
    1: {
        id: 1,
        product_owned: 0,
        image_src: "img/cursor.svg",
        product_name: "Meh cursor",
        product_cps: 0.1,
        product_price: 10
    },
    2: {
        id: 2,
        product_owned: 0,
        image_src: "img/cursor.svg",
        product_name: "Better cursor",
        product_cps: 1.5,
        product_price: 100
    },
    3: {
        id: 3,
        product_owned: 0,
        image_src: "img/cursor.svg",
        product_name: "Best cursor",
        product_cps: 20,
        product_price: 1000
    }
};
// Adds the storeOptions to the page
addStoreOption(storeOptions["1"]);
addStoreOption(storeOptions["2"]);
addStoreOption(storeOptions["3"]);

// Set gameLoop running
window.setInterval(gameLoop, (1000 / ticksPerSecond));
