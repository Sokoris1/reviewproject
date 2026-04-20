import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Props {
    onAdd: (artist: string, album: string, title: string) => void;
    onClose: () => void;
}

export const ReviewForm = ({ onAdd, onClose }: Props) => {
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    
    useEffect(() => {
        //document.body.style.overflow = 'hidden';
        const handleEsc = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
        window.addEventListener('keydown', handleEsc);
        
        return () => {
            //document.body.style.overflow = 'unset';
            window.removeEventListener('keydown', handleEsc);
        };
    }, [onClose]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            className="absolute inset-0 bg-black/60 "
            onClick={onClose}
        />
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.1 }}
            className="relative bg-white w-full max-w-md p-8 rounded-3xl shadow-2xl"
        >
        <div className="">
            {/* Оверлей */}
            <div className="" onClick={onClose} />

            {/* Форма */}
            <div className=" border border-slate-100">
                <h2 className="text-xl font-bold mb-6 text-slate-800">Новая рецензия</h2>
                
                <div className="space-y-4">
                <input 
                    className="w-full px-4 py-3 bg-slate-50 rounded-xl border-none ring-1 ring-slate-200 focus:ring-1 focus:ring-purple-600 outline-none transition-all"
                    placeholder="Исполнитель"
                    value={artist}
                    onChange={(e) => setArtist(e.target.value)}
                />
                <input 
                    autoFocus
                    className="w-full px-4 py-3 bg-slate-50 rounded-xl border-none ring-1 ring-slate-200 focus:ring-1 focus:ring-purple-600 outline-none transition-all"
                    placeholder="Альбом"
                    value={album}
                    onChange={(e) => setAlbum(e.target.value)}
                />
                <textarea 
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-50 rounded-xl border-none ring-1 ring-slate-200 focus:ring-1 focus:ring-purple-600 outline-none transition-all resize-none"
                    placeholder="Напишите вашу рецензию"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                </div>

                <div className="flex gap-3 mt-8">
                    <button 
                        onClick={onClose}
                        className="flex-1 py-3 text-slate-500 font-medium hover:text-slate-700 transition-colors"
                    >
                        Отмена
                    </button>
                    <button 
                        disabled={!artist.trim() || !album.trim() || !title.trim()}
                        onClick={() => onAdd(artist, album, title)}
                        className="flex-1 py-3 bg-purple-600 text-white rounded-xl font-bold hover:bg-purple-500 disabled:bg-purple-300 transition-all"
                    >
                        Опубликовать
                    </button>
                </div>
            </div>
        </div>
        </motion.div>
        </motion.div>
    );
};
