"use client"
import React, { useEffect, useState } from "react"
import Lottie from "lottie-react"

type Props = {
  src: string
  loop?: boolean
  autoplay?: boolean
  style?: React.CSSProperties
}

export default function LottiePlayer({ src, loop = true, autoplay = true, style }: Props) {
  const [data, setData] = useState<any | null>(null)

  useEffect(() => {
    let mounted = true
    fetch(src)
      .then((r) => r.json())
      .then((json) => mounted && setData(json))
      .catch(() => {})
    return () => {
      mounted = false
    }
  }, [src])

  if (!data) return null
  return <Lottie animationData={data} loop={loop} autoplay={autoplay} style={style} />
}
