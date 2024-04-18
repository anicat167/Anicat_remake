document.addEventListener("DOMContentLoaded", () => {
  // Navbar for mobile //

  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav_menu");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });
  document.querySelectorAll(".nav_menus").forEach((n) =>
    n.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    })
  );

  // Light and Dark buttons //

  const buttonLight = document.querySelector(".footer_button_light");
  const buttonDark = document.querySelector(".footer_button_dark");
  const section = document.querySelector("section");
  const mainContent = document.querySelector(".main_content");

  buttonLight.addEventListener("click", () => {
    section.style.backgroundColor = "whitesmoke";
    mainContent.style.backgroundColor = "whitesmoke";
  });
  buttonDark.addEventListener("click", () => {
    section.style.backgroundColor = "#24252a";
    mainContent.style.backgroundColor = "#24252a";
  });

  // Search Bar //

  /*   // Function to render the cards
  function renderCards(cards) {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    cards.forEach((card) => {
      const cardDiv = document.createElement("div");
      cardDiv.classList.add("card");
      cardDiv.innerHTML = `
          <p>${card}</p>
        `;
      cardContainer.appendChild(cardDiv);
    });
  }

  // Function to filter the cards based on the search query
  function filterCards(query) {
    const cardContainer = document.getElementById("card-container");
    const cards = Array.from(cardContainer.getElementsByClassName("card"));
    return cards.filter((card) =>
      card
        .querySelector("p")
        .textContent.toLowerCase()
        .includes(query.toLowerCase())
    );
  }

  // Event listener for the search input field
  const searchInput = document.getElementById("search-input");
  searchInput.addEventListener("input", () => {
    const query = searchInput.value;
    const filteredCards = filterCards(query);
    renderCards(
      filteredCards.map((card) => card.querySelector("p").textContent)
    );
  });

  // Render the initial cards
  renderCards([
    "Wind Breaker",
    "One Piece",
    "Third season of Kono Subarashii Sekai ni Shukufuku wo!",
    "Third season of Tensei shitara Slime Datta Ken.",
    "Boku no Hero Academia 7th Season",
  ]); */
  // Function to filter the cards based on the search query
  const searchInput = document.querySelector('#search-input');
  searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
  
      const searchQuery = event.target.value.toLowerCase();
      const cards = document.querySelectorAll('.card');
  
      cards.forEach((card) => {
        const cardName = card.querySelector('p').innerText.toLowerCase();
  
        if (cardName.includes(searchQuery)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    }
  });
});
