import { Mail, Phone, Shield } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>

          <div>
            <div className='flex items-center space-x-2 mb-4'>
              <div className='bg-gradient-to-r from-orange-500 to-green-600 p-2 rounded-lg'>
                <Shield className='h-6 w-6 text-white' />
              </div>
              <span className='text-xl font-bold'>Vote Chori Awareness</span>
            </div>
            <p className='text-gray-300 leading-relaxed'>
              Empowering citizens to speak up against election fraud and protect democracy in India.
            </p>
          </div>


          <div>
            <h3 className='text-lg font-semibold mb-4 text-orange-400'>Quick Links</h3>
            <ul className='space-y-2 text-gray-300'>
              <li><a href="/" className='hover:text-orange-400 transition-colors'>Home</a></li>
              <li><a href="/stories" className='hover:text-orange-400 transition-colors'>Stories</a></li>
              <li><a href="/submit-story" className='hover:text-orange-400 transition-colors'>Submit Story</a></li>
              <li><a href="/about" className='hover:text-orange-400 transition-colors'>About Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className='text-lg font-semibold mb-4 text-orange-400'>Contact</h3>
            <div className='space-y-3 text-gray-300'>
              <div className='flex items-center space-x-2'>
                <Mail className='h-4 w-4'/>
                <span>contact@votechori.org</span>
              </div>
              <div className='flex items-center space-x-2'>
                <Phone className='h-4 w-4'/>
                <span>+91 95808 56241</span>
              </div>
            </div>
          </div>
        </div>

        <div className='border-t border-gray-800 mt-8 pt-8 text-center text-gray-400'>
          <p>
            &copy; 2025 Vote Chori Awareness. All rights reserved. Fighting for transparent elections.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer