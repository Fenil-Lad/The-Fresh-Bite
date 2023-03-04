function displayOrders() {
    const orders = [
        { orderNumber: 001, customerName: "John Smith", totalItems: 1, status: "Processing" },
        { orderNumber: 002, customerName: "Jane Doe", totalItems: 10, status: "Shipped" },
        { orderNumber: 003, customerName: "Bob Johnson", totalItems: 3, status: "Delivered" },
        { orderNumber: 003, customerName: "Bob Johnson", totalItems: 3, status: "Delivered" },
        { orderNumber: 003, customerName: "Bob Johnson", totalItems: 3, status: "Delivered" },
        { orderNumber: 003, customerName: "Bob Johnson", totalItems: 3, status: "Delivered" },
        { orderNumber: 003, customerName: "Bob Johnson", totalItems: 3, status: "Delivered" },
        { orderNumber: 003, customerName: "Bob Johnson", totalItems: 3, status: "Delivered" },
        { orderNumber: 003, customerName: "Bob Johnson", totalItems: 3, status: "Delivered" },
        // { orderNumber: 003, customerName: "Bob Johnson", totalItems: 3, status: "Delivered" },
        // { orderNumber: 003, customerName: "Bob Johnson", totalItems: 3, status: "Delivered" }
    ];
    const tbody = document.getElementById('tbody');
    for(let index = 0; index< orders.length;index++)
    {
        tbody.innerHTML += `<tr><td>${orders[index].orderNumber}</td><td>${orders[index].customerName}</td><td>${orders[index].totalItems}</td><td>${orders[index].status}</td></tr>`;
    }
}

displayOrders();
