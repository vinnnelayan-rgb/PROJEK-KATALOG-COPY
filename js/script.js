// ================= TOGEL TEMA =================
const themeToggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");

  if (themeToggle) {
    themeToggle.innerHTML = "☀️ Light Mode";
  }
}
if (themeToggle) {
  themeToggle.addEventListener("click", function (e) {
    e.preventDefault();

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
      themeToggle.innerHTML = "☀️ Light Mode";
    } else {
      localStorage.setItem("theme", "light");
      themeToggle.innerHTML = "🌙 Dark Mode";
    }
  });
}


/* ================= BG-BERGERAK ================= */
const bgslide = document.getElementById("bg-slide");
const images = ["src/bg1.webp", "src/bg2.webp", "src/bg3.webp", "src/bg4.webp"];
if (bgslide) {
  let i = 0;
  bgslide.style.backgroundImage = `url(${images[0]})`;
  setInterval(() => {
    bgslide.style.backgroundImage = `url(${images[i]})`;
    i = (i + 1) % images.length;
  }, 5000);
}


/* ================= BOOK-BERGERAK ================= */
const track = document.getElementById("bookTrack");
if (track) {
  const books = getBooks();
  books.forEach((book, index) => {
    track.innerHTML += `
      <div class="book" data-index="${index}">
        <img src="${book.img}" alt="${book.title}">
      </div>
    `;
  });
  track.innerHTML += track.innerHTML;
  let scrollAmount = 0;
  setInterval(() => {
    scrollAmount += 0.5;
    if (scrollAmount >= track.scrollWidth / 2) {
      scrollAmount = 0;
    }
    track.style.transform = `translateX(-${scrollAmount}px)`;
  }, 20);
}
document.addEventListener("click", function (e) {
  const book = e.target.closest(".book");
  if (!book) return;
  const index = book.dataset.index;
  localStorage.setItem("openBookDetail", index);
  window.location.href = "user-galeri.html";
});


/* ================= POP-UP ADVANCED ================= */

const openBtn = document.getElementById("openAdvanced");

/* ===== CREATE POPUP FROM JS ===== */
const modalAdvanced = document.createElement("div");
modalAdvanced.id = "advanced-pop-up";
modalAdvanced.className = "pop-up";

modalAdvanced.innerHTML = `
    <div class="pop-up-container">
        <span class="close">&times;</span>

        <h2>ADVANCED SEARCH</h2>

        <form>
            <label>Judul:</label>
            <input type="text" class="komponen-advanced" placeholder="Masukkan Judul" />

            <label>Pengarang:</label>
            <input type="text" class="komponen-advanced" placeholder="Masukkan Nama Pengarang" />

            <label>Kategori:</label>
            <select class="komponen-advanced">
                <option value="" disabled selected hidden>All Collection</option>
                <option>Fiction</option>
                <option>KPS</option>
                <option>Reference</option>
                <option>Text Book</option>
            </select>

            <label>Tahun Terbit:</label>
            <input type="text" class="komponen-advanced" placeholder="Masukkan Tahun Terbit" />

            <button type="submit">Pencarian</button>
        </form>
    </div>
`;

/* ===== MASUKKAN KE BODY ===== */
document.body.appendChild(modalAdvanced);

/* ===== CLOSE BUTTON ===== */
const closeBtn = modalAdvanced.querySelector(".close");

/* ===== OPEN POPUP ===== */
if (openBtn) {
    openBtn.addEventListener("click", (e) => {
        e.preventDefault();
        modalAdvanced.style.display = "block";
    });
}

/* ===== CLOSE POPUP ===== */
closeBtn.addEventListener("click", () => {
    modalAdvanced.style.display = "none";
});

/* ===== CLOSE CLICK OUTSIDE ===== */
window.addEventListener("click", (e) => {
    if (e.target === modalAdvanced) {
        modalAdvanced.style.display = "none";
    }
});


// ================= TOOLS =================
function getBooks() {
  return JSON.parse(localStorage.getItem("books")) || [];
}
function saveBooks(books) {
  localStorage.setItem("books", JSON.stringify(books));
}


