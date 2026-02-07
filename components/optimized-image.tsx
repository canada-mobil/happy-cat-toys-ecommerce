"use client"

import Image, { ImageProps } from "next/image"

interface OptimizedImageProps extends Omit<ImageProps, 'loading'> {
  isAboveFold?: boolean
}

export default function OptimizedImage({ isAboveFold = false, priority, ...props }: OptimizedImageProps) {
  return (
    <Image
      {...props}
      loading={isAboveFold ? "eager" : "lazy"}
      priority={isAboveFold || priority}
      quality={80}
    />
  )
}
