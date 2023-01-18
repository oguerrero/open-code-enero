import Sun from '../assets/svg/Sun'
import Moon from '../assets/svg/Moon'
import { supabase } from '../supabase/client'
import { useMode } from '../context/ModeContext'

export default function NavComponent () {
  const { darkMode, toogleMode } = useMode()

  const handleToogle = () => toogleMode()

  return (
    <nav className='flex flex-row items-center justify-center gap-8 px-4 shadow-lg pb-2 '>
      <h1 className='text-xl font-bold text-center sm:text-3xl'>
        Mis Propositos de Año Nuevo
      </h1>
      <div className='flex sm:absolute sm:right-8 sm:gap-8 items-center'>
        <label
          onClick={ () => handleToogle() }
          className='cursor-pointer text-center'>
          { darkMode ? <Moon /> : <Sun /> }
        </label>
        <button
          onClick={ () => supabase.auth.signOut() }
          className='hidden sm:flex px-4 py-2 font-bold text-white transition-all duration-500 ease-in-out bg-red-600 rounded hover:shadow-orange-500 hover:shadow-lg hover:bg-orange-500'>
          Cerrar Sesión
        </button>
      </div>
    </nav>
  )
}
