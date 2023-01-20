import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import GithubIcon from '../assets/svg/GithubIcon'
import MobileNavComponent from '../components/MobileNavComponent'
import NavComponent from '../components/NavComponent'
import { useMode } from '../context/ModeContext'
import { supabase } from '../supabase/client'

export default function Settings () {
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
      className={ `flex flex-col min-h-screen gap-4 py-4  ${darkMode ? 'dark bg-zinc-800 text-white' : ''
        }` }>
      <NavComponent />
      <div className='flex flex-col items-center justify-center gap-8 py-40'>
        <a
          href='https://github.com/oguerrero/open-code-enero'
          className='px-4 py-2 font-bold text-white transition-all duration-500 ease-in-out bg-black rounded shadow-lg hover:shadow-zinc-700 hover:shadow-lg hover:bg-zinc-700 shadow-zinc-700/50'>
          <GithubIcon />
          Ver en Github
        </a>
        <button
          onClick={ () => supabase.auth.signOut() }
          className='px-4 py-2 font-bold text-white transition-all duration-500 ease-in-out bg-red-600 rounded shadow-lg hover:shadow-orange-500 hover:shadow-lg hover:bg-orange-500 shadow-orange-500/50'>
          Cerrar Sesión
        </button>
        <MobileNavComponent location='settings' />
      </div>
    </div>
  )
}
