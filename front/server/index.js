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

let users = [
    { id: 1, nickname: "test1", mail: "14@dsd.co", password: "Aa123", role: "admin" },
    { id: 2, nickname: "test2", mail: "13@dsd.co", password: "Aa123", role: "admin" },
    { id: 3, nickname: "test3", mail: "12@dsd.co", password: "Aa123", role: "admin" }
];

app.get('/', (req, res) => {
    res.json({ message: "Server is running", reviews, users });
});

app.get('/api/reviews', (req, res) => {
    res.json(reviews);
});

app.get('/api/users', (req, res) => {
    res.json(users);
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

app.post('/api/register', (req, res) => {
    const { nickname, mail, password } = req.body;
    if (!nickname?.trim() || !mail?.trim() || !password?.trim()) {
        return res.status(400).json({ error: "Все поля обязательны" });
    }

    const existingUser = users.find(user => user.mail === mail.trim() || user.nickname === nickname.trim());
    if (existingUser) {
        return res.status(409).json({ error: "Пользователь с таким email или nickname уже существует" });
    }

    const newUser = {
        id: Date.now(),
        nickname: nickname.trim(),
        mail: mail.trim(),
        password: password.trim(),
        role: "user"
    };

    users.push(newUser);
    res.status(201).json({ message: "Пользователь зарегистрирован", user: { id: newUser.id, nickname: newUser.nickname, mail: newUser.mail, role: newUser.role } });
});

app.post('/api/login', (req, res) => {
    const { mail, password } = req.body;
    if (!mail?.trim() || !password?.trim()) {
        return res.status(400).json({ error: "Email и пароль обязательны" });
    }

    const user = users.find(user => user.mail === mail.trim() && user.password === password.trim());
    if (!user) {
        return res.status(401).json({ error: "Неверный email или пароль" });
    }

    res.status(200).json({ message: "Авторизация успешна", user: { id: user.id, nickname: user.nickname, mail: user.mail } });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});