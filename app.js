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
      "nama": "Ratna Icikiwir",
      "asal": "Pluto",
      "instagram": "https://www.instagram.com/rtnasr/",
      "foto": "https://scontent-xsp1-3.cdninstagram.com/v/t51.2885-15/66283234_383773632276252_4465167956421089769_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYyODg1In0&_nc_ht=scontent-xsp1-3.cdninstagram.com&_nc_cat=100&_nc_ohc=rkP_HQvPPBQQ7kNvgHqCiYO&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=MjA5ODQzNjM2MDI1MjQ1NTgxMA%3D%3D.2-ccb7-5&oh=00_AYDASQey-417jIwqInicuDKrCPxDym2P91Ya9QKNICJR9Q&oe=66475E4E&_nc_sid=cf751b" 
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
    console.log(`Server berjalan di port ${PORT}`);
});
