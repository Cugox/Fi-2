function displayCart() {
    const cartItemsContainer = document.getElementById('cartItems');
    const subtotalElement = document.getElementById('subtotal');
    const discountElement = document.getElementById('discount');
    const totalElement = document.getElementById('total');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartItemsContainer.innerHTML = '';

    function updateTotals() {
        let subtotal = 0;
        document.querySelectorAll('.quantity-input').forEach((input, index) => {
            const price = cart[index].price * 1000;
            const quantity = parseInt(input.value, 10);
            const itemSubtotal = price * quantity;
            subtotal += itemSubtotal;

            const subtotalCell = input.closest('tr').querySelector('[data-label="Subtotal"]');
            subtotalCell.textContent = `₦${itemSubtotal.toFixed(2)}`;
        });

        const discount = 0;
        const total = subtotal - discount;

        subtotalElement.textContent = `Subtotal: ₦${subtotal.toFixed(2)}`;
        discountElement.textContent = `Discount: ₦${discount.toFixed(2)}`;
        totalElement.textContent = `Total: ₦${total.toFixed(2)}`;
        document.getElementById('paymentTotal').innerHTML =`The total amout is <strong>₦${total.toFixed(2)}</strong>`;
    }

    function handleDelete(index) {
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCart();
    }

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<tr><td colspan="5">Your cart is empty.</td></tr>';
        subtotalElement.textContent = 'Subtotal: ₦0.00';
        discountElement.textContent = 'Discount: ₦0.00';
        totalElement.textContent = 'Total: ₦0.00';
        return;
    }

    cart.forEach((item, index) => {
        const itemRow = document.createElement('tr');

        itemRow.innerHTML = `
          <td data-label="Book"><img src="${item.image}" alt="${item.title}" class="cart-item-image"></td>
          <td data-label="Price">₦${(item.price * 1000).toFixed(2)}</td>
          <td data-label="Quantity"><input type="number" value="1" class="quantity-input" min="1" step="1" >
          <td data-label="Subtotal">₦${(item.price * 1000).toFixed(2)}</td>
          <td data-label="Remove"><button class="delete-button btn btn-danger">Remove</button></td>
      `;

        cartItemsContainer.appendChild(itemRow);

        itemRow.querySelector('.quantity-input').addEventListener('input', updateTotals);
        itemRow.querySelector('.delete-button').addEventListener('click', () => handleDelete(index));
    });

    updateTotals();
}

function checkout() {
    localStorage.removeItem('cart');
    alert('Thank you for your purchase! Please come back soon (❤ ω ❤)');
    window.location.href = '../landing.html';
}

// for my modal to hlp me

function modalHelpme() {
    const modal = document.querySelector('.modal2')
   
   const openModal = document.querySelector('.checkout-button')   
    const closeModal = document.querySelector('.close-button')
    openModal.addEventListener('click', () => {
    modal.showModal()

    });
    }

function generateRandomString() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < 12; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        document.getElementById('feedback').textContent = 'Copied!';
        setTimeout(() => document.getElementById('feedback').textContent = '', 2000);
    }).catch(err => console.error('Failed to copy: ', err));
}

function updateButtonState() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const checkoutButton = document.getElementById('checkoutButton');

    if (cart.length === 0) {
        checkoutButton.disabled = true;
    } else {
        checkoutButton.disabled = false;
    }
}


function openPaymentModal() {
    document.getElementById('paymentModal').showModal();
}

function closePaymentModal() {
    document.getElementById('paymentModal').close();
}

function handlePaymentSubmit(event) {
    event.preventDefault();
    closePaymentModal();
    document.getElementById('modal').showModal();
    document.getElementById('tracker').textContent = generateRandomString();
    
    
}

window.onload = function() {
    updateButtonState();
    modalHelpme();
    displayCart();

    const tracker = document.getElementById('tracker');
    tracker.onclick = () => copyToClipboard(tracker.textContent);

    
    document.getElementById('paymentForm').addEventListener('submit', handlePaymentSubmit);
};