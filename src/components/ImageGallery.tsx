// src/components/ImageGallery.tsx
import { ImageCard } from './ImageCard'

const column1 = [
  'https://images.unsplash.com/photo-1617152623457-4c9b639926d7?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=...',
]

const column2 = [
  'https://plus.unsplash.com/premium_photo-1680223046535-13267c53dd87?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=...',
  'https://images.unsplash.com/photo-1701687772319-23cb6f2b954e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=...',
]

const column3 = [
  'https://images.unsplash.com/photo-1611254666354-d75bfe3cadbc?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=...',
  'https://images.unsplash.com/photo-1611428343775-f6bbbdb1c3b5?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=...',
]

function ImageWithRing({ src }: { src: string }) {
  return (
    <div className="relative">
      <ImageCard src={src} />
      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
    </div>
  )
}

export function ImageGallery() {
  return (
    <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
      <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-0 xl:pt-80 ">
        {column1.map((src, i) => (
          <ImageWithRing key={i} src={src} />
        ))}
      </div>

      <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
        {column2.map((src, i) => (
          <ImageWithRing key={i} src={src} />
        ))}
      </div>

      <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
        {column3.map((src, i) => (
          <ImageWithRing key={i} src={src} />
        ))}
      </div>
    </div>
  )
}
