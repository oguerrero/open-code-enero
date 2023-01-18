import { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import ProgressComponent from './components/ProgressComponent'
import SettingsComponent from './components/SettingsComponent'
import { ResolutionContextProvider } from './context/ResolutionContext'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import { supabase } from './supabase/client'

export default function App() {
  const navigate = useNavigate()

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (!session) navigate('/login')
    })
  }, [])

  return (
    <div>
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
            element={<ProgressComponent />}
          />
          <Route
            path='/settings'
            element={<SettingsComponent />}
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