// ================= DATA BASE KATALOG BUKU =================
if (!localStorage.getItem("books")) {
  const defaultBooks = [
    {
      title: "Fangirl",
      author: "Rainbow Rowell",
      category: "Fiction",
      img: "src/book-Fangirl.webp",
      abstract: "Novel Fangirl ini menceritakan tentang dua saudara kembar Cath dan Gelatik yang merupakan penggemar Simon Snow. Cath adalah saudara kembar identik dan pemalu dari saudara perempuannya.",
      penerbit: "Martins Griffin : New York., 2013"
    },
    {
      title: "Remember When : Ketika Aku dan Kau Jatuh Cinta",
      author: "Winna Efendi",
      category: "Fiction",
      img: "src/book-Remember When.webp",
      abstract: "Kisah cinta dari masa SMA selalu menjadi tema yang tidak pernah basi untuk diangkat ke dalam sebuah novel.",
      penerbit: "Gagas Media : JAKARTA., 2011"
    },
    {
      title: "Bumi Cinta Cetakan 1",
      author: "Habiburrahman El Shirazy",
      category: "Fiction",
      img: "src/book-Bumu Cinta Cetakan 1.webp",
      abstract: "Apajadinya, jika seorang santri salaf, bernama Muhammad Ayyas, hidup di negeri paling menjunjung tinggi seks bebas dan pornografi, yaitu Rusia?",
      penerbit: "Ihwah : JAKARTA., 2011"
    },
    {
      title: "Chicken Soup for The Soul: Graphic Novel Perjalanan Ajaib dan Kisah-kisah nyata menyentuh lainnya",
      author: "Kim Donghwa",
      category: "Fiction",
      img: "src/book-Chicken Soup for The Soul.webp",
      abstract: "Chicken Soup for the Soul graphic novel buku ketiga hadir di tengah penggemarnya. Seri bestseller dunia tentang kisah nyata luarbiasa.",
      penerbit: "Gramedia Pustaka Utama : JAKARTA., 2009"
    },
    {
      title: "Eleanor & Park",
      author: "Rainbow Rowell",
      category: "Fiction",
      img: "src/book-Eleanor & Park.webp",
      abstract: "Buku ini menggunakan sudut pandang orang ketiga, dan narasinya bergantian antara perspektif Eleanor dan perspektif Park.",
      penerbit: "St. Martin Press : Amerika., 2013"
    },
    {
      title: "Breaking Dawn : Awal Yang Baru",
      author: "Stephenie Meyerl",
      category: "Fiction",
      img: "src/book-Breaking Dawn.webp",
      abstract: "Bila kau mencintai orang yang membunuhmu, kau tak punya pilihan. Bila nyawamu satu-satunya yang harus kauberikan untuk orang yang kaucintai, bagaimana mungkin kau tidak memberikannya? Bagi Bella Swan, mencintai dan dicintai vampir bernama Edward adalah bagaikan khayalan dan mimpi buruk yang dirajut jadi satu ke dalam kenyataan. Bukan itu saja, hubungannya yang sangat istimewa dengan Jacob Black sang werewolf, ternyata menyeret Bella ke pilihan-pilihan pelik yang membuat hati keduanya tercabik-cabik. Tapi konon cinta harus memilih, dan karenanya Bella harus memutuskan. Dan sebagai orang yang sangat mengenal Bella, Jacob tahu persis apa keputusan gadis itu. Lalu sanggupkah Jacob meninggalkan Bella selamanya untuk menyembuhkan luka-luka hatinya sendiri? Dan ketika Bella mencarinya, sanggupkah Jacob mengatakan tidak?",
      penerbit: "Gramedia Pustaka Utama : JAKARTA., 2009"
    },
    {
      title: "The Cold Six Thousand",
      author: "James Ellory",
      category: "Fiction",
      img: "src/book-The Cold Six Thousand.webp",
      abstract: "Wayne Tedrow Jr datang untuk membunuh seorang pria. Bayarannya $6.000. Dia malah mendapati dirinya berada di tengah-tengah upaya menutup-nutupi pembunuhan JFK. Di sana, dia mengikuti perjalanan lima tahun yang mengerikan melalui sisi gelap kebijakan publik melalui Las Vegas, Howard Hughes, Vietnam, perdagangan narkoba CIA, Kuba, bisnis hiburan yang menjijikkan, rasisme, dan Klan.Ini adalah tahun 1960-an di bawah lensa tajam Ellroy, ikon-ikon era itu berbaur dengan polisi, pembunuh, penjahat, dan provokator. The Cold Six Thousand adalah pertemuan historis sebagai mimpi buruk Amerika. Fiksi yang dahsyat dan epik. Sebuah mahakarya.",
      penerbit: "Century : Australia., 2001"
    },
    {
      title: "Matt & Mou",
      author: "Wulanfadi",
      category: "Fiction",
      img: "src/book-Matt & Mou.webp",
      abstract: "Buku ini menceritakan tentang Matt, Cowok antisosial yang bisa kau temui di pojok kelas, atau di kantin dengan buku bacaan tebalnya. Benar-benar tertutup. Apalagi soal perasaan. Kematian ayahnya semakin membuat Matt enggan membuka diri. Lain lagi dengan Mou. Cewek hiperaktif yang bisa kau temui di keramaian kantin, atau di lapangan sekolah sebagai pemandu sorak. Benar-benar terbuka. Apalagi soal perasaan. Perceraian orangtuanya membuat Mou terpaksa menutupi kesedihan dengan tawa. Keduanya bersahabat karena kegigihan Mou. Matt and Mou adalah sepasang sehabat yang saling memendam rasa. Namun karena persahabatan itulah, mereka berpikir bahwwa mereka hanyalah sepasang sahabat, tidak akan pernah lebih dai itu.Seperti ketika api dan es yang bersama, api tidak memancarkan kobarannya, hanya sebatas rasa hangat yang menenangkan. Sementara itu, es perlahan mencair seiring bersama sang api. Seperti itulah persahabatan Matt dan Mou sesungguhnya. Di sini diceritakan kehidupan mereka..",
      penerbit: "Gagas Media : Jakarta, 2016"
    },
    {
      title: "Sunset dan Rosie",
      author: "Tere Liye",
      category: "Fiction",
      img: "src/book-Sunset dan Rosie.webp",
      abstract: "Buku ini membahas tentang: 1. Mawar biru untuk rosie 2. Bom Jimbaran 3. Nathan Pergi 4. Pertunangan yang batal 5. Formasi Ribuan Obor 6. Pemakaman pasir 7. Demi anak- anak 8. Bertahanlah, Ros! 9. Kau terlalu mencintainya 10.Dua tahun yang berlalu cepat, dll.",
      penerbit: "Mahaka : Jakarta, 2018"
    },
    {
      title: "Kana di Negeri Kiwi",
      author: "Rosemary Kesauly",
      category: "Fiction",
      img: "src/src/book-Kana di Negeri Kiwi.webp",
      abstract: "Mengisahkan perjalanan hidup seorang remaja bernama Kana. Kana harus pindah dari Yogyakarta ke Selandia Baru, yang dikenal sebagai Negeri Kiwi, setelah orang tuanya bercerai. Novel ini mengeksplorasi tema penyesuaian diri, persahabatan, dan pertumbuhan pribadi, serta bagaimana Kana menghadapi berbagai tantangan dalam hidup barunya di Negeri Kiwi.",
      penerbit: "Gramedia Pustaka Utama : Jakarta, 2005"
    },
    {
      title: "Entrepreneurship : Theory, Process, Practice",
      author: "Kuratko",
      category: "Kps",
      img: "src/book-Entrepreneurship.webp",
      abstract: "Buku ini membahas tentang: 1. Pola pikir kewirausahaan pada abad kedua puluh satu 2. Memulai usaha wirausaha 3. Mengembangkan rencana kewirausahaan 4. Strategi pertumbuhan untuk usaha wirausaha 5. Sumber modal untuk wirausaha.",
      penerbit: "Cengage Learning : SINGAPORE., 2020"
    },
    {
      title: "Advanced Accounting global edition",
      author: "Floyd a. Beams, Joseph H. Anthony, Bruce Bettinghaus, Kenneth A. Smith ",
      category: "Kps",
      img: "src/book-Advanced book-Accounting global edition.webp",
      abstract: "Buku ini membahas tentang: 1. Kombinasi bisnis 2. Investasi saham - akuntansi dan pelaporan investor 3. Pengantar laporan keuangan konsolidasian 4. Teknik dan prosedur konsolidasi 5. Persediaan-transaksi laba antar perusahaan",
      penerbit: "Pearson : United Kingdom., 2018"
    },
    {
      title: "Mathematics for Economics and Business",
      author: "Ian Jacques",
      category: "Kps",
      img: "src/book-Mathematics for Economics and Business.webp",
      abstract: "Buku ini membahas tentang : Buku ini membahas tentang : 1.Pengantar aljabar, 2. Aljabar lanjutan, 3. Grafik persamaan linear, 4. Penyelesaian aljabar persamaan linear simultan, 5. Analisis penawaran dan permintaan, 6. Fungsi kuadrat, 7. Pendapatan, biaya, dan laba, 8. Indeks dan logaritma, 9. Fungsi eksponensial dan logaritma natural, 10. Deret geometri, 11. Penilaian investasi, 12. Turunan suatu fungsi, 13. Aturan diferensiasi, 14. Fungsi marginal, 15. Aturan diferensiasi lanjutan, 16. Fungsi beberapa variabel, 17 Elastisitas parsial dan fungsi marginal, 18 Statika komparatif, 19. Optimasi tanpa kendala, 20. Optimasi dengan kendala, 21. Pengganda Lagrange, 22. Integrasi tak tentu, 23. Integrasi tentu, 24. Operasi matriks dasar, 25. Inversi matriks, 26. Cramer aturan, 27.Solusi grafis dari masalah pemrograman linier, 28.Aplikasi pemrograman linier, 29.Persamaan perbedaan, 30.Persamaan diferensial",
      judulSeri: "-",
      penerbit: "Pearson : United Kingdom., 2023"
    },
    {
      title: "Pearson New International Edition ; Starting out with programming logic and design",
      author: "Tony Gaddis",
      category: "Kps",
      img: "src/book-Pearson New International Edition; Starting out with programming logic and design.webp",
      abstract: "buku ini berisi tentang: 1. Input, pemrosesan dan output, 2. Modul, 3. Struktur keputusan dan logika boolean, 4. Struktur pengulangan, 5. Finctions, 6. Validasi masukan, 7. Array, 8. Menyortir dan mencari array",
      judulSeri: "-",
      penerbit: "Pearson : England., 2014"
    },
    {
      title: "Concepts of Programming Languages",
      author: "Robert W. Sebesta",
      category: "Kps",
      img: "src/book-Concepts of Programming Languages.webp",
      abstract: "Buku ini membahas tentang : 1. Alasan Mempelajari Konsep Bahasa Pemrograman, 2. Kriteria Evaluasi Bahasa, 3. Pertukaran Desain Bahasa, 4. Evolusi Bahasa Pemrograman Utama, 5. Langkah Pertama Menuju Kecanggihan: ALGOL 60, 6. Menggabungkan Fitur Imperatif dan Berorientasi Objek: C++, 7. Bahasa Berorientasi Objek Berbasis Imperatif: Java, 8. Menjelaskan Sintaks dan Semantik, 9. Masalah Umum dalam Mendeskripsikan Sintaks, 10. Mendeskripsikan Makna Program: Semantik Dinamis, 11. Analisis Leksikal dan Sintaksis, 12 Nama, Pengikatan, dan Cakupan, 13. Ekspresi dan Pernyataan Penugasan, 14. Masalah Desain untuk Tipe Data Abstrak, 15. Dukungan untuk Pemrograman Berorientasi Objek dalam Bahasa Tertentu",
      penerbit: "Pearson : United Kingdom., 2023"
    },
    {
      title: "Executive's guide to IT governance; Improving systems processess with service management,COBIT,and ITIL",
      author: "Robert R. Moeller",
      category: "Kps",
      img: "src/book-Executive's guide to IT governance; Improving systems processess with service management,COBIT,and ITIL.webp",
      abstract: "Buku ini adalah panduan eksekutif untuk konsep penting tata kelola TI ini. Fokus kami bukan pada spesialis TI yang memasang perangkat keras, perangkat lunak, dan koneksi jaringan TI atau sumber daya penting seperti auditor internal yang menguji dan meninjau proses TI.Buku ini membahas tentang: 1. Pentingnya tata kelola TI untuk semua perusahaan, 2. Konsep dasar pemerintahan dan aturan sarbanes-oxley, 3. Tata kelola perusahaan dan alat GRC, 4. Tata kelola TI dan kontrol internal koso, 5. COBIT dan lembaga tata kelola TI",
      penerbit: "John Wiley And Sons : New Jersey., 2013"
    },
    {
      title: "Organizational behavior a Practical,problem-solving approach",
      author: "Angelo Kinicki",
      category: "Kps",
      img: "src/book-Organizational behavior a Practical,problem-solving approach.webp",
      abstract: "Buku ini membahas tentang: 1.Perilaku individu, 2. Nilai dan sikap, 3. Perbedaan dan emosi individu, 4. Persepsi sosial dan pengelolaan keragaman, 5. Landasan motivasi karyawan, 6. Manajemen kinerja, 7.Perilaku organisasi yang positif",
      penerbit: "MC GRAW HILL : New York., 2021"
    },
    {
      title: "Aplikasi Analisis Multivariete dengan program IBM SPSS 23",
      author: "Imam Ghozali ",
      category: "Kps",
      img: "src/book-Aplikasi Analisis Multivariete dengan program IBM SPSS 23.webp",
      abstract: "Buku ini membahas tentang: 1. Skala pengukuran dan metode analisis data, 2. Pengenalan program SPSS, aplikasi statistik deskriptif dan crosstabs, 3. Data screening dan transformasi data, 4. Uji reliabilitas dan validitas suatu kontruk atau konsep, 5. Analisis REGRESI, 6. Uji asusmsi klasik, 7. Regresi dengan uji asusmsi klasik, variabel dummy dan chow test, 8. Model regresi dengan bentuk fungsional, 9. Analisis diskriminan, 10.Korelasi kanonikal (Canonical Correlation)",
      penerbit: "Undip : Semarang., 2016"
    },
    {
      title: "Computer Organization and Architecture, Design for Performance",
      author: "William Stallings",
      category: "Kps",
      img: "src/book-Computer Organization and Architecture, Design for Performance.webp",
      abstract: "Buku ini menjelaskan tentang: 1. Konsep dasar dan evaluasi komputer, 2. Tampilan tingkat atas fungsi komputer dan interkoneksi, 3. memori internal, 4. Memori eksternal Input / Output, 5. Aritmatika komputer, 6. Logika digital, 7. Set instruksi: karakteristik dan fungsi, 8. Struktur dan fungsi prosesor, 9. Unit pemrosesan grafis tujuan umum, 10.Proyek untuk pengajaran organisasi dan arsitektur k",
      penerbit: "Pearson : England., 2016"
    },
    {
      title: "Compensation",
      author: "Barry Gerhart, Jerry M. Newman",
      category: "Kps",
      img: "src/book-Compensation.webp",
      abstract: "Buku ini membahas tentang: 1. Memperkenalkan model pembayaran dan strategi pembayaran, 2. Totalitas keputusan, 3. Mendefinisikan penyelarasan internal, 4. Analisis pekerjaan, 5. Struktur berbasis pekerjaan dan evaluasi pekerjaan, 6. Struktur berbasis orang",
      penerbit: "MC GRAW HILL : Amerika., 2020"
    },
    {
      title: "Computer Desktop Encyclopedia",
      author: "Alan Freedman",
      category: "Reference",
      img: "src/book-Computer Desktop Encyclopedia.webp",
      abstract: "Buku ini membahas tentang Komprehensif sangat up-to-date yang berisi lebih dari 15.000 istilah dan penjelasan yang mencakup banyak topik yang berkaitan dengan komputer digabungkan. Lebih dari koleksi definisi pengawakan, referensi unik ini termasuk jelas, deskripsi rinci dan ilustrasi mulai dari topik dasar sampai profesional komputer baik, siswa, guru dan teknisi. Termasuk penjelasan dari perangkat terbaru dan yang paling penting, sistem operasi, teknologi yang berhubungan dengan internet dan akronim, tidak ada buku lain dapat memberikan kedalaman dan luasnya cakupan ensiklopedia komputer desktop",
      penerbit: "MC GRAW HILL : California., 2001"
    },
    {
      title: "Kamus Lengkap Ekonomi",
      author: "Christopher Pass",
      category: "Reference",
      img: "src/book-Kamus Lengkap Ekonomi.webp",
      abstract: "Kamus lengkap Ekonomi ini yang bermula berjudul Dictionary of economics merupakan kamus handal ilmu pengetahuan dari harperCollins, UK, untuk bidang ekonomi, yang sudah dimutakhirkan dan kini sudah mengalami edisi kedua. Kamus ini menyajikan cakupan yang luas mengenai istilah-istilah pokok ilmu ekonomi yang difokuskan pada konsep-konsep dan prinsip-prinsip teoretis serta penerapan praktisnya.",
      penerbit: "ERLANGGA : JAKARTA, 1994"
    },
    {
      title: "Kamus Lengkap: Indonesia-Inggris, Inggris-Indonesia",
      author: "K. Adi Gunawan ",
      category: "Reference",
      img: "src/book-Kamus Lengkap.webp",
      abstract: "Buku ini berisi tentang: Tenses, Regular Verbs, Irregular Verbs.",
      penerbit: "Kartika : Surabaya, -"
    },
    {
      title: "Standar Akuntansi Keuangan Per 1 Oktober 2004",
      author: "Ikatan Akuntan Indonesia",
      category: "Reference",
      img: "src/book-Standar Akuntansi Keuangan Per 1 Oktober 2004.webp",
      abstract: "Buku ini membahas tentang: Sejarah standar akuntansi keuangan, Kerangka dasar penyusunan dan penyajian laporan keuangan.",
      penerbit: "SALEMBA EMPAT : JAKARTA, 2004"
    },
    {
      title: "KUP Ketentuan Umum dan Tata Cara Perpajakan",
      author: "Muhammad Rusjdi",
      category: "Reference",
      img: "src/book-kup.webp",
      abstract: "Buku ini membahas tentang: Ketentuan umum dan tata cara perpajakan, Administrasi Perpajakan, Nomor pokok wajib pajak.",
      penerbit: "Indeks : JAKARTA, 2007"
    },
    {
      title: "Kamus Pajak: Daftar singkatan , istilah perpajakan, akuntansi, bea dan cukai, serta peradilan pajak disertai dengan penjelasan",
      author: "Adnan Abdullah",
      category: "Reference",
      img: "src/book-Kamus Pajak, Daftar singkatan , istilah perpajakan, akuntansi, bea dan cukai, serta peradilan pajak disertai dengan penjelasan.webp",
      abstract: "Kamus Pajak ini menjelaskan Daftar singkatan, istilah perpajakan, akuntansi, hukum, dan cukai, serta penelitian pajak disertai dengan penjelasan terkait.",
      penerbit: "ANDI : YOGYAKARTA, 2019"
    },
    {
      title: "Standar Profesional Akuntan Publik : Standar Audit (SA) 530 Sampling Audit",
      author: "Institut Akuntan Publik Indonesia (IAPI)",
      category: "Reference",
      img: "src/book-Standar Audit (SA) 530 Sampling Audit.webp",
      abstract: "Standar audit ini diterapkan ketika auditor telah memutuskan untuk menggunakan sampling audit dalam pelaksanaan prosedur audit berkaitan dengan penggunaan sampling statistik maupun nonstatistik.",
      penerbit: "SALEMBA EMPAT : JAKARTA, 2013"
    },
    {
      title: "Standar Profesional Akuntan Publik 31 Maret 2011",
      author: "Institut Akuntan Publik Indonesia (IAPI)",
      category: "Reference",
      img: "src/book-Standar Profesional Akuntan Publik 31 Maret 2011.webp",
      abstract: "Standar Profesional Akuntan Publik (SPAP) merupakan kodifikasi berbagai pernyataan standar teknis yang memberikan panduan bagi praktisi, akuntan publik, dan staf.",
      penerbit: "SALEMBA EMPAT : JAKARTA, 2011"
    },
    {
      title: "Standar Profesional Akuntan Publik : Seri Penilaian Risiko",
      author: "Institut Akuntan Publik Indonesia (IAPI)",
      category: "Reference",
      img: "src/book-standar Profesional Akuntan Publik; Seri Penilaian Risiko.webp",
      abstract: "Standar Profesional Akuntan Publik ini membahas tentang: Keterlibatan anggota tim perikatan utama, Aktivitas audit perikatan, Dokumentasi.",
      penerbit: "SALEMBA EMPAT : JAKARTA, 2016"
    },
    {
      title: "Kamus Praktis sehari-hari bahasa Indonesia mandarin",
      author: "Hin Goan Ganawan",
      category: "Reference",
      img: "src/book-Kamus Praktis sehari-hari bahasa Indonesia mandarin.webp",
      abstract: "Kamus Indonesia-mandarin ini disusun sedemikian rupa untuk membantu teman-teman dengan mencari padanan suatu istilah kata benda untuk benda, tanaman, buah, atau hewan.",
      penerbit: "ANDI : YOGYAKARTA, 2005"
    },
    {
      title: "75++ Proyek Desain : Trik penting yang wajib diketahui untuk menguasai photoshop",
      author: "Mohammad Jeprie",
      category: "Textbook",
      img: "src/book-75++ Proyek Desain; Trik penting yang wajib diketahui untuk menguasai photoshop.webp",
      abstract: "Buku ini didesain untuk para pemula dan pengguna kelas menengah yang ingin menguasai skill editing gambar secara profesional dan praktis. Membahas tentang: 1. Dasar Photoshop, 2. Menyunting foto.3. Menyeleksi sebagian gambar, 4. Editing lebih elektif dengan layar, 5. Teks dan efek teks, 6. Menggambar vektor, 7. Berbagai spesial efek",
      penerbit: "Elex Media Komputindo : JAKARTA., 2022"
    },
    {
      title: "Tip dan Trik Meningkatkan Efisiensi, Produktivitas dan Profitabilitas",
      author: "Fransisccus Xaverius Sadikin",
      category: "Textbook",
      img: "src/book-Tip dan Trik Meningkatkan Efisiensi, Produktivitas dan Profitabilitas.webp",
      abstract: "Pokok bahasan buku ini: Perubahan adalah sikap dasar manusia dalam merealisasikan sesuatu yang sudah diperoleh menjadi lebih dan lebih sehingga dalam usaha yang minimal akan mendapatkan hasil yang optimal.",
      penerbit: "ANDI : YOGYAKARTA., 2005"
    },
    {
      title: "How they started digital : Bagaimana 25 ide - ide bagus menjadi bisnis-bisnis digital yang spektakuler",
      author: "David Lester",
      category: "Textbook",
      img: "src/book-How they started digital; Bagaimana 25 ide - ide bagus menjadi bisnis-bisnis digital yang spektakuler.webp",
      abstract: "Media penuh dengan berita utama tentang kisah sukses digital terbaru dan miliarder muda. Tetapi bagaimana bisnis-bisnis ini benar-benar merintis usahanya? Apa saja langkah-langkah untuk sukses?",
      penerbit: "Gramedia Pustaka Utama : JAKARTA., 2015"
    },
    {
      title: "145 Q & A Start Your Own Business - pasti bisa buka usaha",
      author: "Sigma",
      category: "Textbook",
      img: "src/book-145 Q & A Start Your Own Business - pasti bisa buka usaha.webp",
      abstract: "Buku ini hadir sebagai jawaban atas pertanyaan yang sering diajukan oleh banyak orang saat mereka akan membuka usaha. Ditujukan bagi siapa saja yang mempunyai impian menjadi pengusaha mandiri.",
      penerbit: "ANDI : YOGYAKARTA., 2011"
    },
    {
      title: "Psikologi Komunikasi",
      author: "Morissan",
      category: "Textbook",
      img: "src/book-Psikologi Komunikasi.webp",
      abstract: "Buku ini membahas tentang: 1. Penilaian, 2. proses berpikir dan merancang strategi pesan, 3. rencana tindakan dan logika pesan, 4. penyelenggaraan komunikasi.",
      penerbit: "Ghalia Indonesia : Bogor., 2010"
    },
  ];
  saveBooks(defaultBooks);
}


