import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Loader from '../components/Loader.jsx'
import { useApp } from '../context/AppContext.jsx'

export default function GenerateSchedule() {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { teachers, subjects, classes, groups, setTimetable } = useApp()

  const generate = () => {
    // basic validation before generating
    if (teachers.length === 0 || subjects.length === 0 || classes.length === 0) {
      alert('Please add at least 1 Teacher, 1 Subject, and 1 Class in Manage Data before generating.')
      return
    }
    setLoading(true)
    setTimeout(() => {
      const slots = [
        '09:00 - 10:00',
        '10:00 - 11:00',
        '11:00 - 12:00',
        '12:00 - 01:00',
        '02:00 - 03:00',
        '03:00 - 04:00',
      ]

      const result = []
      let ti = 0
      let si = 0

      classes.forEach((c, ci) => {
        slots.forEach((slot, siIdx) => {
          const subject = subjects[si % subjects.length]
          const teacher = teachers[ti % teachers.length]
          result.push({
            slot,
            class: c.name || `Class ${ci + 1}`,
            subject: subject.name || 'Subject',
            teacher: teacher.name || 'Teacher',
          })
          ti++
          si++
        })
      })

      setTimetable(result)
      setLoading(false)
      navigate('/timetable')
    }, 300)
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Generate Schedule</h1>
      <button disabled={loading} onClick={generate} className="bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white px-4 py-2 rounded">
        {loading ? 'Generating...' : 'Generate Timetable'}
      </button>
      <div className="text-sm text-gray-600">Make sure you have added Teachers, Subjects, and Classes in Manage Data.</div>
      {loading && <Loader />}
    </div>
  )
}
