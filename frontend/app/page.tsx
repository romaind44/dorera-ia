'use client'

import { useEffect, useState } from 'react'

interface ApiStatus {
  statut: string
  message: string
  heure_serveur: string
  auteur: string
}

export default function Home() {
  const [status, setStatus] = useState<ApiStatus | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('/api/hello')
      .then(res => res.json())
      .then(data => {
        setStatus(data)
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [])

  return (
    <main className="min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center p-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight">DoreArt IA</h1>
          <p className="mt-2 text-zinc-400 text-sm">Plateforme d'intelligence artificielle</p>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 space-y-4">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${loading ? 'bg-yellow-400 animate-pulse' : error ? 'bg-red-500' : 'bg-green-400'}`} />
            <span className="text-sm font-medium text-zinc-300">Statut de l'API</span>
          </div>

          {loading && (
            <p className="text-zinc-500 text-sm">Connexion en cours...</p>
          )}

          {error && (
            <p className="text-red-400 text-sm">Impossible de contacter l'API</p>
          )}

          {status && (
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-zinc-500">Statut</span>
                <span className="text-green-400 font-medium">{status.statut}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Message</span>
                <span className="text-zinc-200">{status.message}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Heure serveur</span>
                <span className="text-zinc-200 font-mono">{status.heure_serveur}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Auteur</span>
                <span className="text-zinc-200">{status.auteur}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
