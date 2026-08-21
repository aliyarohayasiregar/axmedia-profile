# Nova Axmedia — Company Profile

Situs company profile satu halaman untuk PT Nova Axmedia Branding (retail branding & OOH media),
dibangun dengan Nuxt 4 + Tailwind CSS.
Arah desain mengacu pada referensi dentsu.com: banyak ruang kosong, tipografi serif editorial,
palet netral hangat dengan satu aksen, dan animasi masuk yang halus.

## Struktur

- `app/data/company.ts` — seluruh teks dan angka konten (profil, layanan, karya, klien, kontak).
  Ubah file ini untuk mengganti isi situs tanpa menyentuh komponen.
- `app/components/` — komponen per bagian: hero, about, services, why, coverage, clients, case study,
  engagement process, kontak.
- `public/work/` — foto case study (MR.D.I.Y., RELX, Indomaret, Kraft Heinz ABC, Pocari, aktivasi).
- `app/assets/css/main.css` — token dasar dan kelas utilitas (`shell`, `label`, `display`, `reveal`).
- `tailwind.config.js` — warna (`ink`, `paper`, `muted`, `line`, `accent`) dan font.

Konten mengikuti deck `Axmedia Company Profile 2026`.

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build produksi
npm run generate # static site (siap deploy ke hosting statis)
npx eslint .     # lint
```

Node 22.19+ direkomendasikan.
