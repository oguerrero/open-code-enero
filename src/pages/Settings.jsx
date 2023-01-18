import MobileNavComponent from '../components/MobileNavComponent'
import { supabase } from '../supabase/client'

export default function Settings() {
  return (
    <div className='flex flex-col min-h-screen justify-center items-center'>
      <button
        onClick={() => supabase.auth.signOut()}
        className='px-4 py-2 font-bold text-white transition-all duration-500 ease-in-out bg-red-600 rounded hover:shadow-orange-500 hover:shadow-lg hover:bg-orange-500'>
        Cerrar Sesión
      </button>
      <MobileNavComponent />
    </div>
  )
}
