let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.addEventListener("DOMContentLoaded", () => {
  fetch("/api/products")
    .then(res => res.json())
    .then(products => {
      const container = document.getElementById("product-container");
      container.innerHTML = "";

      products.forEach((product, index) => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
          <img src="/images/${product.img}" alt="${product.name}" />
          <div class="details">
            <h3>${product.name}</h3>
            <p>${product.desc}</p>
            <div class="price">₹${product.price}</div>
            <button class="btn" onclick="addToCart(${product.id})">Add to Cart</button>
          </div>
        `;
        container.appendChild(card);
      });
    });
});

function addToCart(id) {
  fetch("/api/products")
    .then(res => res.json())
    .then(products => {
      const item = products.find(p => p.id === id);
      const existing = cart.find(p => p.id === id);
      if (existing) existing.qty++;
      else cart.push({ ...item, qty: 1 });
      localStorage.setItem("cart", JSON.stringify(cart));
      alert("Added to cart");
    });
}