// ================= SIMPAN-BUKU =================
function addBook() {

  event.preventDefault();

  const title = document.getElementById("judul_buku").value;
  const author = document.getElementById("pengarang").value;
  const category = document.getElementById("kategori").value;
  const abstract = document.getElementById("abstrak").value;
  const penerbit = document.getElementById("penerbit").value;

  const books = getBooks();

  // cek mode edit
  const editIndex = localStorage.getItem("editBookIndex");

  const coverInput = document.getElementById("cover");
  const file = coverInput.files[0];

  if (file) {

    const reader = new FileReader();

    reader.onload = function (e) {

      const newBook = {
        title,
        author,
        category,
        abstract,
        penerbit,
        img: e.target.result
      };

      saveOrUpdateBook(newBook);
    };

    reader.readAsDataURL(file);

  } else {

    // kalau tidak upload gambar baru
    const oldImg =
      editIndex !== null && editIndex !== ""
        ? books[editIndex].img
        : "src/default-book.webp";

    const newBook = {
      title,
      author,
      category,
      abstract,
      penerbit,
      img: oldImg
    };

    saveOrUpdateBook(newBook);
  }

  // ================= EDIT =================
  if (editIndex !== null && editIndex !== "") {

    books[editIndex] = newBook;

    localStorage.removeItem("editBookIndex");

    alert("Buku berhasil diupdate!");
  }

  // ================= ADD =================
  else {

    books.push(newBook);

    alert("Buku berhasil ditambahkan!");

  }

  saveBooks(books);

  window.location.href = "admin-galeri.html";
}


