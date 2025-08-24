import { useState } from 'react'
import { useApp } from '../../context/AppContext.jsx'

export default function TeacherForm() {
  const { teachers, setTeachers } = useApp()
  const [form, setForm] = useState({ name: '', department: '', availability: '' })

  const add = (e) => {
    e.preventDefault()
    if (!form.name) return
    setTeachers([...teachers, form])
    setForm({ name: '', department: '', availability: '' })
  }

  const remove = (idx) => {
    const next = teachers.filter((_, i) => i !== idx)
    setTeachers(next)
  }

  return (
    <div>
      <form onSubmit={add} className="grid sm:grid-cols-3 gap-3 mb-4">
        <input className="border p-2 rounded" placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
        <input className="border p-2 rounded" placeholder="Department" value={form.department} onChange={e => setForm({ ...form, department: e.target.value })} />
        <input className="border p-2 rounded" placeholder="Availability" value={form.availability} onChange={e => setForm({ ...form, availability: e.target.value })} />
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Add Teacher</button>
      </form>
      <div className="overflow-x-auto">
        <table className="min-w-full border">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-3 py-2 text-left">Name</th>
              <th className="px-3 py-2 text-left">Department</th>
              <th className="px-3 py-2 text-left">Availability</th>
              <th className="px-3 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((t, i) => (
              <tr key={i} className="border-t">
                <td className="px-3 py-2">{t.name}</td>
                <td className="px-3 py-2">{t.department}</td>
                <td className="px-3 py-2">{t.availability}</td>
                <td className="px-3 py-2">
                  <button type="button" onClick={() => remove(i)} className="text-red-600 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
