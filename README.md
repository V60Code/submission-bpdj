# Submission BPDJ - Final Assessment

Repositori ini berisi solusi untuk berbagai asesmen dalam **final assessment** terkait JavaScript, termasuk menulis komentar, pengujian kode, OOP, rekursi, dan implementasi dalam skenario dunia nyata.

## 📂 Struktur Proyek

Berikut adalah struktur direktori dalam proyek ini:

```
final-assessment/
├── 01-writing-comments/              # Menulis komentar dalam kode JavaScript
├── 02-code-style/                    # Menyesuaikan gaya penulisan kode agar konsisten
├── 03-writing-test/                   # Menulis pengujian untuk kode JavaScript
├── optional-04-oop/                   # Implementasi Object-Oriented Programming (OOP)
├── optional-05-recursive/             # Implementasi fungsi rekursif (Faktorial & Fibonacci)
├── optional-06-full-coverage-testing/ # Pengujian menyeluruh dengan cakupan penuh
├── optional-07-real-world-scenario/   # Penerapan konsep dalam skenario dunia nyata
└── .gitattributes                     # Konfigurasi Git terkait atribut proyek
```

## 🧪 Cara Menggunakan
### 1. Clone Repository
Clone repositori ini ke dalam komputer Anda:
```
git clone https://github.com/V60Code/submission-bpdj.git
cd submission-bpdj/final-assessment
```

### 2. Menjalankan Setiap Bagian Asesmen
- Menjalankan pengujian kode (Testing)
```
cd 03-writing-test
node index.test.js
```

- Menjalankan kode rekursif (Fibonacci & Faktorial)
```
cd optional-05-recursive
node fibonacci.js
node factorial.js
```

- Menjalankan pengujian cakupan penuh
```
cd optional-06-full-coverage-testing
node index.test.js
```
- Linting Kode Jika Anda ingin memastikan kode mengikuti standar penulisan, jalankan:
```
npm run lint
```

## 🛠 Teknologi yang Digunakan
- JavaScript (ES6)
- Node.js
- Prettier (untuk merapihkan kode)
- ESLint untuk pengecekan gaya penulisan kode
- Node:test untuk pengujian

## Kontribusi
Jika Anda ingin berkontribusi dalam proyek ini, silakan lakukan fork repo ini dan ajukan pull request dengan perubahan yang ingin Anda tambahkan.
