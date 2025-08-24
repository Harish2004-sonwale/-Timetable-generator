import { createContext, useContext, useState, useMemo } from 'react'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [teachers, setTeachers] = useState([])
  const [subjects, setSubjects] = useState([])
  const [classes, setClasses] = useState([])
  const [groups, setGroups] = useState([])
  const [constraints, setConstraints] = useState([])
  const [timetable, setTimetable] = useState([])

  const value = useMemo(() => ({
    teachers, setTeachers,
    subjects, setSubjects,
    classes, setClasses,
    groups, setGroups,
    constraints, setConstraints,
    timetable, setTimetable,
  }), [teachers, subjects, classes, groups, constraints, timetable])

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
