/* ─── Data ─── */

const restaurants = [
  {
    id: "rafaels",
    name: "Rafael's Kitchen & Mad Coffee",
    rating: "4.7",
    reviews: 597,
    price: "$10–20",
    type: "Cafe / Brunch",
    tags: ["Outdoor seating", "Vegan options", "Wi-Fi"],
    address: "201 Sandpointe Ave Suite 150, Santa Ana, CA 92707",
    phone: "7148844559",
    phoneDisplay: "(714) 884-4559",
    hours: "Open · Closes 9 PM",
    orderUrl: "https://www.toasttab.com",
    mapQuery: "201+Sandpointe+Ave+Suite+150+Santa+Ana+CA+92707",
  },
  {
    id: "bite",
    name: "The Bite Club",
    rating: "4.8",
    reviews: 29,
    price: "$10–20",
    type: "Sandwich Shop",
    tags: ["Vegetarian options", "Wi-Fi", "No reservations"],
    address: "3017 S Harbor Blvd, Santa Ana, CA 92704",
    phone: "6572670307",
    phoneDisplay: "(657) 267-0307",
    hours: "Open · Closes 2 PM",
    orderUrl: "https://thebiteclubsa.square.site",
    mapQuery: "3017+S+Harbor+Blvd+Santa+Ana+CA+92704",
  },
];

const rafaelsMenu = [
  { name: "French Toast with Berries and Syrup", category: "Brunch", price: "$13", desc: "Thick-cut brioche, fresh berries, maple syrup, and powdered sugar.", popular: true },
  { name: "Chilaquiles", category: "Brunch", price: "$14", desc: "Tortilla chips simmered in salsa verde with eggs, crema, and queso fresco.", popular: true },
  { name: "Chicken Pesto Panini", category: "Sandwich", price: "$12", desc: "Grilled chicken, basil pesto, mozzarella, and roasted red peppers on ciabatta." },
  { name: "Cappuccino", category: "Coffee", price: "$4.50", desc: "Double espresso with velvety steamed milk and microfoam.", popular: true },
  { name: "Potato Burrito", category: "Brunch", price: "$11", desc: "Flour tortilla stuffed with seasoned potatoes, eggs, cheese, and salsa." },
  { name: "Habibi Bites", category: "Small Plates", price: "$9", desc: "Mediterranean-inspired mezze with hummus, olives, and warm pita." },
  { name: "Turkey Sausage Breakfast Burrito", category: "Brunch", price: "$12", desc: "Scrambled eggs, turkey sausage, cheddar, and salsa in a flour tortilla." },
  { name: "Chicken Salad", category: "Sandwich", price: "$11", desc: "House-made chicken salad on toasted sourdough with mixed greens.", popular: true },
  { name: "Farmer Boy Omelette", category: "Brunch", price: "$14", desc: "Three-egg omelette with ham, bell peppers, onions, and cheddar." },
  { name: "Denver Omelette", category: "Brunch", price: "$14", desc: "Classic Denver with ham, onions, bell peppers, and cheddar.", popular: true },
  { name: "Bourbon Caramel Latte", category: "Coffee", price: "$6", desc: "Espresso with bourbon caramel syrup and steamed milk." },
  { name: "Short Rib Sandwich", category: "Sandwich", price: "$16", desc: "Braised short rib, horseradish aioli, and pickled onions on a baguette." },
  { name: "Flatbread", category: "Small Plates", price: "$10", desc: "Crispy flatbread with seasonal toppings and olive oil drizzle." },
  { name: "Custard", category: "Dessert", price: "$7", desc: "Vanilla bean custard with fresh berries and a honey drizzle." },
  { name: "Smoked Salmon Lox Bagel", category: "Brunch", price: "$14", desc: "Everything bagel with cream cheese, lox, capers, and red onion." },
];

