"use client"

import { useI18n } from "@/lib/i18n-context"
import { Product } from "@/lib/products"

export function useLocalizedProduct() {
  const { locale } = useI18n()
  const isEn = locale === "en"

  function localize(p: Product) {
    return {
      ...p,
      description: isEn ? p.descriptionEn : p.description,
      longDescription: isEn ? p.longDescriptionEn : p.longDescription,
      features: isEn ? p.featuresEn : p.features,
      materials: isEn ? p.materialsEn : p.materials,
      shipping: isEn ? p.shippingEn : p.shipping,
    }
  }

  return { localize, isEn, locale }
}
