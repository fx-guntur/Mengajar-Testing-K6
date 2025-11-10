import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    vus: 50,        // Virtual Users
    iterations: 500 // Total request
};

const BASE_URL = 'http://localhost/belajar-testing-k6'; // ganti sesuai server lokalmu

export default function () {
    // CREATE - Tambah data wisata
    let payload = { nama_wisata: 'Wisata ' + Math.random(), alamat: 'Alamat ' + Math.random() };
    let resPost = http.post(`${BASE_URL}/api_nonoptimal.php`, payload);
    check(resPost, { 'create berhasil': (r) => r.status === 200 });

    // READ - Ambil daftar wisata
    let resGet = http.get(`${BASE_URL}/api_nonoptimal.php`);
    check(resGet, { 'read berhasil': (r) => r.status === 200 });

    // DELETE - Hapus data wisata yang baru dibuat
    // Catatan: versi non-optimal tidak selalu mengembalikan id, kita bisa ambil terakhir dari response GET
    let data = JSON.parse(resGet.body);
    let lastId = data.length > 0 ? data[data.length - 1].id : 0;
    let resDel = http.del(`${BASE_URL}/api_nonoptimal.php?id=${lastId}`);
    check(resDel, { 'delete berhasil': (r) => r.status === 200 });

    sleep(0.1);
}
