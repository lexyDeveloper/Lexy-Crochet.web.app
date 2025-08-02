<?php
$conn = new mysqli("localhost", "root", "", "lexycrochet");

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener datos del formulario
    $nombre_usuario = $_POST["nombre_usuario"];
    $nombre_completo = $_POST["nombre_completo"];
    $email = $_POST["email"];
    $contrasena = password_hash($_POST["contrasena"], PASSWORD_DEFAULT);
    $telefono = $_POST["telefono"];
    $direccion = $_POST["direccion"];
    $metodo_pago = $_POST["metodo_pago_preferido"];

    // Preparar la sentencia para evitar SQL Injection
    $stmt = $conn->prepare("INSERT INTO usuario (nombre_usuario, nombre_completo, email, contraseña, direccion, telefono, metodo_pago_preferido) VALUES (?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("sssssss", $nombre_usuario, $nombre_completo, $email, $contrasena, $direccion, $telefono, $metodo_pago);

    if ($stmt->execute()) {
        echo "<script>alert('Usuario agregado correctamente'); window.location.href='index.php';</script>";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Registro y Lista de Usuarios</title>
    <style>
        body { font-family: Arial, sans-serif; text-align: center; padding: 20px; }
        table { width: 90%; margin: auto; border-collapse: collapse; }
        th, td { border: 1px solid black; padding: 8px; }
        th { background-color: #f2f2f2; }
        form { width: 50%; margin: 30px auto; text-align: left; border: 1px solid #ccc; padding: 20px; border-radius: 10px; }
        input, button { width: 100%; padding: 10px; margin-bottom: 10px; }
        h2 { margin-top: 40px; }
    </style>
</head>
<body>

<h2>Registrar Usuario</h2>
<form method="POST">
    <label>Nombre de Usuario:</label>
    <input type="text" name="nombre_usuario" required>

    <label>Nombre Completo:</label>
    <input type="text" name="nombre_completo" required>

    <label>Email:</label>
    <input type="email" name="email" required>

    <label>Contraseña:</label>
    <input type="password" name="contrasena" required>

    <label>Teléfono:</label>
    <input type="text" name="telefono" required>

    <label>Dirección:</label>
    <input type="text" name="direccion" required>

    <label>Método de Pago Preferido:</label>
    <select name="metodo_pago_preferido" id="" required>
        <option value="OXXO">OXXO</option>
        <option value="Transferencia">Transferencia</option>
        <option value="PayPal">PayPal</option>
    </select>

    <button type="submit">Guardar</button>
</form>

<h2>Lista de Usuarios</h2>
<table>
    <tr>
        <th>ID</th>
        <th>Nombre Usuario</th>
        <th>Nombre Completo</th>
        <th>Email</th>
        <th>Teléfono</th>
        <th>Dirección</th>
        <th>Método de Pago</th>
    </tr>
    <?php
    $sql = "SELECT id_usuario, nombre_usuario, nombre_completo, email, telefono, direccion, metodo_pago_preferido FROM usuario";
    $result = $conn->query($sql);

    while ($row = $result->fetch_assoc()):
    ?>
    <tr>
        <td><?= $row['id_usuario'] ?></td>
        <td><?= htmlspecialchars($row['nombre_usuario']) ?></td>
        <td><?= htmlspecialchars($row['nombre_completo']) ?></td>
        <td><?= htmlspecialchars($row['email']) ?></td>
        <td><?= htmlspecialchars($row['telefono']) ?></td>
        <td><?= htmlspecialchars($row['direccion']) ?></td>
        <td><?= htmlspecialchars($row['metodo_pago_preferido']) ?></td>
    </tr>
    <?php endwhile; ?>
</table>

</body>
</html>
