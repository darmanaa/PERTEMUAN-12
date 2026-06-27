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

## Expo Snack (tambahkan link di sini)
- Snack: (tempel link snack.expo.dev di sini)

## Screenshot (tambahkan file/tautan)
- screenshot-1.png — daftar item
- screenshot-2.png — dark mode aktif
- screenshot-3.png — bukti persistensi (sebelum & sesudah tutup-buka)

## Commit example
- `feat: add dark mode persistence`
- `feat: add asyncstorage persistence and CRUD`

## Notes
- Saya sudah mengimplementasikan CRUD + persistensi + Dark Mode + toggle-done + konfirmasi hapus.
- Mau saya push repo ke GitHub dan buat Expo Snack sekarang? (butuh akses remote dan akun)
