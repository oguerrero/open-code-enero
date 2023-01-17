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
        <h1 className='font-bold text-center text-xl sm:text-3xl'>
          Propositos Año Nuevo 2023
        </h1>
        <div className='hidden sm:flex sm:absolute sm:right-8 sm:gap-8'>
          <button
            onClick={() => navigate('/add')}
            className='px-4 py-2 font-bold text-white transition-all duration-500 ease-in-out bg-indigo-700 hover:bg-purple-500'>
            Agregar
          </button>
          <button
            onClick={() => supabase.auth.signOut()}
            className='px-4 py-2 font-bold text-white transition-all duration-500 ease-in-out bg-red-600  hover:bg-orange-500'>
            Cerrar Sesión
          </button>
        </div>
      </nav>

      <ResolutionList doneRender={showDoneResolutions} />
      <NavComponent />
    </div>
  )
}
