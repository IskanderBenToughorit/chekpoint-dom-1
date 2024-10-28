document.addEventListener("DOMContentLoaded", function() {
    const cartItemsContainer = document.querySelector(".cart");
    const totalPriceElement = document.getElementById("total-price");

    function updateTotalPrice() {
        let total = 0;
        const cartItems = document.querySelectorAll(".cart-item");
        cartItems.forEach(item => {
            const itemPrice = parseFloat(item.getAttribute("data-price"));
            const itemQuantity = parseInt(item.querySelector(".quantity").textContent);
            total += itemPrice * itemQuantity;
        });
        totalPriceElement.textContent = `Prix Total : ${total} €`;
    }

    function initializeCartItems() {
        const cartItems = document.querySelectorAll(".cart-item");
        cartItems.forEach(item => {
            const quantityElement = item.querySelector(".quantity");
            const incrementButton = item.querySelector(".increment");
            const decrementButton = item.querySelector(".decrement");
            const removeButton = item.querySelector(".remove-btn");
            const likeButton = item.querySelector(".like-btn");

            incrementButton.addEventListener("click", function() {
                IncrementClick(quantityElement);
            });

            decrementButton.addEventListener("click", function() {
                DecrementClick(quantityElement);
            });

            removeButton.addEventListener("click", function() {
                RemoveItem(item);
            });

            likeButton.addEventListener("click", function() {
                ToggleLike(likeButton);
            });
        });
    }

    function IncrementClick(quantityElement) {
        incrementQuantity(quantityElement);
        updateTotalPrice();
    }

    function DecrementClick(quantityElement) {
        decrementQuantity(quantityElement);
        updateTotalPrice();
    }

    function RemoveItem(item) {
        removeItem(item);
        updateTotalPrice();
    }

    function ToggleLike(likeButton) {
        toggleLike(likeButton);
    }

    function incrementQuantity(quantityElement) {
        let quantity = parseInt(quantityElement.textContent);
        quantity++;
        quantityElement.textContent = quantity;
    }

    function decrementQuantity(quantityElement) {
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 1) {
            quantity--;
            quantityElement.textContent = quantity;
        }
    }

    function removeItem(item) {
        item.remove();
    }

    function toggleLike(likeButton) {
        if (likeButton.style.color === "red") {
            likeButton.style.color = "black";
        } else {
            likeButton.style.color = "red";
        }
    }
    

    initializeCartItems();
    updateTotalPrice();
});
