import { Button } from '@/components/Atoms/Button';
import Link from 'next/link';
import { ImageGallery } from '@/components/Molecules/ImageGallery';
import { Typography } from '@/components/Atoms/Typography';

export default function HomePage() {
  return (
    <div className="mx-auto min-w-[380px] max-w-7xl">
      <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
        <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
          <Typography variant="h1" className="text-pretty text-text-">
            Estilo que te acompanha em todos os momentos
          </Typography>

          <Typography
            variant="p"
            className="mt-8 text-lg font-medium text-pretty  sm:max-w-md sm:text-xl/8 lg:max-w-none"
          >
            Descubra roupas, calçados e acessórios que refletem sua personalidade com autenticidade e conforto. Do casual ao urbano, temos o look ideal pra você se destacar
          </Typography>

          <Link href="/products" className="mt-10 flex items-center gap-x-6">
            <Button variant="primary" size="md" className=''>
              Ver Catálogo
            </Button>
          </Link>
        </div>

        <ImageGallery />
      </div>
    </div>


  );
}
