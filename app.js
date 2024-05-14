const express = require('express');
const app = express();

// Data kendaraan mobil sport dalam bentuk array
const selebgramIndo = [
    {
      "nama": "Nicole Parham Adelaide",
      "asal": "Jakarta",
      "instagram": "https://www.instagram.com/nicoleparham_",
      "foto": "https://www.instagram.com/p/Cxsalyjv9lM/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
    {
      "nama": "Pevita Pearce",
      "asal": "Jakarta",
      "instagram": "https://www.instagram.com/pevpearce/",
      "foto": "https://www.instagram.com/p/CxUXOuJyuW6/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
    {
      "nama": "Tatjana Saphira",
      "asal": "Jakarta",
      "instagram": "https://www.instagram.com/tatjanasaphira/",
      "foto": "https://example.com/tatjana_saphira.jpg"
    },
    {
      "nama": "Jennifer Coppen",
      "asal": "Jakarta",
      "instagram": "https://www.instagram.com/jennifercoppenreal20/",
      "foto": "https://www.instagram.com/p/C4u9vWcpRjX/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
];

// Menyediakan endpoint untuk mendapatkan data kendaraan mobil sport
app.get('/api/selebgram-indo', (req, res) => {
    res.json(selebgramIndo);
});

// Menentukan port untuk server
const PORT = process.env.PORT || 3000;

// Mulai server
app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});
