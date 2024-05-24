const express = require('express');
const app = express();

// Data kendaraan mobil sport dalam bentuk array
const selebgramIndo = [
    {
      "nama": "Nicole Parham Adelaide",
      "asal": "Jakarta",
      "instagram": "https://www.instagram.com/nicoleparham_",
      "foto": "https://i.pinimg.com/564x/98/9b/e2/989be23653fd2e69ce15276159fa64a8.jpg" 
    },
    {
      "nama": "Pevita Pearce",
      "asal": "Jakarta",
      "instagram": "https://www.instagram.com/pevpearce/",
      "foto": "https://i.pinimg.com/564x/04/8a/38/048a381589d226a5a6d435ef00d203d4.jpg"
    },
    {
      "nama": "Tatjana Saphira",
      "asal": "Jakarta",
      "instagram": "https://www.instagram.com/tatjanasaphira/",
      "foto": "https://i.pinimg.com/564x/14/a4/96/14a4961a3bf6752fb14a5878d097ba91.jpg"
    },
    {
      "nama": "Jennifer Coppen",
      "asal": "Jakarta",
      "instagram": "https://www.instagram.com/jennifercoppenreal20/",
      "foto": "https://i.pinimg.com/564x/36/1d/cf/361dcf27ec2fb7c0981f5e0e04bb1ae8.jpg"
    },
    {
      "nama": "Anya Geraldine",
      "asal": "Jakarta",
      "instagram": "https://www.instagram.com/anyageraldine/",
      "foto": "https://i.pinimg.com/564x/48/b7/62/48b7623fc9a24837138507c4d193b8a2.jpg" 
    }
];

// Menyediakan endpoint untuk mendapatkan data kendaraan mobil sport
app.get('/api/selebgram-indo', (req, res) => {
    res.json(selebgramIndo);
});

// Menentukan port untuk server
const PORT = process.env.PORT || 3000;

// Mulai server
app.listen(PORT, () => {
    console.log(Server berjalan di port ${PORT});
});
