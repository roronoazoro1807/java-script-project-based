// Select elements
const itemInput = document.getElementById("itemInput");
const priceInput = document.getElementById("priceInput");
const quantityInput = document.getElementById("quantityInput");
const addItemBtn = document.getElementById("addItemBtn");
const itemList = document.getElementById("itemList");
const totalCost = document.getElementById("totalCost");
const toggleThemeBtn = document.getElementById("toggleThemeBtn");

// Array to store items
let items = [];

// Add Item
function addItem() {
  const itemName = itemInput.value.trim();
  const price = parseFloat(priceInput.value);
  const quantity = parseInt(quantityInput.value);

  if (!itemName || isNaN(price) || isNaN(quantity)) {
    alert("Please enter valid item details!");
    return;
  }

  // Create new item
  const item = {
    id: Date.now(),
    name: itemName,
    price: price,
    quantity: quantity,
    total: price * quantity,
    purchased: false,
  };

  items.push(item);
  itemInput.value = "";
  priceInput.value = "";
  quantityInput.value = "";

  renderItems();
}

// Delete Item
function deleteItem(id) {
  items = items.filter((item) => item.id !== id);
  renderItems();
}

// Mark as Purchased
function markAsPurchased(id) {
  items = items.map((item) =>
    item.id === id ? { ...item, purchased: !item.purchased } : item
  );
  renderItems();
}

// Edit Item
function editItem(id) {
  const item = items.find((item) => item.id === id);
  const newName = prompt("Edit item name:", item.name);
  const newPrice = prompt("Edit item price:", item.price);
  const newQuantity = prompt("Edit item quantity:", item.quantity);

  if (newName && !isNaN(newPrice) && !isNaN(newQuantity)) {
    item.name = newName;
    item.price = parseFloat(newPrice);
    item.quantity = parseInt(newQuantity);
    item.total = item.price * item.quantity;
  }

  renderItems();
}

// Render Items
function renderItems() {
  itemList.innerHTML = "";
  let totalAmount = 0;

  items.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.className = `item ${item.purchased ? "purchased" : ""}`;

    itemDiv.innerHTML = `
      <span>${item.name} - $${item.price} x ${item.quantity}</span>
      <span>Total: $${item.total}</span>
      <div>
        <button class="edit-btn" onclick="editItem(${item.id})">Edit</button>
        <button onclick="markAsPurchased(${item.id})">${
      item.purchased ? "Undo" : "Purchased"
    }</button>
        <button onclick="deleteItem(${item.id})">Delete</button>
      </div>
    `;

    itemList.appendChild(itemDiv);
    totalAmount += item.total;
  });

  totalCost.innerHTML = `Total Cost: $${totalAmount.toFixed(2)}`;
}

// Toggle Dark Mode
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => button.classList.toggle("dark-mode"));
  const itemsDiv = document.querySelectorAll(".item");
  itemsDiv.forEach((item) => item.classList.toggle("dark-mode"));
}

// Event listeners
addItemBtn.addEventListener("click", addItem);
toggleThemeBtn.addEventListener("click", toggleDarkMode);