// ================= UPDATE-BUKU =================
function saveOrUpdateBook(newBook) {

  const books = getBooks();

  const editIndex = localStorage.getItem("editBookIndex");

  // MODE EDIT
  if (editIndex !== null && editIndex !== "") {

    books[editIndex] = newBook;

    localStorage.removeItem("editBookIndex");

    alert("Buku berhasil diupdate!");

  }

  // MODE ADD
  else {

    books.push(newBook);

    alert("Buku berhasil ditambahkan!");
  }

  saveBooks(books);

  window.location.href = "admin-galeri.html";
}


// ================= TEMPLATE CARD =================
function createCardAdmin(book, index) {
  return `
    <div class="book-card btn-detail" data-index="${index}">
      <img src="${book.img}">

      <div class="book-info">
        <h3>${book.title}</h3>
        <p>Kategori: ${book.category}</p>

        <div class="book-actions">
          <button class="btn-edit">Edit</button>
          <button class="btn-delete">Hapus</button>
        </div>
      </div>
    </div>
  `;
}
function createCardUser(book, index) {
  return `
    <div class="book-card btn-detail" data-index="${index}">
      <img src="${book.img}">

      <div class="book-info">
        <h3>${book.title}</h3>
        <p>Kategori: ${book.category}</p>
      </div>
    </div>
  `;
}


