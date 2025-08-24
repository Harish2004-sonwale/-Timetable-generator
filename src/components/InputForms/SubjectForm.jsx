import { useState } from 'react'
import { useApp } from '../../context/AppContext.jsx'

export default function SubjectForm() {
  const { subjects, setSubjects } = useApp()
  const [form, setForm] = useState({ name: '', code: '' })

  const add = (e) => {
    e.preventDefault()
    if (!form.name) return
    setSubjects([...subjects, form])
    setForm({ name: '', code: '' })
  }

  const remove = (idx) => {
    const next = subjects.filter((_, i) => i !== idx)
    setSubjects(next)
  }

  return (
    <div>
      <form onSubmit={add} className="grid sm:grid-cols-3 gap-3 mb-4">
        <input className="border p-2 rounded" placeholder="Subject Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
        <input className="border p-2 rounded" placeholder="Code" value={form.code} onChange={e => setForm({ ...form, code: e.target.value })} />
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Add Subject</button>
      </form>
      <ul className="pl-0 divide-y">
        {subjects.map((s, i) => (
          <li key={i} className="flex items-center justify-between py-2">
            <span>{s.name} {s.code && `(${s.code})`}</span>
            <button type="button" onClick={() => remove(i)} className="text-red-600 hover:underline">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
