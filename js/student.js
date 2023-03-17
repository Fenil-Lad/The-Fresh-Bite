let displayItem = ['#container2', '#container3', '#orderMenuCart', '#subMenu'];
let menuItem = ['#menuItem1', '#menuItem2', '#cartButton', '.catag'];
// Display Menu According to the selection

function toggleMenu(elementId) {
    let SMenuItem;
    let SDisplayItem;
    for (let index = 0; index < menuItem.length; index++) {
        if (elementId == menuItem[index]) {
            SMenuItem = document.querySelector(menuItem[index]);
            SDisplayItem = document.querySelector(displayItem[index]);
            if (menuItem[index] == menuItem[2]) {
                SMenuItem.style.color = '#179b51';
                SMenuItem.style.background = 'none';
            }
            else if (menuItem[index] == menuItem[3]) {
                SMenuItem.style.color = '#179b51';
                SMenuItem.style.backgroundColor = 'white';
            }
            else {
                SMenuItem.style.color = 'white';
                SMenuItem.style.backgroundColor = '#179b51';
            }
            SDisplayItem.style.display = 'grid';
        }
        else if (elementId != menuItem[index]) {
            SMenuItem = document.querySelector(menuItem[index]);
            SDisplayItem = document.querySelector(displayItem[index]);
            if (menuItem[index] == menuItem[2]) {
                SMenuItem.style.color = 'white';
                SMenuItem.style.backgroundColor = '#179b51';
            }
            else if (menuItem[index] == menuItem[3]) {
                SMenuItem.style.color = '#179b51';
                SMenuItem.style.backgroundColor = 'white';
            }
            else {
                SMenuItem.style.color = '#179b51';
                SMenuItem.style.background = 'none';
            }
            SDisplayItem.style.display = 'none';

        }
    }
}
// Display Ordering Menu List


function displayMenuList() {
    const order = [
        { category: 'Appetizers', id: 'apps' },
        { category: 'Main dishes', id: 'mainDishes' },
        { category: 'Sides', id: 'sides' },
        { category: 'Beverages', id: 'beverages' },
        { category: 'Soups', id: 'soups' },
        { category: 'Salads', id: 'salads' },
        { category: 'Pasta Dishes', id: 'pastaDishes' },
        { category: 'Rice dishes', id: 'riceDishes' },
        { category: 'Food', id: 'food' },
        //You can add more 
    ];
    let container2 = document.querySelector('#container2');
    for (let index = 0; index < order.length; index++) {
        container2.innerHTML += `<div class="catag" id="${order[index].id}" onclick="toggleMenu('.'+this.className); lastMenuVar ='#menuItem1'">${order[index].category}</div>`;
    }
}
displayMenuList();


// Open Menu according to click
let menuVariety = ['#apps', '#mainDishes', '#sides', '#beverages', '#soups', '#salads', '#pastaDishes', '#riceDishes'];
let SMenuVariety;
let page;