// ================= RENDER =================
// ================= RENDER - admin =================
const bookGridAdmin = document.getElementById("bookGridAdmin");
const dataCount = document.getElementById("dataCount");
function renderBooksAdmin() {
  const books = getBooks();
  bookGridAdmin.innerHTML = "";
  books.forEach((book, index) => {
    bookGridAdmin.innerHTML += createCardAdmin(book, index);
  });
  updateCount();
}
if (document.getElementById("bookGridAdmin")) {
  renderBooksAdmin();
}

// ================= RENDER-USER =================
const bookGridUser = document.getElementById("bookGridUser");
function renderBooksUser() {
  console.log("USER RENDER JALAN");
  if (!bookGridUser) return;
  const books = getBooks();
  console.log(books);
  bookGridUser.innerHTML = "";
  books.forEach((book, index) => {
    bookGridUser.innerHTML += createCardUser(book, index);
  });
}
if (document.getElementById("bookGridUser")) {
  renderBooksUser();
  setTimeout(() => {

    const openIndex = localStorage.getItem("openBookDetail");

    if (openIndex !== null) {

      showDetail(openIndex);

      localStorage.removeItem("openBookDetail");
    }

  }, 800);
}

// ================= COUNT =================
function updateCount() {
  const total = getBooks().length;
  dataCount.textContent = total;
}



