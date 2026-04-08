import { useState, useEffect } from 'react';
import { ReviewForm } from './ReviewForm';
import { AnimatePresence } from 'framer-motion';

interface Review {
    id: number;
    artist: string;
    album: string;
    title: string;
}

export const MusicReviews = () => {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchReviews();
    }, []);

    const fetchReviews = async() => {
        try {
            setLoading(true);
            const response = await fetch("http://localhost:5000/api/reviews");
            if (!response.ok) throw new Error('Loading error!');
            const data = await response.json();
            setReviews(data);
        } catch (err) {
            setError('Loading failed :(');
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    const addReview = async (artist: string, album: string, title: string) => {
        try {
            const response = await fetch('http://localhost:5000/api/reviews', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({artist, album, title})
            });
            if (!response.ok) throw new Error('Ошибка при отправке');
            
            const newReview = await response.json();
            setReviews(prev => [newReview, ...prev]);
            setIsFormOpen(false);
        } catch (err) {
            setError('Не удалось добавить рецензию');
            console.error(err);
        }
    };

    return (
        <div className="max-w-6xl mx-auto p-6 font-comfortaa">
            <div className="flex items-center justify-between mb-10 bg-white  rounded-2xl ">
                <div>
                    <h1 className="text-[1.75rem] font-bold text-black ">рецензии</h1>
                </div>
                <button 
                    onClick={() => setIsFormOpen(true)}
                    className="bg-purple-600 text-white px-5 py-2.5 rounded-xl font-medium hover:bg-purple-500 transition-all active:scale-95"
                    >
                    Написать
                </button>
            </div>

        {loading && <p className="text-center text-slate-500">Загрузка...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        <div className="grid gap-4">
            {reviews.map((item) => (
            <div key={item.id} className="p-5 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-indigo-200 transition-colors">
                <h3 className="font-bold text-lg text-slate-900 mb-1 break-words">{item.artist} - {item.album}</h3>
                <p className="text-slate-600 text-sm break-words">{item.title}</p>
            </div>
            ))}
        </div>

        <AnimatePresence>
                {isFormOpen && (
                    <ReviewForm 
                        onAdd={addReview} 
                        onClose={() => setIsFormOpen(false)} 
                    />
                )}
        </AnimatePresence>
        </div>
    );
};
