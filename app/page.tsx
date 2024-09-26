'use client'

import { useAuth } from './contexts/AuthContext'

export default function Home() {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Welcome to My PWA App</h1>
      
      {user ? (
        <div className="text-center">
          <p className="text-xl mb-4">Welcome, {user.email}!</p>
          <p>Youre signed in and ready to use the app.</p>
        </div>
      ) : (
        <div className="text-center">
          <p className="text-xl mb-4">Please sign in to use the app.</p>
        </div>
      )}
    </div>
  )
}