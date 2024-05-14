const express = require('express');
const app = express();

// Data kendaraan mobil sport dalam bentuk array
const selebgramIndo = [
    {
      "nama": "Nicole Parham Adelaide",
      "asal": "Jakarta",
      "instagram": "https://www.instagram.com/nicoleparham_",
      "foto": "https://www.instagram.com/p/Cxsalyjv9lM/media/?size=l"
    },
    {
      "nama": "Pevita Pearce",
      "asal": "Jakarta",
      "instagram": "https://www.instagram.com/pevpearce/",
      "foto": "https://www.instagram.com/p/CxUXOuJyuW6/media/?size=l"
    },
    {
      "nama": "Tatjana Saphira",
      "asal": "Jakarta",
      "instagram": "https://www.instagram.com/tatjanasaphira/",
      "foto": "https://www.instagram.com/p/CsqV0JoyfQD/media/?size=l"
    },
    {
      "nama": "Jennifer Coppen",
      "asal": "Jakarta",
      "instagram": "https://www.instagram.com/jennifercoppenreal20/",
      "foto": "https://www.instagram.com/p/C4u9vWcpRjX/media/?size=l"
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
