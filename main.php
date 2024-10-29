<?php
// Simulação de dados para o exemplo
$data = [
    'banners' => [
        ['id' => 1, 'title' => 'Banner 1', 'image' => 'images/banner1.jpg', 'price' => 29.99],
        ['id' => 2, 'title' => 'Banner 2', 'image' => 'images/banner2.jpg', 'price' => 19.99],
        // Adicione mais banners conforme necessário
    ],
    'lancamentos' => [
        ['id' => 1, 'title' => 'Lançamento 1', 'image' => 'images/lancamento1.jpg'],
        ['id' => 2, 'title' => 'Lançamento 2', 'image' => 'images/lancamento2.jpg'],
        // Adicione mais lançamentos conforme necessário
    ],
    'maisProcuradas' => [
        ['id' => 1, 'title' => 'Modelo 1', 'image' => 'images/modelo1.jpg'],
        ['id' => 2, 'title' => 'Modelo 2', 'image' => 'images/modelo2.jpg'],
        // Adicione mais modelos conforme necessário
    ],
    'modelosPremium' => [
        ['id' => 1, 'title' => 'Modelo Premium 1', 'image' => 'images/modeloPremium1.jpg'],
        ['id' => 2, 'title' => 'Modelo Premium 2', 'image' => 'images/modeloPremium2.jpg'],
        // Adicione mais modelos premium conforme necessário
    ],
    'top10Brasil' => [
        ['id' => 1, 'title' => 'Top Brasil 1', 'image' => 'images/topBrasil1.jpg'],
        ['id' => 2, 'title' => 'Top Brasil 2', 'image' => 'images/topBrasil2.jpg'],
        // Adicione mais top 10 Brasil conforme necessário
    ],
    'top10Gringas' => [
        ['id' => 1, 'title' => 'Top Gringa 1', 'image' => 'images/topGringa1.jpg'],
        ['id' => 2, 'title' => 'Top Gringa 2', 'image' => 'images/topGringa2.jpg'],
        // Adicione mais top 10 Gringas conforme necessário
    ],
    'top10Loiras' => [
        ['id' => 1, 'title' => 'Top Loira 1', 'image' => 'images/topLoira1.jpg'],
        ['id' => 2, 'title' => 'Top Loira 2', 'image' => 'images/topLoira2.jpg'],
        // Adicione mais top 10 Loiras conforme necessário
    ],
    'top10Gamers' => [
        ['id' => 1, 'title' => 'Top Gamer 1', 'image' => 'images/topGamer1.jpg'],
        ['id' => 2, 'title' => 'Top Gamer 2', 'image' => 'images/topGamer2.jpg'],
        // Adicione mais top 10 Gamers conforme necessário
    ],
    'compras' => [
        ['id' => 1, 'title' => 'Compra 1', 'image' => 'images/compra1.jpg'],
        ['id' => 2, 'title' => 'Compra 2', 'image' => 'images/compra2.jpg'],
        // Adicione mais compras conforme necessário
    ]
];

// Verifica se há uma ação específica solicitada
$action = $_GET['action'] ?? null;
if ($action === 'loadCompras') {
    $userId = $_GET['user_id'] ?? null;
    // Filtrar ou modificar os dados de compras conforme necessário para o usuário
    // Aqui você pode adicionar lógica para buscar compras específicas de um usuário
    echo json_encode($data['compras']);
    exit;
}

// Retorna todos os dados por padrão
header('Content-Type: application/json');
echo json_encode($data);
?>