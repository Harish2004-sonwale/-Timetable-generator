import { Fragment } from 'react'
import { Bars3Icon } from '@heroicons/react/24/outline'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 bg-white/70 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bars3Icon className="w-6 h-6 text-gray-600" />
          <span className="font-semibold">Timetable Generator</span>
        </div>
        <div className="text-sm text-gray-500">Preview</div>
      </div>
    </header>
  )
}
