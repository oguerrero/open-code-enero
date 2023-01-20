import { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { useMode } from './context/ModeContext'
import { ResolutionContextProvider } from './context/ResolutionContext'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Progress from './pages/Progress'
import Settings from './pages/Settings'
import { supabase } from './supabase/client'

export default function App() {
  const navigate = useNavigate()
  const { darkMode, getMode } = useMode()

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (!session) navigate('/login')
    })
    const savedMode = localStorage.getItem('darkMode')
    getMode(savedMode)
  }, [])

  return (
    <div className='min-h-screen overflow-hidden'>
      <ResolutionContextProvider>
          <Routes>
            <Route
              path='/'
              element={<Home />}
            />
            <Route
              path='/login'
              element={<Login />}
            />
            <Route
              path='/progress'
              element={<Progress />}
            />
            <Route
              path='/settings'
              element={<Settings />}
            />
            <Route
              path='*'
              element={<NotFound />}
            />
          </Routes>
      </ResolutionContextProvider>
    </div>
  )
}
