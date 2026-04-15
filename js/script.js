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

/* ================= GALERI ========================================================================================= */

// ================= DATABASE (LOCAL STORAGE) =================
function getBooks() {
  return JSON.parse(localStorage.getItem("books")) || [];
}

function saveBooks(books) {
  localStorage.setItem("books", JSON.stringify(books));
}

// ================= INIT DATA (BIAR ADA ISI AWAL) =================
if (!localStorage.getItem("books")) {
  const defaultBooks = [
    {
      title: "Bumi Cinta",
      category: "Fiction",
      img: "../src/book-Bumu Cinta Cetakan 1.webp",
    },
    {
      title: "Eleanor & Park",
      category: "Fiction",
      img: "../src/book-Eleanor & Park.webp",
    },
    {
      title: "Fangirl",
      category: "Fiction",
      img: "../src/book-Fangirl.webp",
    },
    {
      title: "Remember When",
      category: "Fiction",
      img: "../src/book-Remember When.webp",
    },
    {
      title: "Chicken Soup for The Soul",
      category: "Fiction",
      img: "../src/book-Chicken Soup for The Soul.webp",
    },












    {
      title: "Entrepreneurship : Theory, Process, Practice",
      category: "KPS",
      img: "../src/book-Bumu Cinta Cetakan 1.webp",
    },
    {
      title: "Advanced Accounting gk=lobal edition",
      category: "KPS",
      img: "../src/book-Eleanor & Park.webp",
    },
    {
      title: "Mathematics for Economics and Business",
      category: "KPS",
      img: "../src/book-Fangirl.webp",
    },
    {
      title: "Pearson New International Edition : Starting out with programming logic and design",
      category: "KPS",
      img: "../src/book-Remember When.webp",
    },
    {
      title: "Concepts of Programming Languages",
      category: "KPS",
      img: "../src/book-Chicken Soup for The Soul.webp",
    },
    {
      title: "Executive's guide to IT governance: Improving systems processess with service management,COBIT,and ITIL",
      category: "KPS",
      img: "../src/book-Bumu Cinta Cetakan 1.webp",
    },
    {
      title: "Organizational behavior: a Practical,problem-solving approach",
      category: "KPS",
      img: "../src/book-Eleanor & Park.webp",
    },
    {
      title: "Aplikasi Analisis Multivariete dengan program IBM SPSS 23",
      category: "KPS",
      img: "../src/book-Fangirl.webp",
    },
    {
      title: "Computer Organization and Architecture : Design for Performance",
      category: "KPS",
      img: "../src/book-Remember When.webp",
    },
    {
      title: "Compensation",
      category: "KPS",
      img: "../src/book-Chicken Soup for The Soul.webp",
    },  
    {
      title: "Computer Desktop Encyclopedia",
      category: "Reference",
      img: "../src/book-Bumu Cinta Cetakan 1.webp",
    },
    {
      title: "Kamus Lengkap Ekonomi",
      category: "Reference",
      img: "../src/book-Eleanor & Park.webp",
    },
    {
      title: "Standar Akuntansi Keuangan Per 1 Oktober 2004",
      category: "Referenxe",
      img: "../src/book-Fangirl.webp",
    },
    {
      title: "Kamus lengkap : Indonesia-Inggris,Inggris-Indonesia",
      category: "Reference",
      img: "../src/book-Remember When.webp",
    },
    {
      title: "KUP Ketentuan umum dan Tata Cara Perpajakan",
      category: "Reference",
      img: "../src/book-Chicken Soup for The Soul.webp",
    },
    {
      title: "Kamus Pajak: Daftar singkatan , istilah perpajakan, akuntansi, bea dan cukai, serta peradilan pajak disertai dengan penjelasan",
      category: "Reference",
      img: "../src/book-Bumu Cinta Cetakan 1.webp",
    },
    {
      title: "Standar Profesional Akuntan Publik : Standar Audit (SA) 530 Sampling Audit",
      category: "Reference",
      img: "../src/book-Eleanor & Park.webp",
    },
    {
      title: "Standar Profesional Akuntan Publik:31 maret 2011",
      category: "Reference",
      img: "../src/book-Fangirl.webp",
    },
    {
      title: "Standar Profesional Akuntan Publik: Seri Penilaian Risiko dan Respons Terhadap Risiko yang dinilai",
      category: "Reference",
      img: "../src/book-Remember When.webp",
    },
    {
      title: "Kamus Praktis sehari-hari bahasa indonesia-mandarin",
      category: "Reference",
      img: "../src/book-Chicken Soup for The Soul.webp",
    },
    {
      title: "75++ Proyek Desain : Trik penting yang wajib diketahui untuk menguasai photoshop",
      category: "Text Book",
      img: "../src/book-Remember When.webp",
    },
    {
      title: "Tip dan Trik Meningkatkan Efisiensi, Produktivitas dan Profitabilitas Ketentuan umum dan Tata Cara Perpajakan",
      category: "Text Book",
      img: "../src/book-Chicken Soup for The Soul.webp",
    },
    {
      title: "Kamus Pajak: Daftar singkatan , istilah perpajakan, akuntansi, bea dan cukai, serta peradilan pajak disertai dengan penjelasan",
      category: "Reference",
      img: "../src/book-Bumu Cinta Cetakan 1.webp",
    },
    {
      title: "Standar Profesional Akuntan Publik : Standar Audit (SA) 530 Sampling Audit",
      category: "Reference",
      img: "../src/book-Eleanor & Park.webp",
    },
    {
      title: "Standar Profesional Akuntan Publik:31 maret 2011",
      category: "Reference",
      img: "../src/book-Fangirl.webp",
    },
    {
      title: "Standar Profesional Akuntan Publik: Seri Penilaian Risiko dan Respons Terhadap Risiko yang dinilai",
      category: "Reference",
      img: "../src/book-Remember When.webp",
    },
    {
      title: "Kamus Praktis sehari-hari bahasa indonesia-mandarin",
      category: "Reference",
      img: "../src/book-Chicken Soup for The Soul.webp",
    },
    
  ];
  saveBooks(defaultBooks);
}

