'use client'

import { useState, useCallback } from 'react'

type SubscribeState = {
  loading: boolean
  error: string | null
  success: boolean
}

export function useSubscribe() {
  const [state, setState] = useState<SubscribeState>({
    loading: false,
    error: null,
    success: false,
  })

  const subscribe = useCallback(async (email: string) => {
    const trimmed = email.trim()

    if (!trimmed) {
      setState({ loading: false, error: 'Email is required', success: false })
      return
    }

    setState({ loading: true, error: null, success: false })

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmed }),
      })

      const data = await res.json()

      if (!res.ok) {
        setState({ loading: false, error: data.error || 'Something went wrong', success: false })
        return
      }

      setState({ loading: false, error: null, success: true })
    } catch {
      setState({ loading: false, error: 'Something went wrong', success: false })
    }
  }, [])

  const reset = useCallback(() => {
    setState({ loading: false, error: null, success: false })
  }, [])

  return { ...state, subscribe, reset }
}