function openMenu() {
    page = document.querySelector('#orderMe');
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


// Displaying Cart values
function displayCart() {
    let cartOrder = [
        { item: 'Bhurji', count: '1', cost: '12.25' },
        { item: 'Bhurji', count: '1', cost: '10' },
        { item: 'Bhurji', count: '1', cost: '10' },
        { item: 'Bhurji', count: '1', cost: '10' },
        { item: 'Bhurji', count: '1', cost: '10' },
        { item: 'Bhurji', count: '1', cost: '10' },
        { item: 'Bhurji', count: '1', cost: '10' },
        { item: 'Bhurji', count: '1', cost: '10' },
        { item: 'Bhurji', count: '1', cost: '10' },
        { item: 'Bhurji', count: '1', cost: '10' },
        { item: 'Bhurji', count: '1', cost: '10' },
    ];
    let menuCart = document.querySelector('#orderMenuCart');
    for (let index = 0; index < cartOrder.length; index++) {
        menuCart.innerHTML += ` <div class="item"><p class="itemName">${cartOrder[index].item}</p><div class="ItemCount"><span class="decrement" id="decrement${index}" onclick="decrementOnClick(${index});">-</span><span id="value${index}">${cartOrder[index].count}</span><span class="increment" id="increment${index}" onclick="incrementOnClick(${index});">+</span></div><p class="totalCost">$<span id='cost${index}'>${cartOrder[index].cost}</span></p></div>`;
    }
}

displayCart();

// Displaying Cart values
function displaySubItems() {
    const order = [
        { item: 'Bhurji', count: '1', cost: '12.25' },
        { item: 'Bhurji', count: '3', cost: '43' },
        { item: 'Bhurji', count: '3', cost: '43' },
        { item: 'Bhurji', count: '3', cost: '43' },
        { item: 'Bhurji', count: '3', cost: '43' },
        { item: 'Bhurji', count: '3', cost: '43' },
        { item: 'Bhurji', count: '3', cost: '43' },
        { item: 'Bhurji', count: '3', cost: '43' },
        { item: 'Bhurji', count: '3', cost: '43' },
        { item: 'Bhurji', count: '3', cost: '43' },
        { item: 'Bhurji', count: '3', cost: '43' },
    ];
    let subMenu = document.querySelector('#subMenu');
    for (let index = 0; index < order.length; index++) {
        subMenu.innerHTML += ` <div class="item"><p class="itemName">${order[index].item}</p><div class="ItemCount"><span class="decrement" id="subItemDecrement${index}" onclick="subItemDecrementOnClick(${index});">-</span><span id="subItemValue${index}">${order[index].count}</span><span class="increment" id="subItemIncrement${index}" onclick="subItemIncrementOnClick(${index});">+</span></div><p class="totalCost">$<span id='subItemCost${index}'>${order[index].cost}</span></p></div>`;
    }
}

displaySubItems();



//remembers which menu was open before this one
var lastMenuVar = '#menuItem1';
function lastMenu(elementId) {
    lastMenuVar = elementId;
}
// backButton function
const backButton = document.querySelector('#backArrow');
backButton.addEventListener('click', event => {
    toggleMenu(lastMenuVar);
});

// backButton function
const backItem = document.querySelector('#backArrowItem');
backItem.addEventListener('click', event => {
    toggleMenu('#menuItem1');
});

//Incrementing and decrementing the values as per the person

function incrementOnClick(elementId) {
    let doc = document.getElementById('value' + elementId);
    let costID = document.getElementById('cost' + elementId);
    let value = parseInt(doc.innerHTML);
    totalCost = parseFloat(costID.innerHTML);
    totalCostBefore = totalCost / value;
    value += 1;
    totalCost += totalCostBefore;
    doc.innerHTML = value;
    costID.innerHTML = totalCost;
}

function decrementOnClick(elementId) {
    let doc = document.getElementById('value' + elementId);
    let costID = document.getElementById('cost' + elementId);
    let value = parseInt(doc.innerHTML);
    totalCost = parseFloat(costID.innerHTML);
    totalCostBefore = totalCost / value;
    totalCost -= totalCostBefore;
    value -= 1;
    doc.innerHTML = value;
    costID.innerHTML = totalCost;
}


function subItemIncrementOnClick(elementId) {
    let doc = document.getElementById('subItemValue' + elementId);
    let costID = document.getElementById('subItemCost' + elementId);
    let value = parseInt(doc.innerHTML);
    totalCost = parseFloat(costID.innerHTML);
    totalCostBefore = totalCost / value;
    value += 1;
    totalCost += totalCostBefore;
    doc.innerHTML = value;
    costID.innerHTML = totalCost;
}

function subItemDecrementOnClick(elementId) {
    let doc = document.getElementById('subItemValue' + elementId);
    let costID = document.getElementById('subItemCost' + elementId);
    let value = parseInt(doc.innerHTML);
    totalCost = parseFloat(costID.innerHTML);
    totalCostBefore = totalCost / value;
    totalCost -= totalCostBefore;
    value -= 1;
    doc.innerHTML = value;
    costID.innerHTML = totalCost;
}
// Log out alert
let alertBox = document.querySelector('.logOutAlert');
alertBox.style.display = 'none';
function logOutAlert() {

    if (alertBox.style.display == 'none') {
        alertBox.style.display = 'flex';
    }
    else if (alertBox.style.display != 'none') {
        alertBox.style.display = 'none';
    }
}