# Portofolio Arka'an Nurhuda

Website portofolio pribadi satu halaman untuk menampilkan profil, pengalaman kerja, keterampilan, proyek, dan informasi kontak Arka'an Nurhuda, full-stack web developer dari Indonesia. Antarmuka dibuat responsif dengan animasi dan elemen visual interaktif.

## Teknologi

- Next.js 14 dengan App Router, React 18, dan TypeScript
- Tailwind CSS untuk styling
- Framer Motion, Three.js, React Three Fiber, dan Lottie untuk animasi serta visual
- Sentry untuk pemantauan error
- Vercel untuk deployment

## Bagian situs

- **Profil**: perkenalan dan tautan GitHub, LinkedIn, serta email.
- **Pengalaman**: riwayat pekerjaan dan proyek profesional.
- **Keterampilan**: teknologi dan tools yang digunakan.
- **Proyek**: pilihan proyek dengan deskripsi dan daftar teknologi.
- **Pendekatan kerja**: tahapan perencanaan, pengembangan, deployment, dan pemeliharaan.
- **Kontak**: ajakan kolaborasi dan tautan media sosial.

Konten navigasi, pengalaman, keterampilan, proyek, dan media sosial dikelola di `data/index.ts`. Komponen halaman berada di `components/`, sedangkan aset gambar, ikon, dan animasi berada di `public/` dan `data/`.

## Menjalankan secara lokal

Persyaratan: Node.js dan npm.

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser. Perintah `npm run build` membuat build produksi, lalu `npm start` menjalankannya secara lokal. `npm run deploy` menjalankan deployment produksi melalui Vercel.

## Pemantauan error

Integrasi Sentry dikonfigurasi melalui `sentry.client.config.ts`, `sentry.server.config.ts`, `sentry.edge.config.ts`, dan `next.config.mjs`. Kredensial serta variabel lingkungan Sentry perlu disediakan pada lingkungan deployment jika pemantauan dan unggah source map ingin digunakan.
