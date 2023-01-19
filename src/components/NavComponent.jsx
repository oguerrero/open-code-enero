import Sun from '../assets/svg/Sun'
import Moon from '../assets/svg/Moon'
import { supabase } from '../supabase/client'
import { useMode } from '../context/ModeContext'
import { useNavigate } from 'react-router-dom'

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
          className='text-center cursor-pointer hover:bg-zinc-700 rounded-full transition-all duration-500 ease-in-out'>
          {darkMode ? <Moon /> : <Sun />}
        </label>
        <label
          className='hidden sm:flex cursor-pointer hover:bg-zinc-700 px-4 py-2 rounded-full transition-all duration-500 ease-in-out'
          onClick={() => navigate('/progress')}>
          Propositos
        </label>
        <label
          className='hidden sm:flex cursor-pointer hover:bg-zinc-700 px-4 py-2 rounded-full transition-all duration-500 ease-in-out'
          onClick={() => navigate('/progress')}>
          Progreso
        </label>
        <a
          href='https://github.com/oguerrero/open-code-enero'
          className='hidden sm:flex cursor-pointer'>
          <svg
            role='img'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            className='w-7 h-7 text-black fill-current dark:text-white text-center inline-block mr-4'>
            <title>GitHub icon</title>
            <path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' />
          </svg>
        </a>
        <label
          onClick={() => supabase.auth.signOut()}
          className='hidden sm:flex cursor-pointer hover:bg-zinc-700 p-2 rounded-full transition-all duration-500 ease-in-out'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-6 h-6'>
            <title>Cerrar Sesión</title>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9'
            />
          </svg>
        </label>
      </div>
    </nav>
  )
}
