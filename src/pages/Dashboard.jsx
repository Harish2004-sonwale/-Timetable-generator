import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext.jsx'

export default function Dashboard() {
  const { teachers, subjects, classes, timetable } = useApp()
  const cards = [
    { label: 'Teachers', value: teachers.length },
    { label: 'Subjects', value: subjects.length },
    { label: 'Classes', value: classes.length },
    { label: 'Entries in Timetable', value: timetable.length },
  ]
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map(c => (
          <div key={c.label} className="p-4 rounded-lg bg-white shadow border">
            <div className="text-gray-500 text-sm">{c.label}</div>
            <div className="text-2xl font-bold">{c.value}</div>
          </div>
        ))}
      </div>
      <div className="flex gap-3">
        <Link to="/manage" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Add Data</Link>
        <Link to="/generate" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">Generate Timetable</Link>
        <Link to="/reports" className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded">View Reports</Link>
      </div>
    </div>
  )
}
