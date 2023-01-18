import { supabase } from '../supabase/client'
import NavComponent from './NavComponent'

export default function SettingsComponent () {
  return (
    <div>
      <button
        onClick={ () => supabase.auth.signOut() }
        className='px-4 py-2 font-bold text-white transition-all duration-500 ease-in-out bg-red-600 rounded hover:shadow-orange-500 hover:shadow-lg hover:bg-orange-500'>
        Cerrar Sesión
      </button>
      <NavComponent />
    </div>
  )
}
