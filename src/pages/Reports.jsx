import ReportDownload from '../components/ReportDownload.jsx'
import { useApp } from '../context/AppContext.jsx'

export default function Reports() {
  const { timetable } = useApp()
  const today = new Date().toISOString().slice(0, 10)

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Reports</h1>
      <div className="bg-white border rounded shadow">
        {timetable.length === 0 ? (
          <div className="px-4 py-6 text-gray-500 text-sm">No reports yet. Generate a timetable first.</div>
        ) : (
          <ul>
            <li className="flex items-center justify-between px-4 py-2 border-b last:border-b-0">
              <div>
                <div className="font-medium">Timetable {today}</div>
                <div className="text-xs text-gray-500">Entries: {timetable.length}</div>
              </div>
              <ReportDownload />
            </li>
          </ul>
        )}
      </div>
    </div>
  )
}
