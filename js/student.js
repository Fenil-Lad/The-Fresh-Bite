// var newOrders = document.querySelector('#container2');
// var prevOrders = document.querySelector('#container3');
// newOrders.style.display = 'grid';
// prevOrders.style.display = 'none';

// function orderToggleDisplay() {
//     var newOrders = document.querySelector('#container2');
//     var prevOrders = document.querySelector('#container3');
//     var item1 = document.querySelector('#menuItem1');
//     var item2 = document.querySelector('#menuItem2');
//     newOrders.style.display = 'grid';
//     prevOrders.style.display = 'none';
//     item1.style.color = 'white';
//     item1.style.backgroundColor = 'rgb(0, 120, 86)';
//     item2.style.color = 'rgb(0, 120, 86)';
//     item2.style.background = 'none';
// }

// function prevToggleDisplay() {
//     var newOrders = document.querySelector('#container2');
//     var prevOrders = document.querySelector('#container3');
//     var item1 = document.querySelector('#menuItem1');
//     var item2 = document.querySelector('#menuItem2');
//     prevOrders.style.display = 'grid';
//     newOrders.style.display = 'none';
//     item2.style.color = 'white';
//     item2.style.backgroundColor = 'rgb(0, 120, 86)';
//     item1.style.color = 'rgb(0, 120, 86)';
//     item1.style.background = 'none';
// }


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
            SMenuItem.style.backgroundColor = 'rgb(0, 120, 86)';
            SDisplayItem.style.display = 'grid';
        }
        else if (elementId != menuItem[index]) {
            SMenuItem = document.querySelector(menuItem[index]);
            SDisplayItem = document.querySelector(displayItem[index]);
            SMenuItem.style.color = 'rgb(0, 120, 86)';
            SMenuItem.style.background = 'none';
            SDisplayItem.style.display = 'none';
        }
    }
}

// Display Menu According to the selection over


// Open Menu according to click
let menuVariety = ['#apps','#mainDishes','#sides','#beverages','#soups','#salads','#pastaDishes','#riceDishes'];
let SMenuVariety;
let page;

function openMenu(elementId)
{
    page = document.querySelector('#orderMenuPage');
    if(page.style.display == 'none')
    {
        page.style.display = 'block';
    }
    else if(page.style.display != 'none')
    {
        page.style.display = 'none';
    }
}

// Open Menu according to click over


function displayCart()
{
    page = document.querySelector('#orderMenuCart');
    if(page.style.display == 'none')
    {
        page.style.display = 'block';
    }
    else if(page.style.display != 'none')
    {
        page.style.display = 'none';
    }
}


menuButton = document.getElementById('menuIcon');
let menu;

function toggleButton()
{
    menu = document.querySelector('#container1');
    if(menu.style.display == 'none')
    {
        menu.style.display = 'block';
    }    
    else if(menu.style.display != 'none')
    {
        menu.style.display = 'none';
    }
}


