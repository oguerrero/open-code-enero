import { useState } from 'react'
import { toast } from 'react-toastify'
import { useResolution } from '../context/ResolutionContext'

export default function ResolutionCard ({ resolution }) {
  const { deleteResolution, updateResolution } = useResolution()
  const [enabled, setEnabled] = useState(resolution.done)

  const handleDelete = () => {
    deleteResolution(resolution.id)
    toast.warn('Proposito Borrado')
  } 

  const handleDone = () => {
    updateResolution(resolution.id, !resolution.done)
    toast.info('Proposito Actualizado')
  } 

  return (
    <div
      className={ `w-full sm:max-w-xl sm:w-4/5 transition-all duration-500 ease-in-out ${enabled ? 'bg-zinc-300' : 'bg-white dark:bg-zinc-800'}` }>
      <div className='flex flex-row justify-between py-2 pl-4 pr-2'>
        <button
          onClick={ () => handleDelete() }
          className=''>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='#FF3333'
            className='w-5 h-w-5'>
            <path
              fillRule='evenodd'
              d='M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z'
              clipRule='evenodd'
            />
          </svg>
        </button>
        <div className='text-start justify-start items-start w-3/4'>
          <h2
            className={ `text-start px-4 py-2 truncate font-semibold transition-all duration-500 ease-in-out ${enabled ? 'text-green-500 line-through italic' : 'text-black dark:text-white'
              }` }>
            { resolution.name }
          </h2>
        </div>
        <div className='flex justify-center items-center my-2'>
          <label className='inline-flex relative items-center mr-5 cursor-pointer'>
            <input
              type='checkbox'
              className='sr-only peer'
              checked={ enabled }
              readOnly
            />
            <div
              onClick={ () => {
                setEnabled(!enabled)
                handleDone()
              } }
              className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
          </label>
        </div>
      </div>
    </div>
  )
}
