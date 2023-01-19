import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import MobileNavComponent from '../components/MobileNavComponent'
import NavComponent from '../components/NavComponent'
import ProgressComponent from '../components/ProgressComponent'
import { useMode } from '../context/ModeContext'
import { supabase } from '../supabase/client'

export default function Progress() {
  const { darkMode, getMode } = useMode()
  const navigate = useNavigate()

  useEffect(() => {
    getUser()
    getMode()
  }, [navigate])

  const getUser = async () => {
    const {
      data: { user }
    } = await supabase.auth.getUser()
    if (!user) navigate('/login')
  }

  return (
    <div
      className={`flex flex-col min-h-screen gap-4 py-4  ${
        darkMode ? 'dark bg-zinc-800 text-white' : ''
      }`}>
      <NavComponent />

      <ProgressComponent />
      <MobileNavComponent location='progress' />
    </div>
  )
}
