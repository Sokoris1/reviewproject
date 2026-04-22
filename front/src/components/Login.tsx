import { useState } from 'react';

interface LoginProps {
  onSwitchToRegister: () => void;
  onSuccess?: () => void;
}

export const Login = ({ onSwitchToRegister, onSuccess }: LoginProps) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        if (!email.trim() || !password.trim()) {
            setError('Пожалуйста, заполните все поля');
            return;
        }

        setLoading(true);
        setError('');

        try {
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    mail: email.trim(),
                    password: password.trim(),
                }),
            });

            const data = await response.json();

            if (response.ok) {
                console.log('Авторизация успешна:', data.user);
                alert('Авторизация успешна!');
                onSuccess?.();
            } else {
                setError(data.error || 'Ошибка авторизации');
            }
            } catch (err) {
                setError('Ошибка сети. Попробуйте позже.');
                console.error('Login error:', err);
            } finally {
                setLoading(false);
        }
    };

  return (
    <form className="font-comfortaa bg-white p-8 rounded-lg shadow-md w-full max-w-md min-h-[350px] flex flex-col justify-between" onSubmit={(e) => {
        e.preventDefault();
        handleLogin();
      }}>
        <h2 className="text-2xl font-bold text-center mb-6">Вход</h2>

        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-500"
          />
        </div>

        <div className="mb-4">
          <input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-500"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 px-4 rounded-lg font-medium transition-colors duration-200 ${
            loading
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-[#8400FF] hover:bg-[#a442ff] text-white'
          }`}
        >
          {loading ? 'Вход...' : 'Войти'}
        </button>
        <p className='pt-3'>
          Нет аккаунта?{' '}
          <button
            type="button"
            onClick={onSwitchToRegister}
            className="text-[#8400FF] hover:underline"
          >
            Зарегистрироваться
          </button>
        </p>
    </form>
  );
};
