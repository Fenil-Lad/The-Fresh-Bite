var newOrders = document.querySelector('#container2');
var prevOrders = document.querySelector('#container3');
newOrders.style.display = 'grid';
prevOrders.style.display = 'none';

function orderToggleDisplay() {
    var newOrders = document.querySelector('#container2');
    var prevOrders = document.querySelector('#container3');
    var item1 = document.querySelector('#menuItem1');
    var item2 = document.querySelector('#menuItem2');
    newOrders.style.display = 'grid';
    prevOrders.style.display = 'none';
    item1.style.color = 'white';
    item1.style.backgroundColor = 'rgb(0, 120, 86)';
    item2.style.color = 'rgb(0, 120, 86)';
    item2.style.background = 'none';
}

function prevToggleDisplay() {
    var newOrders = document.querySelector('#container2');
    var prevOrders = document.querySelector('#container3');
    var item1 = document.querySelector('#menuItem1');
    var item2 = document.querySelector('#menuItem2');
    prevOrders.style.display = 'grid';
    newOrders.style.display = 'none';
    item2.style.color = 'white';
    item2.style.backgroundColor = 'rgb(0, 120, 86)';
    item1.style.color = 'rgb(0, 120, 86)';
    item1.style.background = 'none';
}
