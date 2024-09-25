import { ArrowRight, Zap, Shield, Star } from 'lucide-react'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Welcome to My PWA App</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-blue-500 rounded-lg shadow-lg p-6 text-white">
          <Zap className="w-12 h-12 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Lightning Fast</h2>
          <p>Experience blazing fast performance with our optimized PWA.</p>
        </div>
        
        <div className="bg-green-500 rounded-lg shadow-lg p-6 text-white">
          <Shield className="w-12 h-12 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Secure</h2>
          <p>Your data is protected with state-of-the-art security measures.</p>
        </div>
        
        <div className="bg-purple-500 rounded-lg shadow-lg p-6 text-white">
          <Star className="w-12 h-12 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Feature-Rich</h2>
          <p>Enjoy a wide range of features designed to enhance your experience.</p>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <a href="/about" className="inline-flex items-center px-6 py-3 bg-yellow-500 text-white font-semibold rounded-full hover:bg-yellow-600 transition duration-300">
          Learn More
          <ArrowRight className="ml-2 w-5 h-5" />
        </a>
      </div>
    </div>
  )
}