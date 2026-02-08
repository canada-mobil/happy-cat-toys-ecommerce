"use client"

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react"
import { fr } from "@/lib/translations/fr"
import { en } from "@/lib/translations/en"

type Locale = "fr" | "en"
type Translations = typeof fr

interface I18nContextType {
  locale: Locale
  t: Translations
  setLocale: (locale: Locale) => void
  toggleLocale: () => void
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

const translations: Record<Locale, Translations> = { fr, en }

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en")

  useEffect(() => {
    // Check localStorage first
    const saved = localStorage.getItem("purrball-lang") as Locale | null
    if (saved && (saved === "fr" || saved === "en")) {
      setLocaleState(saved)
      return
    }
    // Auto-detect from browser/phone language
    const browserLang = navigator.language.toLowerCase()
    if (browserLang.startsWith("fr")) {
      setLocaleState("fr")
    } else {
      setLocaleState("en")
    }
  }, [])

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem("purrball-lang", newLocale)
  }, [])

  const toggleLocale = useCallback(() => {
    const newLocale = locale === "fr" ? "en" : "fr"
    setLocale(newLocale)
  }, [locale, setLocale])

  return (
    <I18nContext.Provider value={{ locale, t: translations[locale], setLocale, toggleLocale }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) throw new Error("useI18n must be used within I18nProvider")
  return context
}
