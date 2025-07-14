import * as React from 'react';
import type { ImageProps } from 'next/image';

// Implementação para simular next/image para fins de teste
// Esta simulação renderizará um elemento img simples em vez do componente Image do Next.js

const NextImage = ({ src, alt, ...props }: ImageProps) => {
  const srcString = typeof src === 'string' ? src : 'src' in src ? src.src : '';

  // eslint-disable-next-line @next/next/no-img-element
  return <img src={srcString} alt={alt} {...props} />;
};

export default NextImage;
