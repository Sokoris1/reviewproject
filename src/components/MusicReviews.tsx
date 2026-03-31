import { useState, useEffect } from 'react';
import { ReviewForm } from './ReviewForm';

interface Review {
    id: number;
    title: string;
    description: string;
}

export const MusicReviews = () => {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [isFormOpen, setIsFormOpen] = useState(false);

    useEffect(() => {
        setReviews([
        {id: 1, title: "Radiohead - OK Computer", description: "Альбом, изменивший представление о музыке." },
        {id: 2, title: "System of a Down - Toxicity", description: "Моментальная классика ню-метала." },
        {id: 3, title: "Akai Ko-En - Toumei Nanoka Kuro Nanoka", description: "Синергия шума и красивейшей мелодии." },
        {id: 4, title: "Ляпис Трубецкой - Весёлые картинки", description: "Самая проницательная и уникальная работа группы." }
        ]);
    }, []);

    const addReview = (title: string, description: string) => {
        const newReview: Review = {id: Date.now(), title, description };
        setReviews([newReview, ...reviews]);
        setIsFormOpen(false);
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

        <div className="grid gap-4">
            {reviews.map((item) => (
            <div key={item.id} className="p-5 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-indigo-200 transition-colors">
                <h3 className="font-bold text-lg text-slate-900 mb-1">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{item.description}</p>
            </div>
            ))}
        </div>

        {isFormOpen && (
            <ReviewForm 
            onAdd={addReview} 
            onClose={() => setIsFormOpen(false)} 
            />
        )}
        </div>
    );
};
