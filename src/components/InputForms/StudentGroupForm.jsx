import { useState } from 'react'
import { useApp } from '../../context/AppContext.jsx'

export default function StudentGroupForm() {
  const { groups, setGroups } = useApp()
  const [form, setForm] = useState({ name: '', size: '' })

  const add = (e) => {
    e.preventDefault()
    if (!form.name) return
    setGroups([...groups, form])
    setForm({ name: '', size: '' })
  }

  const remove = (idx) => {
    const next = groups.filter((_, i) => i !== idx)
    setGroups(next)
  }
  return (
    <div>
      <form onSubmit={add} className="grid sm:grid-cols-3 gap-3 mb-4">
        <input className="border p-2 rounded" placeholder="Group Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
        <input className="border p-2 rounded" placeholder="Size" value={form.size} onChange={e => setForm({ ...form, size: e.target.value })} />
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Add Group</button>
      </form>
      <ul className="pl-0 divide-y">
        {groups.map((g, i) => (
          <li key={i} className="flex items-center justify-between py-2">
            <span>{g.name} {g.size && `(${g.size})`}</span>
            <button type="button" onClick={() => remove(i)} className="text-red-600 hover:underline">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
