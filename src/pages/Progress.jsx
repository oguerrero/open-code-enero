import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import GraficaComponent from '../components/GraficaComponent'
import MobileNavComponent from '../components/MobileNavComponent'
import NavComponent from '../components/NavComponent'
import { useMode } from '../context/ModeContext'
import { supabase } from '../supabase/client'

export default function Progress() {
  const { darkMode } = useMode()
  const navigate = useNavigate()

  useEffect(() => {
    getUser()
  }, [navigate])

  const getUser = async () => {
    const {
      data: { user }
    } = await supabase.auth.getUser()
    if (!user) navigate('/login')
  }

  return (
    <div
      className={`flex flex-col min-h-screen gap-4 py-4   ${
        darkMode ? 'dark bg-zinc-800 text-white' : ''
      }`}>
      <NavComponent />
      <div className='flex items-center justify-center'>
        <GraficaComponent />
      </div>

      <MobileNavComponent location='progress' />
    </div>
  )
}
