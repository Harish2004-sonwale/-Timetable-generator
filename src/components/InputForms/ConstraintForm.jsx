import { useState } from 'react'
import { useApp } from '../../context/AppContext.jsx'

export default function ConstraintForm() {
  const { constraints, setConstraints } = useApp()
  const [form, setForm] = useState({ type: 'MaxHoursPerDay', value: '' })

  const add = (e) => {
    e.preventDefault()
    if (!form.value) return
    setConstraints([...constraints, form])
    setForm({ type: 'MaxHoursPerDay', value: '' })
  }

  const remove = (idx) => {
    const next = constraints.filter((_, i) => i !== idx)
    setConstraints(next)
  }

  return (
    <div>
      <form onSubmit={add} className="grid sm:grid-cols-3 gap-3 mb-4">
        <select className="border p-2 rounded" value={form.type} onChange={e => setForm({ ...form, type: e.target.value })}>
          <option value="MaxHoursPerDay">Max Hours / Day</option>
          <option value="NoConsecutive">No Consecutive Same Subject</option>
          <option value="TeacherAvailability">Teacher Availability</option>
        </select>
        <input className="border p-2 rounded" placeholder="Value (e.g., 5)" value={form.value} onChange={e => setForm({ ...form, value: e.target.value })} />
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Add Constraint</button>
      </form>
      <ul className="pl-0 divide-y">
        {constraints.map((c, i) => (
          <li key={i} className="flex items-center justify-between py-2">
            <span>{c.type}: {c.value}</span>
            <button type="button" onClick={() => remove(i)} className="text-red-600 hover:underline">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
