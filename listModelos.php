<?php
$directory = './images/modelos/Afrogaybe';
$modelo = null;

if (is_dir($directory)) {
    $files = scandir($directory);
    foreach ($files as $file) {
        if (strtolower(pathinfo($file, PATHINFO_EXTENSION)) === 'jpg') {
            $imagePath = "$directory/$file";
            $modelo = [
                'id' => 'Afrogaybe',
                'name' => 'Afrogaybe',
                'image' => $imagePath
            ];
            break; // Encontrou a imagem, não precisa continuar
        }
    }
}

header('Content-Type: application/json');
echo json_encode($modelo);
?>