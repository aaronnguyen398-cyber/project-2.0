/* =========================
   RESTAURANT DATA
   ========================= */

const restaurants = [
  {
    name: "Rafael's Kitchen & Mad Coffee",
    rating: 4.7,
    reviews: 597,
    price: "$10–20",
    tags: ["French", "Brunch", "Coffee", "Vegan options"],
    blurb: "The cutest place with yummy home-cooked French food and standout coffee.",
    page: "rafaels.html",
    unlocked: true,
  },
  {
    name: "Chapter One : the modern local",
    rating: 4.5,
    reviews: 1820,
    price: "$20–30",
    tags: ["American", "Cocktails", "Downtown"],
    blurb: "A downtown Santa Ana favorite for craft cocktails and elevated pub faregit ",
  },
  {
    name: "Playground",
    rating: 4.4,
    reviews: 2150,
    price: "$30–60",
    tags: ["New American", "Chef-driven"],
    blurb: "Adventurous, ever-changing menu in the heart of the Artists Village.",
  },
  {
    name: "El Mercado Modern Cuisine",
    rating: 4.6,
    reviews: 980,
    price: "$20–30",
    tags: ["Mexican", "Brunch", "Patio"],
    blurb: "Modern Mexican plates and weekend brunch with a lively patio.",
  },
  {
    name: "Lola Gaspar",
    rating: 4.4,
    reviews: 1340,
    price: "$20–30",
    tags: ["Spanish", "Tapas", "Bar"],
    blurb: "Spanish-Latin tapas, sangria and one of the best happy hours downtown.",
  },
  {
    name: "Taqueria Los Olivos",
    rating: 4.7,
    reviews: 760,
    price: "$5–15",
    tags: ["Tacos", "Casual", "Late night"],
    blurb: "No-frills tacos, salsas with personality, and lines that move fast.",
  },
];

/* 
This section stores all the restaurant information.
Each restaurant has details like its name, rating, price,
description, tags, and whether its page is available to open.
*/


/* =========================
   GET PAGE ELEMENTS
   ========================= */

const grid = document.getElementById("restGrid");
const modal = document.getElementById("restModal");
const frame = document.getElementById("restFrame");

/* 
This section connects JavaScript to the modal
on the page so the code can update them later.
*/


/* =========================
   STAR RATING FUNCTION
   ========================= */

function star(r){ 
  return "★".repeat(Math.round(r)) + "☆".repeat(5-Math.round(r)); 
}

/* 
This function converts a number rating into star symbols.
the 4.7 becomes ★★★★★
*/


/* =========================
   CREATE RESTAURANT CARDS
   ========================= */

restaurants.forEach((r, i) => {
  const card = document.createElement("article");

  card.className = "rest-card" + (r.unlocked ? "" : " locked");

  card.innerHTML = `
    <div class="rest-meta">
      <span class="star">${star(r.rating)}</span>
      <span>${r.rating} (${r.reviews})</span>
      <span>· ${r.price}</span>
    </div>

    <h3>${r.name}</h3>

    <p class="muted small">${r.blurb}</p>

    <div class="rest-tags">
      ${r.tags.map(t=>`<span class="tag">${t}</span>`).join("")}
    </div>

    <div class="rest-cta">
      ${r.unlocked ? "Reveal site →" : "Coming soon"}
    </div>
  `;

  if (r.unlocked) {
    card.addEventListener("click", () => openRestaurant(r.page));
  }

  grid.appendChild(card);
});

/* 
This section loops through every restaurant
and creates a card for it on the webpage.
It also makes unlocked restaurants clickable.
*/


/* =========================
   OPEN MODAL
   ========================= */

function openRestaurant(page){
  frame.src = page;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden","false");
  document.body.style.overflow = "hidden";
}

/* 
This function opens the popup modal
and loads the restaurant page inside it.
It also prevents the background from scrolling.
*/


/* =========================
   CLOSE MODAL
   ========================= */

function closeModal(){
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden","true");
  frame.src = "about:blank";
  document.body.style.overflow = "";
}

/* 
This function closes the popup modal,
clears the page inside it,
and restores scrolling on the main page.
*/


/* =========================
   CLOSE BUTTON EVENTS
   ========================= */

modal
  .querySelectorAll("[data-close]")
  .forEach(el => el.addEventListener("click", closeModal));

/* 
This section makes all close buttons
inside the modal close the popup when clicked.
*/


/* =========================
   ESCAPE KEY SUPPORT
   ========================= */

document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});

/* 
This section allows the user to press
the Escape key to close the popup modal.
*/


/* =========================
   FOOTER YEAR
   ========================= */

document.getElementById("year").textContent =
  new Date().getFullYear();

/* 
This section automatically displays
the current year in the footer.
*/