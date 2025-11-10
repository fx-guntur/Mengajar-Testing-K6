<?php
include 'connection.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method == 'POST') {
    $nama = $_POST['nama_wisata'];
    $alamat = $_POST['alamat'];

    // Prepared statement → aman & cepat
    $stmt = $conn->prepare("INSERT INTO wisata (nama_wisata, alamat) VALUES (?, ?)");
    $stmt->bind_param("ss", $nama, $alamat);
    $stmt->execute();
    echo json_encode(['status' => 'success', 'id' => $stmt->insert_id]);
    $stmt->close();
}

if ($method == 'GET') {
    $result = $conn->query("SELECT * FROM wisata");
    $data = $result->fetch_all(MYSQLI_ASSOC);
    echo json_encode($data);
}

if ($method == 'DELETE') {
    $id = $_GET['id'];
    $stmt = $conn->prepare("DELETE FROM wisata WHERE id = ?");
    $stmt->bind_param("i", $id);
    $stmt->execute();
    echo json_encode(['status' => 'deleted', 'id' => $id]);
    $stmt->close();
}

$conn->close();
?>
