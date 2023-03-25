
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

// function displayOrders() {
//     const orders = [
//         { orderNumber: 001, customerName: "John Smith", totalItems: 1, status: "Processing" },
//         { orderNumber: 002, customerName: "Jane Doe", totalItems: 10, status: "Shipped" },
//         { orderNumber: 003, customerName: "Bob Johnson", totalItems: 3, status: "Delivered" },
//         { orderNumber: 003, customerName: "Bob Johnson", totalItems: 3, status: "Delivered" },
//         { orderNumber: 003, customerName: "Bob Johnson", totalItems: 3, status: "Delivered" },
//         { orderNumber: 003, customerName: "Bob Johnson", totalItems: 3, status: "Delivered" },
//         { orderNumber: 003, customerName: "Bob Johnson", totalItems: 3, status: "Delivered" },
//         { orderNumber: 003, customerName: "Bob Johnson", totalItems: 3, status: "Delivered" },
//         { orderNumber: 003, customerName: "Bob Johnson", totalItems: 3, status: "Delivered" },
//         //You can add more 
//     ];
//     const tbody = document.getElementById('tbody');
//     for(let index = 0; index< orders.length;index++)
//     {
//         tbody.innerHTML += `<tr><td>${orders[index].orderNumber}</td><td>${orders[index].customerName}</td><td>${orders[index].totalItems}</td><td>${orders[index].status}</td></tr>`;
//     }
// }

// displayOrders();


function displayPastOrders() {
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

displayPastOrders();


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