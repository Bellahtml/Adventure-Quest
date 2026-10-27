# AdventureQuest

Website edukasi petualangan outdoor untuk proyek UTS Pemrograman Web Lanjutan. Dibangun sebagai aplikasi frontend satu halaman menggunakan HTML semantik, CSS responsif, JavaScript, dan LocalStorage.

## Menjalankan

1. Buka `index.html` di browser modern, atau jalankan server lokal seperti Live Server.
2. Koneksi internet diperlukan untuk memuat font Google dan foto Unsplash.
3. Tidak membutuhkan PHP, database, instalasi paket, maupun proses build.

## Fitur

- Katalog delapan aktivitas, detail panduan, pencarian, serta filter kategori, kesulitan, durasi, dan estimasi biaya.
- Panduan persiapan dan keselamatan yang mengingatkan pengguna untuk memverifikasi informasi terkini kepada pengelola atau operator.
- Checklist perlengkapan per aktivitas, dengan status disimpan di LocalStorage.
- Formulir rencana bertahap dengan validasi dan penyimpanan lokal.
- Kalkulator estimasi anggaran total kelompok dan per orang.
- Galeri kategori dengan dialog foto yang lebih besar.
- Navigasi mobile, dukungan keyboard, label form, alt text, serta preferensi reduced motion.

## Penyimpanan dan batasan

Rencana dan checklist hanya disimpan pada browser/perangkat pengguna. Tidak ada backend, akun, sistem pemesanan, pembayaran, atau integrasi penyedia layanan. Nominal biaya dan informasi keselamatan merupakan contoh/panduan umum dan harus diverifikasi sebelum kegiatan.

## Struktur

```text
adventure-quest/
├── index.html
├── README.md
└── assets/
    ├── css/
    │   └── style.css
    └── js/
        └── script.js
```
