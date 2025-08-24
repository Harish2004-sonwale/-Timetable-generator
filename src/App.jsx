 import './App.css'
 import { Routes, Route, Navigate, Link, useLocation } from 'react-router-dom'
 import Navbar from './components/Navbar'
 import Sidebar from './components/Sidebar'
 import Dashboard from './pages/Dashboard'
 import ManageData from './pages/ManageData'
 import GenerateSchedule from './pages/GenerateSchedule'
 import ViewTimetable from './pages/ViewTimetable'
 import Reports from './pages/Reports'

 function App() {
   const location = useLocation()

   return (
     <div className="min-h-screen flex flex-col">
       <Navbar />
       <div className="flex flex-1">
         <Sidebar />
         <main className="flex-1 container-page">
           <Routes>
             <Route path="/" element={<Navigate to="/dashboard" replace />} />
             <Route path="/dashboard" element={<Dashboard />} />
             <Route path="/manage" element={<ManageData />} />
             <Route path="/generate" element={<GenerateSchedule />} />
             <Route path="/timetable" element={<ViewTimetable />} />
             <Route path="/reports" element={<Reports />} />
             <Route path="*" element={<NotFound />} />
           </Routes>
         </main>
       </div>
       <footer className="text-center text-xs text-gray-500 py-4">Timetable Generator • {new Date().getFullYear()}</footer>
     </div>
   )
 }

 function NotFound() {
   return (
     <div className="p-6">
       <h1 className="text-xl font-semibold mb-2">Page not found</h1>
       <p className="mb-4">The page you are looking for does not exist.</p>
       <Link className="text-blue-600 underline" to="/dashboard">Go to Dashboard</Link>
     </div>
   )
 }

 export default App
