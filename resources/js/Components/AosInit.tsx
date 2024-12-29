"use client"

import { useEffect } from 'react'
import 'aos/dist/aos.css';
import AOS from "aos";

export const AOSInit = () => {
  useEffect(() => {
            if (typeof window !== "undefined") {
    AOS.init({
          once: true
        });
        }

  }, [])

  return null
}
