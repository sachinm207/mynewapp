import { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  title: string
  description: string
  icon: LucideIcon
  color: string
}

export default function FeatureCard({ title, description, icon: Icon, color }: FeatureCardProps) {
  return (
    <div className={`bg-${color}-500 rounded-lg shadow-lg p-6 text-white`}>
      <Icon className="w-12 h-12 mb-4" />
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p>{description}</p>
    </div>
  )
}