import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ResolutionForm from '../components/ResolutionForm'
import { supabase } from '../supabase/client'
import ResolutionList from '../components/ResolutionList'

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
    <div className='flex flex-col gap-4 px-4 py-4'>
      <nav className='flex flex-row items-center gap-8 sm:justify-center'>
        <h1 className='font-semibold sm:text-xl'>Propositos Año Nuevo 2023</h1>
        <button
          onClick={() => supabase.auth.signOut()}
          className='px-4 py-2 font-bold text-white transition-all duration-100 ease-in-out bg-red-600 sm:absolute sm:right-8 hover:bg-red-500'>
          Sign Out
        </button>
      </nav>
      <ResolutionForm />

      <header className='flex gap-2 flex-col-reverse sm:flex-row'>
        <span className='text-2xl font-semibold text-center'>
          {showDoneResolutions
            ? 'Propositos Completados'
            : 'Propositos pendientes'}
        </span>
        <button
          onClick={() => setShowDoneResolutions(!showDoneResolutions)}
          className='px-2 py-2 font-bold text-white bg-sky-600'>
          {showDoneResolutions ? 'Mostrar Pendientes' : 'Mostrar Completados'}
        </button>
      </header>

      <ResolutionList doneRender={showDoneResolutions} />
    </div>
  )
}
