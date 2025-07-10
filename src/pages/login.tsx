'use client';

import { useState } from 'react';
import { useRouter } from 'next/router';
import { login } from '@/hooks/useAuth';
import { Button } from '@/components/Atoms/Button';
import Image from 'next/image';
import { Typography } from '@/components/Atoms/Typography';
import { InputField } from '@/components/Atoms/InputField';

export default function LoginPage() {
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    login();
    router.push('/products');
  }

  return (
    <div className="flex min-h-screen flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8">
      <div className="w-full sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="relative mx-auto h-26 w-auto">
          <Image
            src="/logo.png"
            alt="Your Company"
            fill
            className="object-contain"
            priority
          />
        </div>

        <Typography
          as="h2"
          variant="h2"
          className="mt-8 text-center text-2xl/9 font-bold tracking-tight text-gray-900"
        >
          Login
        </Typography>
      </div>

      <div className="mt-10 w-4/5 sm:mx-auto sm:w-full sm:max-w-sm">
        <form action="#" method="POST" className="space-y-6">
          <InputField id="username" name="username" type="text" required label="Nome do usuário" />
          <InputField id="password" name="password" type="password" required label="Senha" />
          <Button onClick={handleSubmit} type="submit" variant="primary" size="lg" className='w-full'>
            Entrar
          </Button>
        </form>
      </div>
    </div>

  );
}