// ================= TOOLS BOOK =================
// ================= DELETE ONE =================
function deleteBook(index) {
  let books = getBooks();
  books.splice(index, 1);
  saveBooks(books);
  renderBooksAdmin();
}

// ================= DELETE ALL =================
const btnHapusSemua = document.getElementById("btnHapusSemua");
if (btnHapusSemua) {
  btnHapusSemua.addEventListener("click", () => {
    const total = getBooks().length;
    if (total === 0) return;
    if (confirm(`Yakin hapus semua (${total} buku)?`)) {
      localStorage.removeItem("books");
      renderBooksAdmin();
    }
  });
}

/* ================= EDIT BOOK ================= */
function loadEditBook() {

  const editIndex = localStorage.getItem("editBookIndex");

  // kalau tidak ada edit
  if (editIndex === null || editIndex === "") return;

  const books = getBooks();
  const book = books[editIndex];

  // isi form
  document.getElementById("judul_buku").value = book.title;
  document.getElementById("pengarang").value = book.author;
  document.getElementById("kategori").value = book.category;
  document.getElementById("abstrak").value = book.abstract;
  document.getElementById("penerbit").value = book.penerbit;

  // ubah tombol
  const submitBtn = document.querySelector(".btn-primary");
  submitBtn.innerHTML = "💾 Update";

}
if (document.getElementById("formTambah")) {
  loadEditBook();
}

