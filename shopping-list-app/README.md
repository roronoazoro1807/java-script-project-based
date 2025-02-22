# Shopping List App

This is a simple Shopping List application where users can add, edit, delete, and mark items as purchased. It also includes a dark mode toggle feature.

##  Project Structure

```
 shopping-list-app
│──  index.html    # Main HTML structure
│── style.css     # CSS styles for UI and dark mode
│──  script.js     # JavaScript logic for functionality
```

##  Features

- Add new shopping items with price and quantity  
- Edit existing items  
- Delete items from the list  
- Mark items as purchased/unpurchased  
- Display total cost of all items  
- Toggle between light and dark mode  



##  How to Use

1. **Enter item details** (Name, Price, Quantity) and click `Add Item`.
2. The item appears in the list with buttons to:
   -  **Edit**: Modify item details.
   -  **Purchased/Undo**: Mark as purchased or undo.
   -  **Delete**: Remove item from the list.
3. The total cost updates automatically.
4. Click `Toggle Theme` to switch between **light and dark mode**.

## Code Explanation

###  `script.js`
- **Selecting Elements**: Uses `document.getElementById()` to get HTML elements.
- **Adding Items**: Creates an item object and updates the list.
- **Editing Items**: Allows modifying item details using `prompt()`.
- **Deleting Items**: Removes an item from the list.
- **Marking as Purchased**: Toggles purchase status.
- **Rendering Items**: Updates the UI and calculates total cost.
- **Dark Mode Toggle**: Adds/removes `dark-mode` class.

###  `style.css`
- Styles the shopping list, buttons, and layout.
- Includes dark mode styles.

### `index.html`
- Contains input fields for item details.
- Displays the shopping list and total cost.
- Includes buttons for theme toggle.

##  Technologies Used

- **HTML** - Structure
- **CSS** - Styling & Dark Mode
- **JavaScript** - Functional Logic

---

