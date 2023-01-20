import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import GithubIcon from '../assets/svg/GithubIcon'
import GoogleIcon from '../assets/svg/GoogleIcon'
import { supabase } from '../supabase/client'

export default function Login() {
  const navigate = useNavigate()

  useEffect(() => {
    getUser()
  }, [navigate])

  const getUser = async () => {
    const {
      data: { user }
    } = await supabase.auth.getUser()
    if (user) navigate('/')
  }

  const [email, setEmail] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { data, error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: 'http://localhost:5173/'
      }
    })
    toast.info('Tu enlace se ha enviado al correo')
  }

  const handleOAuth = async (provider) => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        emailRedirectTo: 'http://localhost:5173/'
      }
    })
  }

  return (
    <div className='px-12 flex flex-col gap-8 justify-center items-center'>
      <div className='shadow-lg py-4 w-screen text-center'>
        <h1 className='text-xl font-bold sm:text-3xl'>Resolutions-UI</h1>
      </div>
      <div className='sm:w-96 py-4'>
        <h1 className='mb-4 text-xl font-semibold text-center'>
          Iniciar Sesión con MagicLink
        </h1>
        <form
          onSubmit={handleSubmit}
          className='flex flex-col gap-4'>
          <input
            type='email'
            name='email'
            placeholder='tucorreo@proveedor.com'
            onChange={(e) => setEmail(e.target.value)}
            className='px-4 py-2 bg-zinc-200 rounded'
          />
          <button className='text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 rounded-lg px-5 py-2.5 text-center mr-2 mb-2 transition-all duration-500 ease-in-out font-bold hover:shadow-lg hover:shadow-orange-400'>
            Enviar
          </button>
        </form>
      </div>
      <div className='flex flex-col gap-4 sm:w-96'>
        <h1 className='mb-4 text-xl font-semibold text-center'>
          Iniciar Sesión con Proveedores
        </h1>
        <button
          className='rounded py-2 m-1 border-b-4 border-l-2 shadow-lg bg-zinc-700 border-zinc-800 text-white font-bold text-center hover:shadow-lg hover:shadow-zinc-600 transition-all duration-500 ease-in-out'
          onClick={() => handleOAuth('github')}>
          <GithubIcon />
          Log in with Github
        </button>
        <button
          onClick={() => handleOAuth('google')}
          className='rounded py-2 m-1 border-2 shadow-lg bg-white border-zinc-800 text-black font-bold text-center hover:shadow-lg hover:shadow-black transition-all duration-500 ease-in-out'>
          <GoogleIcon />
          Log in with Google
        </button>
      </div>
    </div>
  )
}
