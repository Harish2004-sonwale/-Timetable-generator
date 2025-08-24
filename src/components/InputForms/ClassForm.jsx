import { useState } from 'react'
import { useApp } from '../../context/AppContext.jsx'

export default function ClassForm() {
  const { classes, setClasses } = useApp()
  const [form, setForm] = useState({ name: '', room: '' })

  const add = (e) => {
    e.preventDefault()
    if (!form.name) return
    setClasses([...classes, form])
    setForm({ name: '', room: '' })
  }

  const remove = (idx) => {
    const next = classes.filter((_, i) => i !== idx)
    setClasses(next)
  }

  return (
    <div>
      <form onSubmit={add} className="grid sm:grid-cols-3 gap-3 mb-4">
        <input className="border p-2 rounded" placeholder="Class/Section" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
        <input className="border p-2 rounded" placeholder="Room" value={form.room} onChange={e => setForm({ ...form, room: e.target.value })} />
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Add Class</button>
      </form>
      <ul className="pl-0 divide-y">
        {classes.map((c, i) => (
          <li key={i} className="flex items-center justify-between py-2">
            <span>{c.name} {c.room && `- Room ${c.room}`}</span>
            <button type="button" onClick={() => remove(i)} className="text-red-600 hover:underline">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
