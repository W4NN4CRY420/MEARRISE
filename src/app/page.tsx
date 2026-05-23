'use client';

import  {useState} from 'react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

export default function HomePage() {
  const [text, setText] = useState('');
  const [submitted, setSubmitted] = useState('');

  const handleClick = () => {
    setSubmitted(text);
    alert(`Вы ввели: ${text}`);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold text-center">Тест компонентов</h1>

        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Введите что-нибудь"
        />

        <div className="flex gap-2">
          <Button variant="primary" onClick={handleClick}>
            Отправить
          </Button>
          <Button variant="secondary" onClick={() => setText('')}>
            Очистить
          </Button>
        </div>

        {submitted && (
          <p className="text-sm text-gray-600">
            Последнее отправленное: <span className="font-mono">{submitted}</span>
          </p>
        )}

        <div className="pt-4">
          <Button disabled>Неактивная кнопка</Button>
        </div>
      </div>
    </main>
  );
}