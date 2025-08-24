import { Tab } from '@headlessui/react'
import TeacherForm from '../components/InputForms/TeacherForm.jsx'
import SubjectForm from '../components/InputForms/SubjectForm.jsx'
import ClassForm from '../components/InputForms/ClassForm.jsx'
import StudentGroupForm from '../components/InputForms/StudentGroupForm.jsx'
import ConstraintForm from '../components/InputForms/ConstraintForm.jsx'

export default function ManageData() {
  const tabs = [
    { name: 'Teachers', component: <TeacherForm /> },
    { name: 'Subjects', component: <SubjectForm /> },
    { name: 'Classes', component: <ClassForm /> },
    { name: 'Groups', component: <StudentGroupForm /> },
    { name: 'Constraints', component: <ConstraintForm /> },
  ]

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Manage Data</h1>
      <Tab.Group>
        <Tab.List className="flex gap-2 mb-4">
          {tabs.map(t => (
            <Tab key={t.name} className={({ selected }) => `px-3 py-2 rounded border ${selected ? 'bg-blue-600 text-white' : 'bg-white'}`}>{t.name}</Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          {tabs.map(t => (
            <Tab.Panel key={t.name} className="bg-white p-4 rounded border shadow">
              {t.component}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
