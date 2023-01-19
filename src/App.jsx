import { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { ModeContextProvider } from './context/ModeContext'
import { ResolutionContextProvider } from './context/ResolutionContext'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Progress from './pages/Progress'
import Settings from './pages/Settings'
import { supabase } from './supabase/client'

export default function App() {
  const navigate = useNavigate()

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (!session) navigate('/login')
    })
  }, [])

  return (
    <div className='min-h-screen overflow-hidden'>
      <ResolutionContextProvider>
        <ModeContextProvider>
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
        </ModeContextProvider>
      </ResolutionContextProvider>
    </div>
  )
}
