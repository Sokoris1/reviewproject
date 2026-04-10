import express from "express";
import cors from "cors";

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

let reviews = [
    { id: 1, artist: "Radiohead", album: "OK Computer", title: "Альбом, изменивший представление о музыке." },
    { id: 2, artist: "System of a Down", album: "Toxicity", title: "Моментальная классика ню-метала." },
    { id: 3, artist: "Akai Ko-En", album: "Toumei Nanoka Kuro Nanoka", title: "Синергия шума и красивейшей мелодии." },
    { id: 4, artist: "Ляпис Трубецкой", album: "Весёлые картинки", title: "Самая проницательная и уникальная работа группы." }
];

app.get('/api/reviews', (req, res) => {
    res.json(reviews);
});

app.post('/api/reviews', (req, res) =>{
    const { artist, album, title } = req.body;
    if (!artist?.trim() || !album?.trim() || !title?.trim()){
        return res.status(400).json({ error: "Все поля обязательны" });
    }

    const newReview = {
        id: Date.now(),
        artist: artist.trim(),
        album: album.trim(),
        title: title.trim()
    }

    reviews = [newReview, ...reviews];
    res.status(201).json(newReview);
})

// app.get("/api/data", (req, res) => {
//     res.json({ message: "Hello from server!", title: "Яблоко" });
// });

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});