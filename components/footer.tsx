import Link from 'next/link'
import { Mail, Phone, Facebook, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-8 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="text-left">
            <h3 className="text-2xl font-bold mb-4">About Us</h3>
            <p className="mb-4">We create beautiful, responsive, and user-friendly websites that help businesses grow in the digital world.</p>
            <div className="flex space-x-4">
              <Link href="mailto:ayush@it4b.in" className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                ayush@it4b.in
              </Link>
            </div>
          </div>
          {/* Add other footer sections here */}
        </div>
        <div className="text-center">
          <p>&copy; 2024 My Web Creations. All Rights Reserved.</p>
          <p>Designed with ❤️ by Ayush(IT4B.in)</p>
        </div>
      </div>
    </footer>
  )
}