// ================= CLOSE DETAIL =================
document.addEventListener("click", function (e) {

  const modal =
    document.getElementById("detailModal");

  if (e.target.classList.contains("close-detail")) {
    modal.style.display = "none";
  }

  if (e.target === modal) {
    modal.style.display = "none";
  }

});

// ================= CREATE DETAIL MODAL =================
document.body.insertAdjacentHTML("beforeend", `
<div id="detailModal" class="detail-modal">
  <div class="detail-content">
    <button class="close-detail">&times;</button>

    <div class="detail-left">
      <img id="detailImg">
    </div>

    <div class="detail-right">
      <h1 id="detailTitle"></h1>
      <div class="title-line"></div>
      <div class="start-scrol">
        <div class="detail-grid">
        
          <div class="info-card">
            <div class="info-icon green">👤</div>
            <div>
              <span>Pengarang</span>
              <h3 id="detailAuthor"></h3>
            </div>
          </div>

          <div class="info-card">
            <div class="info-icon blue">📚</div>
            <div>
              <span>Kategori</span>
              <h3 id="detailCategory"></h3>
            </div>
          </div>

          <div class="info-card">
            <div class="info-icon pink">🏢</div>
            <div>
              <span>Penerbit</span>
              <h3 id="detailPublisher"></h3>
            </div>
          </div>

          <div class="info-card">
            <div class="info-icon purple">📅</div>
            <div>
              <span>Tahun</span>
              <h3 id="detailYear"></h3>
            </div>
          </div>

        </div>

        <!-- ABSTRAK -->
        <div class="abstract-box">

          <h2>📖 Abstrak</h2>

          <div class="abstract-content">
            <p id="detailAbstract"></p>
          </div>

        </div>
      </div>
    </div>

  </div>

</div>

`);
function showDetail(index) {
  const books = getBooks();
  const book = books[index];
  document.getElementById("detailImg").src = book.img;
  document.getElementById("detailTitle").textContent = book.title;
  document.getElementById("detailAuthor").textContent = book.author;
  document.getElementById("detailCategory").textContent = book.category;
  document.getElementById("detailPublisher").textContent = book.penerbit;
  document.getElementById("detailAbstract").textContent = book.abstract;
  // ambil tahun dari penerbit
  const tahun = book.penerbit.match(/\d{4}/);
  document.getElementById("detailYear").textContent = tahun ? tahun[0] : "-";
  document.getElementById("detailModal").style.display = "flex";
}

// ================= EVENT LISTENER =================
document.addEventListener("click", function (e) {
  // cari card
  const card = e.target.closest(".book-card")
  if (!card) return;
  const index = card.dataset.index;
  // DELETE
  if (e.target.classList.contains("btn-delete")) {
    if (confirm("Yakin hapus buku ini?")) {
      deleteBook(index);
    }
  }
  // EDIT
  if (e.target.classList.contains("btn-edit")) {
    localStorage.setItem("editBookIndex", index);
    window.location.href = "admin-add-book.html";
  }
  // DETAIL
  if (e.target.closest(".btn-detail")) {
    showDetail(index);
  }
});

