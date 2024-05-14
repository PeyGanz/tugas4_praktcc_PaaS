<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Selebgram Indonesia</title>
    <style>
        .container {
            max-width: 800px;
            margin: auto;
            padding: 20px;
            font-family: Arial, sans-serif;
        }
        .selebgram {
            border-bottom: 1px solid #ddd;
            padding: 10px 0;
        }
        .selebgram img {
            max-width: 500px;
            min-width: 100px;
            height: auto;
            display: block;
        }
        .selebgram h2 {
            margin: 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Daftar Selebgram Indonesia</h1>
        <?php
        // URL API
        $api_url = 'https://dev-api-q2od2bwu5a-uc.a.run.app/api/selebgram-indo';

        // Mendapatkan data dari API
        $json_data = file_get_contents($api_url);

        // Menguraikan JSON menjadi array
        $selebgrams = json_decode($json_data, true);

        // Memeriksa apakah data ada
        if (!empty($selebgrams)) {
            // Loop melalui setiap selebgram dan menampilkan informasinya
            foreach ($selebgrams as $selebgram) {
                echo '<div class="selebgram">';
                echo '<h2>' . htmlspecialchars($selebgram['nama']) . '</h2>';
                echo '<p>Asal: ' . htmlspecialchars($selebgram['asal']) . '</p>';
                echo '<p>Instagram: <a href="' . htmlspecialchars($selebgram['instagram']) . '" target="_blank">' . htmlspecialchars($selebgram['instagram']) . '</a></p>';
                echo '<img src="' . $selebgram['foto'] . '" alt="Foto ' . htmlspecialchars($selebgram['foto']) . '">';
                echo '</div>';
            }
        } else {
            echo '<p>Tidak ada data selebgram yang ditemukan.</p>';
        }


        ?>
    </div>
</body>
</html>
