// Fungsi untuk toggle menu (buka atau tutup)
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("show");
}

// Fungsi untuk menutup menu setelah item diklik
function closeMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.remove("show");  // Menyembunyikan menu setelah link diklik
}