// ================= TEMPLATE CARD =================
function createCardAdmin(book, index) {
  return `
    <div class="book-card" data-index="${index}">
      <img src="${book.img}">

      <div class="book-info">
        <h3>${book.title}</h3>
        <p>Kategori: ${book.category}</p>

        <div class="book-actions">
          <button class="btn-detail">Detail</button>
          <button class="btn-edit">Edit</button>
          <button class="btn-delete">Hapus</button>
        </div>
      </div>
    </div>
  `;
}

function createCardUser(book, index) {
  return `
    <div class="book-card" data-index="${index}">
      <img src="${book.img}">

      <div class="book-info">
        <h3>${book.title}</h3>
        <p>Kategori: ${book.category}</p>

        <div class="book-actions">
          <button class="btn-detail">Detail</button>
        </div>
      </div>
    </div>
  `;
}

// ================= RENDER ADMIN=================
const bookGrid = document.getElementById("bookGrid");
const dataCount = document.getElementById("dataCount");

function renderBooks() {
  const books = getBooks();
  bookGrid.innerHTML = "";

  books.forEach((book, index) => {
    bookGrid.innerHTML += createCardAdmin(book, index);
  });

  updateCount();
}

// ================= COUNT =================
function updateCount() {
  const total = getBooks().length;
  dataCount.textContent = total;
}

// ================= DELETE ONE =================
function deleteBook(index) {
  let books = getBooks();
  books.splice(index, 1);
  saveBooks(books);
  renderBooks();
}

// ================= DELETE ALL =================
const btnHapusSemua = document.getElementById("btnHapusSemua");

btnHapusSemua.addEventListener("click", () => {
  const total = getBooks().length;

  if (total === 0) return;

  if (confirm(`Yakin hapus semua (${total} buku)?`)) {
    localStorage.removeItem("books");
    renderBooks();
  }
});

// ================= EVENT LISTENER =================
document.addEventListener("click", function (e) {
  const card = e.target.closest(".book-card");
  if (!card) return;

  const index = card.dataset.index;

  // DELETE
  if (e.target.classList.contains("btn-delete")) {
    if (confirm("Yakin hapus buku ini?")) {
      deleteBook(index);
    }
  }

  // EDIT (sementara)
  if (e.target.classList.contains("btn-edit")) {
    alert("Fitur edit nanti kita bikin 😎");
  }

  // DETAIL
  if (e.target.classList.contains("btn-detail")) {
    const books = getBooks();
    const book = books[index];
    alert(`Judul: ${book.title}\nKategori: ${book.category}`);
  }
});

// ================= TAMBAH BUKU =================
function addBook(book) {
  let books = getBooks();
  books.push(book);
  saveBooks(books);
  renderBooks();
}

// ================= INIT =================
renderBooks();


