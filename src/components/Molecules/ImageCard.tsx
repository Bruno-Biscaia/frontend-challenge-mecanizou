import Image from 'next/image'

interface ImageCardProps {
  src: string
  alt?: string
}

export function ImageCard({ src, alt = '' }: ImageCardProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={700}
      height={1050}
      className="w-full rounded-xl bg-gray-900/5 object-cover shadow-lg aspect-[2/3]"
      priority
    />
  )
}
