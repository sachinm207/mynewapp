'use client'

import { useState, useEffect } from 'react'

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed', platform: string }>;
}

export default function PWAStatus() {
  const [isInstallable, setIsInstallable] = useState(false)
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [installError, setInstallError] = useState<string | null>(null)

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: BeforeInstallPromptEvent) => {
      e.preventDefault()
      setIsInstallable(true)
      setDeferredPrompt(e)
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt as EventListener)

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt as EventListener)
    }
  }, [])

  const handleInstall = async () => {
    if (deferredPrompt) {
      try {
        deferredPrompt.prompt()
        const { outcome } = await deferredPrompt.userChoice
        console.log(`User response to the install prompt: ${outcome}`)
        setDeferredPrompt(null)
        setIsInstallable(false)
      } catch (error) {
        setInstallError('Error during installation: ' + (error instanceof Error ? error.message : String(error)))
      }
    }
  }

  const checkManifest = async () => {
    try {
      const response = await fetch('/manifest.json')
      if (response.ok) {
        const manifest = await response.json()
        console.log('Manifest found:', manifest)
      } else {
        console.error('Manifest not found')
      }
    } catch (error) {
      console.error('Error fetching manifest:', error)
    }
  }

  useEffect(() => {
    checkManifest()
  }, [])

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-4">PWA Status</h2>
      <p className="mb-2">Installable: {isInstallable ? 'Yes' : 'No'}</p>
      <p className="mb-2">Service Worker: {('serviceWorker' in navigator) ? 'Supported' : 'Not Supported'}</p>
      <p className="mb-2">HTTPS: {window.location.protocol === 'https:' ? 'Yes' : 'No'}</p>
      {isInstallable && (
        <button
          onClick={handleInstall}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Install App
        </button>
      )}
      {installError && <p className="text-red-500 mt-2">{installError}</p>}
    </div>
  )
}