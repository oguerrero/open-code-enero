import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../supabase/client'
import ResolutionList from '../components/ResolutionList'
import NavComponent from '../components/NavComponent'

export default function Home() {
  const [showDoneResolutions, setShowDoneResolutions] = useState(false)
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
    <div className='flex flex-col min-h-screen gap-4 py-4'>
      <nav className='flex flex-row items-center justify-center gap-8 px-4'>
        <h1 className='font-semibold text-center text-xl sm:text-xl'>Propositos Año Nuevo 2023</h1>
        <button
          onClick={() => supabase.auth.signOut()}
          className='hidden px-4 py-2 font-bold text-white transition-all duration-500 ease-in-out bg-red-600 sm:flex sm:absolute sm:right-8 hover:bg-red-500'>
          Cerrar Sesión
        </button>
      </nav>

      <ResolutionList doneRender={showDoneResolutions} />
      <NavComponent />
    </div>
  )
}
