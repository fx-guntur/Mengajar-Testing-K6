<?php
include 'connection.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method == 'POST') {
    $nama = $_POST['nama_wisata'];
    $alamat = $_POST['alamat'];

    // Tidak pakai prepared statement → lebih lambat saat banyak request
    $sql = "INSERT INTO wisata (nama_wisata, alamat) VALUES ('$nama', '$alamat')";
    $conn->query($sql);
    echo json_encode(['status' => 'success']);
}

if ($method == 'GET') {
    $result = $conn->query("SELECT * FROM wisata");
    $data = $result->fetch_all(MYSQLI_ASSOC);
    echo json_encode($data);
}

if ($method == 'DELETE') {
    $id = $_GET['id'];
    $conn->query("DELETE FROM wisata WHERE id = $id");
    echo json_encode(['status' => 'deleted']);
}

$conn->close();
