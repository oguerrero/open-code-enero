import SunIcon from '../assets/svg/SunIcon'
import MoonIcon from '../assets/svg/MoonIcon'
import { supabase } from '../supabase/client'
import { useMode } from '../context/ModeContext'
import { useNavigate } from 'react-router-dom'
import GithubIcon from '../assets/svg/GithubIcon'
import CerrarSesionIcon from '../assets/svg/CerrarSesionIcon'

export default function NavComponent() {
  const { darkMode, toogleMode } = useMode()
  const navigate = useNavigate()

  const handleToogle = () => toogleMode()

  return (
    <nav className='flex flex-row gap-8 px-8 pb-4 shadow-lg justify-between '>
      <h1
        className='text-xl font-bold text-start sm:text-3xl cursor-pointer'
        onClick={() => navigate('/')}>
        Resolutions-UI
      </h1>
      <div className='flex items-center sm:absolute sm:right-8 sm:gap-8'>
        <label
          onClick={() => handleToogle()}
          className='text-center cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-full transition-all duration-500 ease-in-out'>
          {darkMode ? <MoonIcon /> : <SunIcon />}
        </label>
        <label
          className='hidden sm:flex cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-700 px-4 py-2 rounded-full transition-all duration-500 ease-in-out'
          onClick={() => navigate('/')}>
          Propositos
        </label>
        <label
          className='hidden sm:flex cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-700 px-4 py-2 rounded-full transition-all duration-500 ease-in-out'
          onClick={() => navigate('/progress')}>
          Progreso
        </label>
        <a
          href='https://github.com/oguerrero/open-code-enero'
          className='hidden sm:flex cursor-pointer'>
          <GithubIcon />
        </a>
        <label
          onClick={() => supabase.auth.signOut()}
          className='hidden sm:flex cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-700 p-2 rounded-full transition-all duration-500 ease-in-out'>
          <CerrarSesionIcon />
        </label>
      </div>
    </nav>
  )
}
