/* ================= BG-SLIDER ================= */
const bgslide = document.getElementById("bg-slide");
const images = ["../src/bg1.webp", "../src/bg2.webp", "../src/bg3.webp", "../src/bg4.webp"];

if (bgslide) {
  let i = 0;
  bgslide.style.backgroundImage = `url(${images[0]})`;

  setInterval(() => {
    bgslide.style.backgroundImage = `url(${images[i]})`;
    i = (i + 1) % images.length;
  }, 5000);
}

/* ================= BOOK SLIDER ================= */
const track = document.getElementById("bookTrack");

if (track) {
  let scrollAmount = 0;

  setInterval(() => {
    scrollAmount += 140;

    if (scrollAmount >= track.scrollWidth - track.clientWidth) {
      scrollAmount = 0;
    }

    track.style.transform = `translateX(-${scrollAmount}px)`;
  }, 2000);
}

/* ================= POP-UP ADVANCED ================= */
const openBtn = document.getElementById("openAdvanced");
const modalAdvanced = document.getElementById("advanced-pop-up");
const closeBtn = document.querySelector(".close");

if (openBtn && modalAdvanced && closeBtn) {
  openBtn.addEventListener("click", (e) => {
    e.preventDefault();
    modalAdvanced.style.display = "block";
  });

  closeBtn.addEventListener("click", () => {
    modalAdvanced.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modalAdvanced) {
      modalAdvanced.style.display = "none";
    }
  });
}

/* ================= AMBIL DATA DARI ADMIN ================= */
function getBooks() {
  return JSON.parse(localStorage.getItem("books")) || [];
}

/* ================= FALLBACK DATA ================= */
const defaultBooks = [
  {
    title: "Bumi Cinta",
    category: "Novel",
    img: "../src/book-Bumu Cinta Cetakan 1.webp",
  },
  {
    title: "Eleanor & Park",
    category: "Romance",
    img: "src/book-Eleanor & Park.webp",
  },
  {
    title: "Fangirl",
    category: "Teen",
    img: "../src/book-Fangirl.webp",
  },
];

/* ================= RENDER ================= */
const bookGrid = document.getElementById("bookGrid");

function renderBooks() {
  if (!bookGrid) return;

  let books = getBooks();

  // kalau kosong pakai default
  if (books.length === 0) {
    books = defaultBooks;
  }

  bookGrid.innerHTML = "";

  books.forEach((book) => {
    bookGrid.innerHTML += `
      <div class="book-card">
        <img src="${book.img}">
        <div class="book-info">
          <h3>${book.title}</h3>
          <button class="btn-detail">Detail</button>
        </div>
      </div>
    `;
  });
}

/* ================= MODAL DETAIL ================= */
const modal = document.getElementById("detailModal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalCategory = document.getElementById("modalCategory");

/* ================= EVENT ================= */
document.addEventListener("click", function (e) {
  // DETAIL
  if (e.target.classList.contains("btn-detail")) {
    const card = e.target.closest(".book-card");

    const title = card.querySelector("h3").innerText;
    const img = card.querySelector("img").src;

    if (modal) {
      modal.style.display = "block";
      modalImg.src = img;
      modalTitle.innerText = title;
      modalCategory.innerText = "Kategori: -";
    }
  }

  // CLOSE MODAL (X)
  if (e.target.classList.contains("close-modal")) {
    modal.style.display = "none";
  }

  // CLOSE MODAL (klik luar)
  if (e.target.id === "detailModal") {
    modal.style.display = "none";
  }
});

/* ================= INIT ================= */
renderBooks();
