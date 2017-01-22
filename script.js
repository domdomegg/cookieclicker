// Find the cookieQuantity field
e_cookieQuantity = document.getElementById('cookieQuantity');

// Start with 0 cookies
var cookies = 0;

// User clicks the giant cookie
function cookieClick() {
    // They get a cookie
    cookies += 1;
    // Show them how many cookies they have
    displayCookies();
}

// Display cookies
function displayCookies() {
    e_cookieQuantity.innerHTML = cookies;
}
