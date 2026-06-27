# NoteKeeper (Persistent Notes with AsyncStorage)

Project tugas: aplikasi NoteKeeper bertenaga AsyncStorage — CRUD, persistensi, dan fitur pengembangan.

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
- `screenshot-1.png` — daftar item
- `screenshot-2.png` — dark mode aktif
- `screenshot-3.png` — bukti persistensi (sebelum & sesudah tutup-buka)

Petunjuk cepat ambil screenshot:

- Android (Expo Go): buka app di HP → tahan power+volume down (atau gunakan fitur screenshot bawaan) → pindahkan file ke PC dan letakkan di folder repo `screenshots/`.
- iOS (Expo Go): tekan side button + volume up → impor ke Mac/PC → simpan di `screenshots/`.

File naming dan rekomendasi:
- Simpan minimal 3 screenshot dengan nama sesuai di atas.
- Taruh di folder `screenshots/` pada repo lalu commit dan push.

Setelah Anda menambahkan link Snack dan screenshot, beri tahu saya — saya akan bantu update README dan push commit jika perlu.

## Commit example
- `feat: add dark mode persistence`
- `feat: add asyncstorage persistence and CRUD`

## Notes
- Saya sudah mengimplementasikan CRUD + persistensi + Dark Mode + toggle-done + konfirmasi hapus.
- Mau saya push repo ke GitHub dan buat Expo Snack sekarang? (butuh akses remote dan akun)
