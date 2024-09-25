import Link from 'next/link'
import { LucideIcon } from 'lucide-react'

interface CallToActionProps {
  text: string
  href: string
  icon: LucideIcon
  color: string
}

export default function CallToAction({ text, href, icon: Icon, color }: CallToActionProps) {
  return (
    <Link href={href} className={`inline-flex items-center px-6 py-3 bg-${color}-500 text-white font-semibold rounded-full hover:bg-${color}-600 transition duration-300`}>
      {text}
      <Icon className="ml-2 w-5 h-5" />
    </Link>
  )
}