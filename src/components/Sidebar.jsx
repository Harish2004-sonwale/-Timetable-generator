import { NavLink } from 'react-router-dom'

const linkClasses = ({ isActive }) =>
  `block px-4 py-2 rounded hover:bg-gray-100 ${isActive ? 'bg-gray-100 font-medium text-blue-700' : 'text-gray-700'}`

export default function Sidebar() {
  return (
    <aside className="w-56 shrink-0 border-r border-gray-200 bg-white min-h-[calc(100vh-56px)] p-3">
      <nav className="space-y-1">
        <NavLink to="/dashboard" className={linkClasses}>Dashboard</NavLink>
        <NavLink to="/manage" className={linkClasses}>Manage Data</NavLink>
        <NavLink to="/generate" className={linkClasses}>Generate</NavLink>
        <NavLink to="/timetable" className={linkClasses}>View Timetable</NavLink>
        <NavLink to="/reports" className={linkClasses}>Reports</NavLink>
      </nav>
    </aside>
  )
}