const biteMenu = [
  { name: "The Brawler", category: "Signature", price: "$14", desc: "Chorizo and eggs with our house-made aioli on a toasted brioche bun." },
  { name: "The Enforcer", category: "Signature", price: "$16", desc: "Bulgogi kimchi with pickled jalapeños, sesame, and sriracha crema." },
  { name: "Breakfast Burrito", category: "Brunch", price: "$12", desc: "Flour tortilla, scrambled eggs, cheddar, hash browns, and salsa verde." },
  { name: "Avocado Toast", category: "Brunch", price: "$11", desc: "Sourdough, smashed avocado, chili flakes, and microgreens." },
  { name: "Grilled Cheese", category: "Sandwich", price: "$10", desc: "Sharp cheddar and mozzarella on sourdough with a side of tomato soup." },
  { name: "Vegan BLT", category: "Sandwich", price: "$13", desc: "Smoky tempeh bacon, lettuce, tomato, and vegan mayo on multigrain." },
  { name: "Iced Latte", category: "Coffee", price: "$5", desc: "Double espresso over ice with oat or whole milk." },
  { name: "Cold Brew", category: "Coffee", price: "$4.50", desc: "Slow-steeped for 18 hours, smooth and bold." },
  { name: "Horchata Latte", category: "Coffee", price: "$6", desc: "House horchata with a double shot of espresso." },
];

const rafaelsReviews = [
  { text: "The cutest place with yummy home cooked French food!!", author: "Google Reviewer", rating: 5 },
  { text: "Ordered the steak and eggs with fries for breakfast and it blew me away.", author: "Google Reviewer", rating: 5 },
  { text: "Vegan burrito was delicious and staff was very kind!", author: "Google Reviewer", rating: 5 },
];

const biteReviews = [
  { text: "Tasty, well priced, great service.", author: "Google Reviewer", rating: 5 },
  { text: "No customer should ever be served burned food.", author: "Google Reviewer", rating: 2 },
  { text: "This was an incredible place to eat with some very cute wall/logo design.", author: "Google Reviewer", rating: 5 },
];

const rafaelsCategories = ["All", "Brunch", "Sandwich", "Coffee", "Small Plates", "Dessert"];
const biteCategories = ["All", "Signature", "Brunch", "Sandwich", "Coffee"];

let rafaelsActiveFilter = "All";
let biteActiveFilter = "All";

/* ─── Render Restaurants ─── */

function renderRestaurants() {
  const grid = document.getElementById("restaurantGrid");
  grid.innerHTML = restaurants.map((r, i) => `
    <div class="restaurant-card animate-fadeUp" style="animation-delay: ${i * 80}ms" onclick="revealRestaurant('${r.id}')">
      <div class="card-rating">&#9733; ${r.rating} &middot; (${r.reviews})</div>
      <h3>${r.name}</h3>
      <p class="card-type">${r.type}</p>
      <p class="card-price">${r.price} per person</p>
      <div class="card-tags">
        ${r.tags.map(t => `<span>${t}</span>`).join("")}
      </div>
      <p class="card-address">${r.address}</p>
      <button class="reveal-btn">View Details</button>
    </div>
  `).join("");
}

/* ─── Reveal / Hide ─── */

function revealRestaurant(id) {
  document.getElementById("restaurants").classList.add("hidden");
  document.getElementById("dirHero").classList.add("hidden");
  document.getElementById("about").classList.add("hidden");
  document.getElementById("mainFooter").classList.add("hidden");

  document.querySelectorAll(".detail-section").forEach(s => s.classList.add("hidden"));
  document.getElementById(id + "Section").classList.remove("hidden");

  window.scrollTo({ top: 0, behavior: "smooth" });

  if (id === "rafaels") {
    renderRafaelsMenu();
    renderRafaelsReviews();
    renderRafaelsFilters();
  } else if (id === "bite") {
    renderBiteMenu();
    renderBiteReviews();
    renderBiteFilters();
  }
}

