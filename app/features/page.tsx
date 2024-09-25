import { Zap, Shield, Star, Smartphone, Cloud, RefreshCw, ArrowRight } from 'lucide-react'
import FeatureCard from '../components/FeatureCard'
import CallToAction from '../components/CallToAction'

const features = [
  {
    title: "Lightning Fast",
    description: "Experience blazing fast performance with our optimized PWA.",
    icon: Zap,
    color: "blue"
  },
  {
    title: "Secure",
    description: "Your data is protected with state-of-the-art security measures.",
    icon: Shield,
    color: "green"
  },
  {
    title: "Feature-Rich",
    description: "Enjoy a wide range of features designed to enhance your experience.",
    icon: Star,
    color: "purple"
  },
  {
    title: "Mobile-Friendly",
    description: "Access all features seamlessly on your mobile devices.",
    icon: Smartphone,
    color: "pink"
  },
  {
    title: "Cloud-Integrated",
    description: "Sync your data across devices with our cloud integration.",
    icon: Cloud,
    color: "indigo"
  },
  {
    title: "Regular Updates",
    description: "Stay up-to-date with frequent feature updates and improvements.",
    icon: RefreshCw,
    color: "yellow"
  }
]

export default function Features() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Features</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
      
      <div className="text-center">
        <CallToAction
          text="Get Started"
          href="/signup"
          icon={ArrowRight}
          color="green"
        />
      </div>
    </div>
  )
}