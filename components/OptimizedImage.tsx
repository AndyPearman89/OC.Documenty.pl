import Image from 'next/image'
import { CSSProperties } from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  priority?: boolean
  className?: string
  style?: CSSProperties
  fill?: boolean
  sizes?: string
  quality?: number
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className = '',
  style,
  fill = false,
  sizes,
  quality = 75,
}: OptimizedImageProps) {
  const isExternal = src.startsWith('http') || src.startsWith('//')

  if (isExternal) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        style={style}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
      />
    )
  }

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className={className}
        style={style}
        sizes={sizes || '(max-width: 768px) 100vw, 50vw'}
        quality={quality}
      />
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width || 1200}
      height={height || 675}
      priority={priority}
      className={className}
      style={style}
      quality={quality}
      sizes={sizes}
    />
  )
}
