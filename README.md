# NoteKeeper (Persistent Notes with AsyncStorage)

Project tugas: aplikasi NoteKeeper bertenaga AsyncStorage — CRUD, persistensi, dan fitur pengembangan.

## Deskripsi Aplikasi
NoteKeeper adalah aplikasi catatan sederhana untuk membuat, melihat, dan menghapus catatan. Data disimpan secara lokal menggunakan `AsyncStorage` sehingga catatan tetap ada setelah aplikasi ditutup atau perangkat direstart. UI menggunakan `FlatList` untuk menampilkan daftar dan menyediakan toggle untuk Dark Mode yang tersimpan.

## Fitur
- CREATE: tambah catatan (validasi input kosong)
- READ: muat data dari `AsyncStorage` saat app dibuka
- DELETE: hapus per-item + konfirmasi hapus
- Persistensi: data tersimpan walau app ditutup
- FlatList: menampilkan daftar dengan `keyExtractor`
- Empty state: tampilan saat kosong

### Fitur Level 2 yang diimplementasikan
- Toggle status selesai (tap item untuk toggle)
- Dark Mode tersimpan (toggle disimpan di `AsyncStorage`)
- Konfirmasi Hapus dan Tombol "Hapus Semua"

> Level 2 dipilih: Toggle status selesai, Dark Mode tersimpan, Konfirmasi Hapus

## Cara menjalankan (development)
1. Install dependencies (sudah ada `expo`/`package.json`):

```bash
npm install
# atau
yarn
```

2. Jalankan Metro / Expo:

```bash
npx expo start
```

3. Scan QR dengan Expo Go di HP fisik (Android atau iOS) untuk mencoba.

## Test case yang harus dicoba di HP fisik
- Create: tambah item baru (input tidak boleh kosong)
- Read / Persistensi: tutup app lalu buka lagi — data harus tetap ada
- Delete: hapus satu item (konfirmasi muncul)
- Toggle done: tap item untuk menandai selesai/membatalkan
- Dark Mode: aktifkan dark mode → tutup-buka app → mode tetap tersimpan

## Struktur file penting
- `App.js` — UI dan logika AsyncStorage

## Expo Snack
- Snack: (tempel link snack.expo.dev di sini)

Cara membuat Expo Snack dari repo:

1. Buka https://snack.expo.dev/
2. Pilih "Import from GitHub" dan masukkan repo: `darmanaa/PERTEMUAN-12` atau salin file `App.js` ke editor Snack.
3. Simpan Snack dan tempel linknya di bagian README ini.

## Screenshot (tambahkan file/tautan)
## Screenshot (tambahkan file/tautan)

- `screenshots/screenshot-1.png` — Daftar item (<a href="https://ibb.co.com/G4FHxm50"><img src="https://i.ibb.co.com/G4FHxm50/Whats-App-Image-2026-06-27-at-23-24-45.jpg" alt="Whats-App-Image-2026-06-27-at-23-24-45" border="0"></a>). Gunakan screenshot yang jelas.
- `screenshots/screenshot-2.png` — Dark mode aktif (<a href="https://ibb.co.com/ksKnMFZy"><img src="https://i.ibb.co.com/ksKnMFZy/Whats-App-Image-2026-06-27-at-23-24-44-1.jpg" alt="Whats-App-Image-2026-06-27-at-23-24-44-1" border="0"></a>).
- `screenshots/screenshot-3-before.png` — Bukti persistensi (<a href="https://ibb.co.com/ksKnMFZy"><img src="https://i.ibb.co.com/ksKnMFZy/Whats-App-Image-2026-06-27-at-23-24-44-1.jpg" alt="Whats-App-Image-2026-06-27-at-23-24-44-1" border="0"></a>): ambil setelah menambahkan catatan.
- `screenshots/screenshot-3-after.png` — Bukti persistensi (<a href="https://ibb.co.com/wZ1KHVLN"><img src="https://i.ibb.co.com/wZ1KHVLN/Whats-App-Image-2026-06-27-at-23-24-44.jpg" alt="Whats-App-Image-2026-06-27-at-23-24-44" border="0"></a>): ambil setelah menutup app sepenuhnya dan membuka kembali — isi daftar harus sama seperti `screenshot-3-before.png`.

Langkah cepat untuk bukti persistensi:

1. Jalankan app di Expo Go dan tambahkan 2–4 catatan.
2. Ambil `screenshots/screenshot-3-before.png` (screenshot daftar saat ini).
3. Tutup aplikasi sepenuhnya (swipe-away / force close) lalu buka kembali Expo Go dan app.
4. Ambil `screenshots/screenshot-3-after.png` dan pastikan isinya sama.

Petunjuk mengambil screenshot dan mengunggah:

- Android (Expo Go): tekan `Power` + `Volume Down` → sambungkan HP ke PC → salin file ke folder repo `screenshots/`.
- iOS (Expo Go): tekan `Side Button` + `Volume Up` → impor ke Mac/PC → simpan di `screenshots/`.

Rekomendasi:

- Simpan gambar dalam format PNG atau JPG, ukuran wajar (<= 2 MB). Nama file sesuai contoh di atas.
- Letakkan file di folder `screenshots/` dalam repo dan commit dengan pesan `chore: add screenshots`.

Setelah Anda menambahkan file screenshot, beri tahu saya — saya akan bantu tambahkan preview (thumbnail) ke README dan push commit.

## Commit example
## Commit examples (Conventional Commits)
- `feat(notes): add AsyncStorage persistence and CRUD` — tambah persistensi dan operasi CRUD untuk catatan.
- `feat(ui): add dark mode toggle and persistence` — tambah toggle Dark Mode dan simpan preferensi.
- `fix(notes): prevent empty note submission` — perbaikan validasi input kosong.
- `chore(deps): bump dependencies` — pemeliharaan dependensi.
- `docs: update README with run steps and screenshots` — perubahan dokumentasi (README, screenshot instructions).

Gunakan format di atas untuk commit agar riwayat jelas dan memudahkan penilaian.

## Tech stack
- React Native (Expo)
- AsyncStorage (`@react-native-async-storage/async-storage`)
- JavaScript (ES6+)

## Cara menjalankan & testing (ringkas)
1. Install dependencies:

```bash
npm install
# atau
yarn
```

2. Jalankan Expo:

```bash
npx expo start
```

3. Scan QR dengan Expo Go di HP fisik, lalu verifikasi test case:
- Create: tambah item baru (input tidak boleh kosong)
- Read / Persistensi: tutup app lalu buka lagi — data harus tetap ada
- Delete: hapus satu item (konfirmasi muncul)
- Toggle done: tap item untuk menandai selesai/membatalkan
- Dark Mode: aktifkan dark mode → tutup-buka app → mode tetap tersimpan

## Expo Snack
- Untuk memudahkan pemeriksa, buat Snack di https://snack.expo.dev/.
- Pilih "Import from GitHub" dan gunakan: `darmanaa/PERTEMUAN-12` atau salin `App.js`.
- Setelah membuat Snack, tempelkan link di bagian `Snack:` di atas.

## Notes
- Saya sudah mengimplementasikan CRUD + persistensi + Dark Mode + toggle-done + konfirmasi hapus.
- Mau saya push repo ke GitHub dan buat Expo Snack sekarang? (butuh akses remote dan akun)

##
-Nama: Darman Michael Purba
-nim:243303621212
