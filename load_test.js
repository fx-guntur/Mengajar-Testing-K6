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
    let resPost = http.post(`${BASE_URL}/api_optimal.php`, payload);
    check(resPost, { 'create berhasil': (r) => r.status === 200 });

    // READ - Ambil daftar wisata
    let resGet = http.get(`${BASE_URL}/api_optimal.php`);
    check(resGet, { 'read berhasil': (r) => r.status === 200 });

    // DELETE - Hapus data wisata yang baru dibuat
    let lastId = JSON.parse(resPost.body).id;
    let resDel = http.del(`${BASE_URL}/api_optimal.php?id=${lastId}`);
    check(resDel, { 'delete berhasil': (r) => r.status === 200 });

    sleep(0.1); // istirahat sebentar sebelum request berikutnya
}
