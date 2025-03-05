"use client"

import { useEffect, useState } from "react"

interface TypedTextProps {
  words: string[]
  className?: string
  typingSpeed?: number
  deletingSpeed?: number
  delayBetweenWords?: number
}

export function TypedText({
  words,
  className,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenWords = 2000,
}: TypedTextProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const word = words[currentWordIndex]

    if (isDeleting) {
      if (currentText === "") {
        setIsDeleting(false)
        setCurrentWordIndex((prev) => (prev + 1) % words.length)
        return
      }

      const timer = setTimeout(() => {
        setCurrentText(currentText.slice(0, -1))
      }, deletingSpeed)
      return () => clearTimeout(timer)
    }

    if (currentText === word) {
      const timer = setTimeout(() => {
        setIsDeleting(true)
      }, delayBetweenWords)
      return () => clearTimeout(timer)
    }

    const timer = setTimeout(() => {
      setCurrentText(word.slice(0, currentText.length + 1))
    }, typingSpeed)
    return () => clearTimeout(timer)
  }, [currentText, currentWordIndex, isDeleting, words, typingSpeed, deletingSpeed, delayBetweenWords])

  return <span className={className}>{currentText}</span>
}

