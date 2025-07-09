'use client';

import { useState } from 'react';
import { useRouter } from 'next/router';
import { login } from '@/hooks/useAuth';

export default function LoginPage() {
  const [user, setUser] = useState('');
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    login();
    router.push('/products'); // ou '/produtos' conforme sua rota
  }

  return (
    <main className="flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow">
        <input
          type="text"
          placeholder="Usuário"
          value={user}
          onChange={e => setUser(e.target.value)}
          className="mb-4 w-full border px-2 py-1"
          required
        />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
          Entrar
        </button>
      </form>
    </main>
  );
}
