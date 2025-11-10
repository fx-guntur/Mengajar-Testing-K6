# Wisata Load Test

Proyek ini adalah contoh **load test API** menggunakan **k6** untuk membandingkan performa:

- `api_optimal.php` → API versi optimal (prepared statement, efisien)
- `api_nonoptimal.php` → API versi kurang optimal (query biasa)
- `koneksi.php` → file koneksi database MySQL
- `load_test.js` → skrip k6 untuk API optimal
- `load_test_nonoptimal.js` → skrip k6 untuk API non-optimal
- `run_optimal.bat` → batch file untuk jalankan load test optimal
- `run_nonoptimal.bat` → batch file untuk jalankan load test non-optimal

---

## Cara Setup

1. **Clone repository**:

```bash
git clone <url-repo-anda>
cd wisata-loadtest
````

2. **Buat database dan tabel** (gunakan phpMyAdmin atau MySQL client):

```sql
CREATE DATABASE wisata_db;

CREATE TABLE wisata (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama_wisata VARCHAR(100) NOT NULL,
    alamat VARCHAR(255) NOT NULL
);
```

3. **Sesuaikan koneksi database** di `koneksi.php` (host, username, password).

---

## Cara Menjalankan Load Test

1. **Install k6**:

* Download dari: [k6 download](https://github.com/grafana/k6/releases/tag/v1.4.0)

2. **Jalankan batch file**:

* Untuk API optimal:

```
run_optimal.bat
```

* Untuk API non-optimal:

```
run_nonoptimal.bat
```

3. **Hasil load test** akan muncul di terminal, menampilkan:

* Rata-rata waktu respon
* Iteration duration
* Jumlah request berhasil / gagal
* Data yang dikirim / diterima

---

## Analogi Mudah

* API optimal → dapur rapi, pesanan cepat selesai
* API non-optimal → dapur agak berantakan, pesanan lebih lama selesai
* k6 → simulasi banyak pelanggan datang bersamaan untuk melihat performa API
