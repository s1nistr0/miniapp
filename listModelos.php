<?php
$directory = './images/MODELOS';
$modelos = [];

if (is_dir($directory)) {
    $dirs = scandir($directory);
    foreach ($dirs as $dir) {
        if ($dir !== '.' && $dir !== '..') {
            $modelDir = "$directory/$dir";
            if (is_dir($modelDir)) {
                $files = scandir($modelDir);
                foreach ($files as $file) {
                    if (strtolower(pathinfo($file, PATHINFO_EXTENSION)) === 'jpg') {
                        $imagePath = "$modelDir/$file";
                        $modelos[] = [
                            'id' => $dir,
                            'name' => $dir,
                            'image' => $imagePath
                        ];
                        break; // Assume que há apenas uma imagem por modelo
                    }
                }
            }
        }
    }
}

header('Content-Type: application/json');
echo json_encode($modelos);
?>