import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
    <div className='px-12 py-16 flex flex-col gap-8 justify-center items-center'>
      <div className='w-96'>
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
            className='px-4 py-2 bg-zinc-200'
          />
          <button className='text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 rounded-lg px-5 py-2.5 text-center mr-2 mb-2 transition-all duration-700 ease-in-out font-bold'>
            Enviar
          </button>
        </form>
      </div>
      <div className='flex flex-col gap-4 w-96'>
        <h1 className='mb-4 text-xl font-semibold text-center'>
          Iniciar Sesión con Proveedores
        </h1>
        <button
          className='rounded py-2 m-1 border-b-4 border-l-2 shadow-lg bg-zinc-700 border-zinc-800 text-white font-bold text-center'
          href=''
          onClick={() => handleOAuth('github')}>
          <svg
            role='img'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            className='w-7 h-7 text-white fill-current text-center inline-block mr-4'>
            <title>GitHub icon</title>
            <path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' />
          </svg>
          Log in with Github
        </button>
        <button
          onClick={() => handleOAuth('google')}
          className='rounded py-2 m-1 border-2 shadow-lg bg-white border-zinc-800 text-black font-bold text-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            class='inline w-4 h-4 mr-3 text-gray-900 fill-current'
            viewBox='0 0 48 48'
            role='img'
            className='w-7 h-7 text-white fill-current text-center inline-block mr-4'>
            <title>GitHub icon</title>
            <path
              fill='#fbc02d'
              d='M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12 s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20 s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z'></path>
            <path
              fill='#e53935'
              d='M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039 l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z'></path>
            <path
              fill='#4caf50'
              d='M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36 c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z'></path>
            <path
              fill='#1565c0'
              d='M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571 c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z'></path>
          </svg>
          Log in with Google
        </button>
      </div>
    </div>
  )
}
