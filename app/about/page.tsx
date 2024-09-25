import { Users, Target, TrendingUp } from 'lucide-react'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>
      
      <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg shadow-lg p-6 text-white mb-8">
        <p className="text-lg">
          We are a team dedicated to creating amazing progressive web apps that push the boundaries of what possible on the web.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-orange-400 rounded-lg shadow-lg p-6 text-white">
          <Users className="w-12 h-12 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Our Team</h2>
          <p>A diverse group of talented individuals working together to create exceptional experiences.</p>
        </div>
        
        <div className="bg-teal-500 rounded-lg shadow-lg p-6 text-white">
          <Target className="w-12 h-12 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p>To revolutionize the web by creating fast, reliable, and engaging progressive web apps.</p>
        </div>
        
        <div className="bg-indigo-500 rounded-lg shadow-lg p-6 text-white">
          <TrendingUp className="w-12 h-12 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Our Growth</h2>
          <p>Continuously evolving and improving to meet the ever-changing needs of our users.</p>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <a href="/" className="inline-flex items-center px-6 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition duration-300">
          Back to Home
        </a>
      </div>
    </div>
  )
}