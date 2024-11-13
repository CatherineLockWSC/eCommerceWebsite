<?php
include 'db.php';

if (isset($_GET['id'])) {
    $id = $_GET['id'];
    $conn->query("DELETE FROM products WHERE id = $id");
    echo "Product deleted successfully!";
}
?>