function showDirectory() {
  document.querySelectorAll(".detail-section").forEach(s => s.classList.add("hidden"));
  document.getElementById("restaurants").classList.remove("hidden");
  document.getElementById("dirHero").classList.remove("hidden");
  document.getElementById("about").classList.remove("hidden");
  document.getElementById("mainFooter").classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ─── Rafael's Menu ─── */

function renderRafaelsFilters() {
  const el = document.getElementById("rafaelsMenuFilters");
  if (!el) return;
  el.innerHTML = rafaelsCategories.map(cat => `
    <button class="menu-filter ${cat === rafaelsActiveFilter ? "active" : ""}" onclick="setRafaelsFilter('${cat}')">${cat}</button>
  `).join("");
}

function setRafaelsFilter(cat) {
  rafaelsActiveFilter = cat;
  renderRafaelsFilters();
  renderRafaelsMenu();
}

function renderRafaelsMenu() {
  const grid = document.getElementById("rafaelsMenuGrid");
  if (!grid) return;
  const items = rafaelsActiveFilter === "All" ? rafaelsMenu : rafaelsMenu.filter(m => m.category === rafaelsActiveFilter);
  grid.innerHTML = items.map((item, i) => `
    <div class="menu-item animate-fadeUp" style="animation-delay: ${i * 60}ms">
      <span class="menu-price">${item.price}</span>
      <h4>${item.name}${item.popular ? ' <span style="color:var(--gold);font-size:0.75rem;">POPULAR</span>' : ""}</h4>
      <p class="menu-category">${item.category}</p>
      <p class="menu-desc">${item.desc}</p>
    </div>
  `).join("");
}

function renderRafaelsReviews() {
  const grid = document.getElementById("rafaelsReviewsGrid");
  if (!grid) return;
  grid.innerHTML = rafaelsReviews.map(r => `
    <div class="review-card">
      <div class="review-stars">${"&#9733;".repeat(r.rating)}${"&#9734;".repeat(5 - r.rating)}</div>
      <p class="review-text">&ldquo;${r.text}&rdquo;</p>
      <p class="review-author">${r.author}</p>
    </div>
  `).join("");
}

/* ─── Bite Club Menu ─── */

function renderBiteFilters() {
  const el = document.getElementById("biteMenuFilters");
  if (!el) return;
  el.innerHTML = biteCategories.map(cat => `
    <button class="menu-filter ${cat === biteActiveFilter ? "active" : ""}" onclick="setBiteFilter('${cat}')">${cat}</button>
  `).join("");
}

function setBiteFilter(cat) {
  biteActiveFilter = cat;
  renderBiteFilters();
  renderBiteMenu();
}

function renderBiteMenu() {
  const grid = document.getElementById("biteMenuGrid");
  if (!grid) return;
  const items = biteActiveFilter === "All" ? biteMenu : biteMenu.filter(m => m.category === biteActiveFilter);
  grid.innerHTML = items.map((item, i) => `
    <div class="menu-item animate-fadeUp" style="animation-delay: ${i * 60}ms">
      <span class="menu-price">${item.price}</span>
      <h4>${item.name}</h4>
      <p class="menu-category">${item.category}</p>
      <p class="menu-desc">${item.desc}</p>
    </div>
  `).join("");
}

function renderBiteReviews() {
  const grid = document.getElementById("biteReviewsGrid");
  if (!grid) return;
  grid.innerHTML = biteReviews.map(r => `
    <div class="review-card">
      <div class="review-stars">${"&#9733;".repeat(r.rating)}${"&#9734;".repeat(5 - r.rating)}</div>
      <p class="review-text">&ldquo;${r.text}&rdquo;</p>
      <p class="review-author">${r.author}</p>
    </div>
  `).join("");
}

/* ─── Modal ─── */

let modalTarget = null;

function openModal(id) {
  modalTarget = id;
  const modal = document.getElementById("menuModal");
  const list = document.getElementById("modalMenuList");
  const orderBtn = document.getElementById("modalOrderBtn");
  const title = document.getElementById("modalTitle");

  const data = id === "rafaels" ? { items: rafaelsMenu, url: "https://www.toasttab.com", name: "Rafael's Kitchen" }
    : { items: biteMenu, url: "https://thebiteclubsa.square.site", name: "The Bite Club" };

  title.textContent = data.name + " — Full Menu";
  orderBtn.href = data.url;

  list.innerHTML = data.items.map(item => `
    <div class="modal-item">
      <div>
        <h4>${item.name}${item.popular ? ' <span style="color:var(--gold);font-size:0.75rem;">POPULAR</span>' : ""}</h4>
        <p>${item.desc}</p>
      </div>
      <span class="modal-price">${item.price}</span>
    </div>
  `).join("");

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeModal(e) {
  if (e && e.target !== e.currentTarget) return;
  document.getElementById("menuModal").classList.add("hidden");
  document.body.style.overflow = "";
}

/* ─── Init ─── */

document.getElementById("year").textContent = new Date().getFullYear();
renderRestaurants();
