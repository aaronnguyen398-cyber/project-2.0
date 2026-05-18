const restaurants = [
  {
    id: "rafaels", // unique identifier for navigation
    name: "Rafael's Kitchen & Mad Coffee", // restaurant name
    rating: "4.7", // rating shown on card
    reviews: 597, // number of reviews shown
    price: "$10–20", // price range
    type: "Cafe / Brunch", // cuisine type
    tags: ["Outdoor seating", "Vegan options", "Wi-Fi"], // feature tags
    address: "201 Sandpointe Ave Suite 150, Santa Ana, CA 92707", // address
    phone: "7148844559", // raw phone number
    phoneDisplay: "(714) 884-4559", // formatted phone number
    hours: "Open · Closes 9 PM", // business hours
    orderUrl: "https://www.toasttab.com", // ordering link
    mapQuery: "201+Sandpointe+Ave+Suite+150+Santa+Ana+CA+92707", // map search string
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

  {
    id: "luna",
    name: "Luna Bistro",
    rating: "4.9",
    reviews: 184,
    price: "$20–30",
    type: "Modern Mexican",
    tags: ["Cocktails", "Outdoor seating", "Live music"],
    address: "412 N Main St, Santa Ana, CA 92701",
    phone: "7145551122",
    phoneDisplay: "(714) 555-1122",
    hours: "Open · Closes 11 PM",
    orderUrl: "https://www.opentable.com",
    mapQuery: "412+N+Main+St+Santa+Ana+CA+92701",
  },
];

/* ─── Menus (NO COMMENTS as requested) ─── */

const rafaelsMenu = [
  { name: "French Toast with Berries and Syrup", category: "Brunch", price: "$13", desc: "Thick-cut brioche, fresh berries, maple syrup, and powdered sugar.", popular: true },
  { name: "Chilaquiles", category: "Brunch", price: "$14", desc: "Tortilla chips simmered in salsa verde with eggs, crema, and queso fresco.", popular: true },
  { name: "Chicken Pesto Panini", category: "Sandwich", price: "$12", desc: "Grilled chicken, basil pesto, mozzarella, and roasted red peppers on ciabatta." },
  { name: "Cappuccino", category: "Coffee", price: "$4.50", desc: "Double espresso with velvety steamed milk and microfoam.", popular: true },
  { name: "Potato Burrito", category: "Brunch", price: "$11", desc: "Flour tortilla stuffed with seasoned potatoes, eggs, cheese, and salsa." },
];

const biteMenu = [
  { name: "The Brawler", category: "Signature", price: "$14", desc: "Chorizo and eggs with house aioli on brioche." },
  { name: "The Enforcer", category: "Signature", price: "$16", desc: "Bulgogi kimchi with sesame and sriracha crema." },
  { name: "Breakfast Burrito", category: "Brunch", price: "$12", desc: "Eggs, cheddar, hash browns, and salsa verde." },
  { name: "Cold Brew", category: "Coffee", price: "$4.50", desc: "Slow-steeped for 18 hours, smooth and bold." },
];

const lunaMenu = [
  { name: "Birria Tacos", category: "Signature", price: "$16", desc: "Slow-braised beef tacos with consommé.", popular: true },
  { name: "Street Corn Fries", category: "Small Plates", price: "$11", desc: "Fries topped with elote crema and cotija." },
  { name: "Carne Asada Plate", category: "Entrees", price: "$24", desc: "Grilled steak with rice and beans." },
  { name: "Horchata Espresso Martini", category: "Cocktails", price: "$14", desc: "Espresso, horchata cream, vodka, and cinnamon." },
  { name: "Churro Cheesecake", category: "Dessert", price: "$9", desc: "Cheesecake with cinnamon sugar churro crust.", popular: true },
];

/* ─── Reviews (NO COMMENTS as requested) ─── */

const rafaelsReviews = [
  { text: "The cutest place with yummy home cooked French food!!", author: "Google Reviewer", rating: 5 },
  { text: "Ordered the steak and eggs with fries for breakfast and it blew me away.", author: "Google Reviewer", rating: 5 },
  { text: "Vegan burrito was delicious and staff was very kind!", author: "Google Reviewer", rating: 5 },
];

const biteReviews = [
  { text: "Tasty, well priced, great service.", author: "Google Reviewer", rating: 5 },
  { text: "This was an incredible place to eat.", author: "Google Reviewer", rating: 5 },
];

const lunaReviews = [
  { text: "Amazing tacos and cocktails.", author: "Google Reviewer", rating: 5 },
  { text: "Beautiful atmosphere and friendly staff.", author: "Google Reviewer", rating: 5 },
  { text: "Best churro cheesecake ever.", author: "Google Reviewer", rating: 5 },
];

/* ─── Categories ─── */

const rafaelsCategories = ["All", "Brunch", "Sandwich", "Coffee"]; // filter options
const biteCategories = ["All", "Signature", "Brunch", "Coffee"]; // filter options
const lunaCategories = ["All", "Signature", "Small Plates", "Entrees", "Cocktails", "Dessert"]; // filter options

let rafaelsActiveFilter = "All"; // current filter state
let biteActiveFilter = "All"; // current filter state
let lunaActiveFilter = "All"; // current filter state

/* ─── Render Restaurants ─── */

function renderRestaurants() {
  const grid = document.getElementById("restaurantGrid"); // container for cards

  grid.innerHTML = restaurants.map((r, i) => `
    <div class="restaurant-card animate-fadeUp"
         style="animation-delay:${i * 80}ms"
         onclick="revealRestaurant('${r.id}')">

      <div class="card-rating">
        &#9733; ${r.rating} &middot; (${r.reviews})
      </div>

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

  document.getElementById("restaurants").classList.add("hidden"); // hide homepage
  document.getElementById("dirHero").classList.add("hidden"); // hide hero
  document.getElementById("about").classList.add("hidden"); // hide about section
  document.getElementById("mainFooter").classList.add("hidden"); // hide footer

  document.querySelectorAll(".detail-section")
    .forEach(s => s.classList.add("hidden")); // hide all detail pages

  document.getElementById(id + "Section")
    .classList.remove("hidden"); // show selected restaurant page

  window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to top

  if (id === "rafaels") {
    renderRafaelsMenu();
    renderRafaelsReviews();
    renderRafaelsFilters();
  } else if (id === "bite") {
    renderBiteMenu();
    renderBiteReviews();
    renderBiteFilters();
  } else if (id === "luna") {
    renderLunaMenu();
    renderLunaReviews();
    renderLunaFilters();
  }
}

/* ─── Show Directory ─── */

function showDirectory() {

  document.querySelectorAll(".detail-section")
    .forEach(s => s.classList.add("hidden")); // hide all detail pages

  document.getElementById("restaurants").classList.remove("hidden"); // show homepage
  document.getElementById("dirHero").classList.remove("hidden"); // show hero
  document.getElementById("about").classList.remove("hidden"); // show about
  document.getElementById("mainFooter").classList.remove("hidden"); // show footer

  window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to top
}

/* ─── Generic Render Helpers ─── */

function renderFilters(containerId, categories, active, setterName) {

  const el = document.getElementById(containerId); // filter container
  if (!el) return; // stop if missing

  el.innerHTML = categories.map(cat => `
    <button
      class="menu-filter ${cat === active ? "active" : ""}"
      onclick="${setterName}('${cat}')">
      ${cat}
    </button>
  `).join("");
}

function renderMenu(gridId, items) {

  const grid = document.getElementById(gridId); // menu container
  if (!grid) return; // safety check

  grid.innerHTML = items.map((item, i) => `
    <div class="menu-item animate-fadeUp"
         style="animation-delay:${i * 60}ms">

      <span class="menu-price">${item.price}</span>

      <h4>
        ${item.name}
        ${item.popular ? '<span style="color:var(--gold);font-size:0.75rem;">POPULAR</span>' : ""}
      </h4>

      <p class="menu-category">${item.category}</p>

      <p class="menu-desc">${item.desc}</p>
    </div>
  `).join("");
}

function renderReviews(gridId, reviews) {

  const grid = document.getElementById(gridId); // review container
  if (!grid) return; // safety check

  grid.innerHTML = reviews.map(r => `
    <div class="review-card">

      <div class="review-stars">
        ${"&#9733;".repeat(r.rating)}
        ${"&#9734;".repeat(5 - r.rating)}
      </div>

      <p class="review-text">&ldquo;${r.text}&rdquo;</p>

      <p class="review-author">${r.author}</p>

    </div>
  `).join("");
}

/* ─── Restaurant Logic (Filters + Rendering) ─── */

function renderRafaelsFilters() {
  renderFilters("rafaelsMenuFilters", rafaelsCategories, rafaelsActiveFilter, "setRafaelsFilter");
}

function setRafaelsFilter(cat) {
  rafaelsActiveFilter = cat;
  renderRafaelsFilters();
  renderRafaelsMenu();
}

function renderRafaelsMenu() {

  const items =
    rafaelsActiveFilter === "All"
      ? rafaelsMenu
      : rafaelsMenu.filter(m => m.category === rafaelsActiveFilter);

  renderMenu("rafaelsMenuGrid", items);
}

function renderRafaelsReviews() {
  renderReviews("rafaelsReviewsGrid", rafaelsReviews);
}

/* ─── Bite Club Logic ─── */

function renderBiteFilters() {
  renderFilters("biteMenuFilters", biteCategories, biteActiveFilter, "setBiteFilter");
}

function setBiteFilter(cat) {
  biteActiveFilter = cat;
  renderBiteFilters();
  renderBiteMenu();
}

function renderBiteMenu() {

  const items =
    biteActiveFilter === "All"
      ? biteMenu
      : biteMenu.filter(m => m.category === biteActiveFilter);

  renderMenu("biteMenuGrid", items);
}

function renderBiteReviews() {
  renderReviews("biteReviewsGrid", biteReviews);
}

/* ─── Luna Bistro Logic ─── */

function renderLunaFilters() {
  renderFilters("lunaMenuFilters", lunaCategories, lunaActiveFilter, "setLunaFilter");
}

function setLunaFilter(cat) {
  lunaActiveFilter = cat;
  renderLunaFilters();
  renderLunaMenu();
}

function renderLunaMenu() {

  const items =
    lunaActiveFilter === "All"
      ? lunaMenu
      : lunaMenu.filter(m => m.category === lunaActiveFilter);

  renderMenu("lunaMenuGrid", items);
}

function renderLunaReviews() {
  renderReviews("lunaReviewsGrid", lunaReviews);
}

/* ─── Modal ─── */

function openModal(id) {

  const modal = document.getElementById("menuModal"); // modal container
  const list = document.getElementById("modalMenuList"); // menu list inside modal
  const orderBtn = document.getElementById("modalOrderBtn"); // order button
  const title = document.getElementById("modalTitle"); // modal title

  let data; // holds selected restaurant data

  if (id === "rafaels") {
    data = { items: rafaelsMenu, url: "https://www.toasttab.com", name: "Rafael's Kitchen" };
  } else if (id === "bite") {
    data = { items: biteMenu, url: "https://thebiteclubsa.square.site", name: "The Bite Club" };
  } else if (id === "luna") {
    data = { items: lunaMenu, url: "https://www.opentable.com", name: "Luna Bistro" };
  }

  title.textContent = data.name + " — Full Menu"; // set modal title
  orderBtn.href = data.url; // set order link

  list.innerHTML = data.items.map(item => `
    <div class="modal-item">

      <div>
        <h4>${item.name}</h4>
        <p>${item.desc}</p>
      </div>

      <span class="modal-price">${item.price}</span>

    </div>
  `).join("");

  modal.classList.remove("hidden"); // show modal
  document.body.style.overflow = "hidden"; // disable background scroll
}

function closeModal(e) {

  if (e && e.target !== e.currentTarget) return; // only close if background clicked

  document.getElementById("menuModal").classList.add("hidden"); // hide modal
  document.body.style.overflow = ""; // restore scroll
}

/* ─── Init ─── */

document.getElementById("year").textContent =
  new Date().getFullYear(); // set footer year automatically

renderRestaurants(); // render initial homepage cards