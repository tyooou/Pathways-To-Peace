// Select all items and the inventory div
const items = document.querySelectorAll('.item');
const inventoryDiv = document.getElementById('inventory');

// Array to hold the inventory items
let inventory = [];

// Function to update the inventory display
function updateInventory() {
    inventoryDiv.innerHTML = ''; // Clear current inventory display
    inventory.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.textContent = item;
        inventoryDiv.appendChild(itemDiv);
    });
}

// Add click event listener to each item
items.forEach(item => {
    item.addEventListener('click', () => {
        const itemName = item.getAttribute('data-name');
        // Add item to inventory if not already present
        if (!inventory.includes(itemName)) {
            inventory.push(itemName);
            updateInventory();
        } else {
            alert(${itemName} is already in your inventory!);
        }
    });
});
