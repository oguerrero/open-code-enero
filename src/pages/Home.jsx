import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../supabase/client'
import ResolutionList from '../components/ResolutionList'
import MobileNavComponent from '../components/MobileNavComponent'
import NavComponent from '../components/NavComponent'
import { useMode } from '../context/ModeContext'

export default function Home() {
  const [showDoneResolutions, setShowDoneResolutions] = useState(false)
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
      className={`flex flex-col min-h-screen gap-4 py-4  ${
        darkMode ? 'dark bg-zinc-800 text-white' : ''
      }`}>
      <NavComponent />

      <ResolutionList doneRender={showDoneResolutions} />
      <MobileNavComponent />
    </div>
  )
}
