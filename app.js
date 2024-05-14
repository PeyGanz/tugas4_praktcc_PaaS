const express = require('express');
const app = express();

// Data kendaraan mobil sport dalam bentuk array
const selebgramIndo = [
    {
      "nama": "Nicole Parham Adelaide",
      "asal": "Jakarta",
      "instagram": "https://www.instagram.com/nicoleparham_",
      "foto": "https://instagram.fjog3-1.fna.fbcdn.net/v/t51.29350-15/382760113_1260525844640797_9145599865539890632_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fjog3-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=0r3xa1SS17cQ7kNvgGF-qX-&edm=AGenrX8BAAAA&ccb=7-5&oh=00_AYD7sDWIfX1-E-RmLwAb2348-llUIy436BXakICFk3tBxg&oe=6648E263&_nc_sid=ed990e"
    },
    {
      "nama": "Pevita Pearce",
      "asal": "Jakarta",
      "instagram": "https://www.instagram.com/pevpearce/",
      "foto": "https://instagram.fjog3-1.fna.fbcdn.net/v/t51.29350-15/379665177_1457345235111679_994784699714784981_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fjog3-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=BTZpJry9WRoQ7kNvgEzEufx&edm=AGenrX8BAAAA&ccb=7-5&oh=00_AYDIZnXOsOp3BvFSalNAU7dpk75dLyilDzHiRcJxsg2Yfg&oe=6648E06C&_nc_sid=ed990e"
    },
    {
      "nama": "Tatjana Saphira",
      "asal": "Jakarta",
      "instagram": "https://www.instagram.com/tatjanasaphira/",
      "foto": "https://instagram.fjog3-1.fna.fbcdn.net/v/t51.29350-15/348874014_1011759473143526_2801124414389343535_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fjog3-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=9JHYydPOFBsQ7kNvgFgf0-Q&edm=AGenrX8BAAAA&ccb=7-5&oh=00_AYAf8KozAoGMxvJ1nyuXSyRbjFQDGRa-rA9lL6KP32t6Mg&oe=6648E261&_nc_sid=ed990e"
    },
    {
      "nama": "Jennifer Coppen",
      "asal": "Jakarta",
      "instagram": "https://www.instagram.com/jennifercoppenreal20/",
      "foto": "https://instagram.fjog3-1.fna.fbcdn.net/v/t39.30808-6/432612809_18423902113060813_1910400443810607547_n.jpg?stp=dst-jpg_e35_s1080x1080_sh0.08&_nc_ht=instagram.fjog3-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=dnmGJ8ePWsEQ7kNvgHWONVO&edm=AGenrX8AAAAA&ccb=7-5&oh=00_AYBBrY6xGlgQFbRleWMxCSnbr6Ku5asUUAVJgNecgeZ_Tg&oe=6648EB7E&_nc_sid=ed990e"
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
