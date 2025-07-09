import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="text-center p-4">
        <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          Bem-vindo ao Catálogo
        </h1>
        <Link href="/login">
          <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition cursor-pointer">
            Entrar
          </button>
        </Link>
      </div>
    </main>
  );
}
