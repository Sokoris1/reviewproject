import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Modal } from './Modal';
import { Login } from './Login';
import { Register } from './Register';

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialMode?: 'login' | 'register';
}

export const AuthModal = ({ isOpen, onClose, initialMode = 'login' }: AuthModalProps) => {
    const [mode, setMode] = useState<'login' | 'register'>(initialMode);

  // сбрасываем режим при повторном открытии
    useEffect(() => {
        if (isOpen) setMode(initialMode);
    }, [isOpen, initialMode]);

    return (
        <AnimatePresence>
            {isOpen && (
                <Modal isOpen={isOpen} onClose={onClose}>
                {mode === 'login' ? (
                    <Login
                    onSwitchToRegister={() => setMode('register')}
                    onSuccess={onClose}
                    />
                ) : (
                    <Register
                    onSwitchToLogin={() => setMode('login')}
                    onSuccess={() => setMode('login')} // после регистрации — на логин
                    />
                )}
                </Modal>
            )}
        </AnimatePresence>
    );
};