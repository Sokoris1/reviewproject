import React, { useEffect, useState } from 'react';

interface Props {
    onAdd: (title: string, description: string) => void;
    onClose: () => void;
}

export const ReviewForm = ({ onAdd, onClose }: Props) => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        const handleEsc = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
        window.addEventListener('keydown', handleEsc);
        
        return () => {
            document.body.style.overflow = 'unset';
            window.removeEventListener('keydown', handleEsc);
        };
    }, [onClose]);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Оверлей */}
            <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={onClose} />

            {/* Форма */}
            <div className="relative bg-white w-full max-w-md p-8 rounded-3xl shadow-2xl border border-slate-100">
                <h2 className="text-xl font-bold mb-6 text-slate-800">Новая рецензия</h2>
                
                <div className="space-y-4">
                <input 
                    autoFocus
                    className="w-full px-4 py-3 bg-slate-50 rounded-xl border-none ring-1 ring-slate-200 focus:ring-1 focus:ring-purple-600 outline-none transition-all"
                    placeholder="Исполнитель и альбом"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea 
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-50 rounded-xl border-none ring-1 ring-slate-200 focus:ring-1 focus:ring-purple-600 outline-none transition-all resize-none"
                    placeholder="Ваши мысли об этой музыке..."
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
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
                        disabled={!title.trim() || !desc.trim()}
                        onClick={() => onAdd(title, desc)}
                        className="flex-1 py-3 bg-purple-600 text-white rounded-xl font-bold hover:bg-purple-500 disabled:bg-purple-300 transition-all"
                    >
                        Опубликовать
                    </button>
                </div>
            </div>
        </div>
    );
};
