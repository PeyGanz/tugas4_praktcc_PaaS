<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Selebgram Idaman Indonesia</title>
    <link rel="icon" type="image/x-icon" href="https://cdn.vectorstock.com/i/2000v/61/02/pinup-girl-vector-446102.avif">
    <style>
        body {
            font-family: Arial, sans-serif;
            background: linear-gradient(to bottom, rgba(221, 160, 221, 0.5) 0%, rgba(255, 255, 255, 1) 100%); /* Gradien putih ke bawah */
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: flex-start; /* Align items to the top */
            min-height: 100vh;
            padding-top: 50px;
            padding-bottom: 100px; /* Add padding to avoid content getting cut off at the top */
        }
        .container {
            width: 100%;
            max-width: 800px;
            margin: 20px 60px 20px 50px;
            padding: 20px 50px;
            border-radius: 80px;
            box-shadow: 30px 40px 8px rgba(200, 0, 50, 0.3);
            text-align: center;
            background-image: linear-gradient(rgba(240, 240, 240, 0.9), rgba(240, 240, 240, 0.6)), url('https://images.pexels.com/photos/1939485/pexels-photo-1939485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'); 
            background-position: center center;
            background-size: cover; 
        }
        .selebgram {
            border-bottom: 10px solid palevioletred;
            padding: 20px 0;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .selebgram img {
            max-width: 200px;
            height: auto;
            border-radius: 60%;
            margin-top: 10px;
            border: 5px solid pink;
            box-shadow: 0 0 10px rgba(0, 0, 0, 1); 
            transition: transform 0.5s;
        }
        .selebgram img:hover {
           transform: scale(1.1); /* Efek zoom saat hover */
           border: 5px solid palevioletred;
        }
        .selebgram h2 {
            margin: 10px 0 5px;
            color: #333;
        }
        .selebgram p {
            margin: 5px 0;
            color: #666;
        }
        .selebgram a {
            color: #007BFF;
            text-decoration: none;
            word-wrap: break-word;
        }
        .selebgram a:hover {
            text-decoration: underline;
            color: #007BFF;
        }
        h1 {
            color: rgba(229, 100, 221, 0.8); /* Warna yang lebih gelap */
            margin-bottom: 20px;
            text-shadow: 2px 2px 4px rgba(221, 160, 221, 0.5); /* Efek bayangan teks */
        }
        @media (max-width: 600px) {
            .container {
                width: 90%;
                padding: 10px;
                border-radius: 20px;
            }
            .selebgram img {
                max-width: 100px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>TOP Selebgram Indonesia</h1>
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
                echo '<p>Instagram: <a href="' . htmlspecialchars($selebgram['instagram']) . '" target="_blank" style="color: purple;">' . htmlspecialchars($selebgram['instagram']) . '</a></p>';
                echo '<img src="' . htmlspecialchars($selebgram['foto']) . '" alt="Foto ' . htmlspecialchars($selebgram['nama']) . '">';
                echo '</div>';
            }
        } else {
            echo '<p>Tidak ada data selebgram yang ditemukan.</p>';
        }
        ?>
    </div>
</body>
</html>
