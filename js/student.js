// Display Menu According to the selection

let displayItem = ['#container2', '#container3'];
let menuItem = ['#menuItem1', '#menuItem2'];
function toggleMenu(elementId) {
    let SMenuItem;
    let SDisplayItem;
    elementId = '#' + elementId;
    for (let index = 0; index < menuItem.length; index++) {
        if (elementId == menuItem[index]) {
            SMenuItem = document.querySelector(menuItem[index]);
            SDisplayItem = document.querySelector(displayItem[index]);
            SMenuItem.style.color = 'white';
            SMenuItem.style.backgroundColor = '#179b51';
            SDisplayItem.style.display = 'grid';
        }
        else if (elementId != menuItem[index]) {
            SMenuItem = document.querySelector(menuItem[index]);
            SDisplayItem = document.querySelector(displayItem[index]);
            SMenuItem.style.color = '#179b51';
            SMenuItem.style.background = 'none';
            SDisplayItem.style.display = 'none';
        }
    }
}


// Open Menu according to click
let menuVariety = ['#apps', '#mainDishes', '#sides', '#beverages', '#soups', '#salads', '#pastaDishes', '#riceDishes'];
let SMenuVariety;
let page;

function openMenu() {
    page = document.querySelector('#orderMenuPage');
    if (page.style.display == 'none') {
        page.style.display = 'block';
    }
    else if (page.style.display != 'none') {
        page.style.display = 'none';
    }
}

// Open Menu according to click over


function displayCart() {
    page = document.querySelector('#orderMenuCart');
    if (page.style.display == 'none') {
        page.style.display = 'block';
    }
    else if (page.style.display != 'none') {
        page.style.display = 'none';
    }
}

// toggle menu button
menuButton = document.getElementById('menuIcon');
let menu;

function toggleButton() {
    menu = document.querySelector('#container1');
    if (menu.style.display == 'none') {
        menu.style.display = 'block';
    }
    else if (menu.style.display != 'none') {
        menu.style.display = 'none';
    }
}


// Display Menu According to the selection over

function displayOrders() {
    const orders = [
        { orderId: '#1234567', totalItems: 1, timePlaced: '01/10/2003', orderStatus: "Processing" },
        { orderId: '#1234567', totalItems: 10, timePlaced: '01/10/2003', orderStatus: "Shipped" },
        { orderId: '#1234567', totalItems: 3, timePlaced: '01/10/2003', orderStatus: "Delivered" },
        { orderId: '#1234567', totalItems: 3, timePlaced: '01/10/2003', orderStatus: "Delivered" },
        { orderId: '#1234567', totalItems: 3, timePlaced: '01/10/2003', orderStatus: "Delivered" },
        { orderId: '#1234567', totalItems: 3, timePlaced: '01/10/2003', orderStatus: "Delivered" },
        { orderId: '#1234567', totalItems: 3, timePlaced: '01/10/2003', orderStatus: "Delivered" },
        { orderId: '#1234567', totalItems: 3, timePlaced: '01/10/2003', orderStatus: "Delivered" },
        { orderId: '#1234567', totalItems: 3, timePlaced: '01/10/2003', orderStatus: "Delivered" },
        //You can add more 
    ];
    let container3 = document.querySelector('#container3');
    for (let index = 0; index < orders.length; index++) {
        container3.innerHTML += `<div class="orderList"><p class="orderId">${orders[index].orderId}</p><p class="totalItems">${orders[index].totalItems}</p><p class="timePlaced">${orders[index].timePlaced}</p><p class="orderStatus">${orders[index].orderStatus}</p></div>`;
    }
}

displayOrders();

// Display Ordering Menu List


function displayMenuList() {
    const orders = [
        { category: 'Appetizers'},
        { category: 'Main dishes'},
        { category: 'Sides'},
        { category: 'Beverages'},
        { category: 'Soups'},
        { category: 'Salads'},
        { category: 'Pasta Dishes'},
        { category: 'Rice dishes'},
        { category: 'Food'},
        { category: 'Food'},
        { category: 'Food'},
        { category: 'Food'},
        { category: 'Food'},
        { category: 'Food'},
        { category: 'Food'},
        { category: 'Food'},
        { category: 'Food'},
        { category: 'Food'},
        { category: 'Food'},
        { category: 'Food'},
        { category: 'Food'},
        { category: 'Food'},
        { category: 'Food'},
        { category: 'Food'},
        { category: 'Food'},
        { category: 'Food'},
        { category: 'Food'}
        //You can add more 
    ];
    let container2 = document.querySelector('#container2');
    for (let index = 0; index < orders.length; index++) {
        container2.innerHTML += `<div class="catag" onclick="openMenu();">${orders[index].category}</div>`;
    }
}
displayMenuList();
