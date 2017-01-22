// Find the cookieQuantity field
e_cookieQuantity = document.getElementById('cookieQuantity');
e_cookieQuantity_under = document.getElementById('cookieQuantity_under');

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
    if(cookies == 1) {
        e_cookieQuantity_under.innerHTML = "cookie";
    } else {
        e_cookieQuantity_under.innerHTML = "cookies";
    }
    e_cookieQuantity.innerHTML = cookies;
}
