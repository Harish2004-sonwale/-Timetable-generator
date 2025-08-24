import TimetableGrid from '../components/TimetableGrid.jsx'
import { useApp } from '../context/AppContext.jsx'

export default function ViewTimetable() {
  const { timetable } = useApp()
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">View Timetable</h1>
      <TimetableGrid data={timetable} />
      {timetable.length === 0 && (
        <div className="text-gray-500 text-sm">No timetable generated yet. Click Generate to create one.</div>
      )}
    </div>
  )
}
