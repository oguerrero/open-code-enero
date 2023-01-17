import { useState } from 'react'
import { useResolution } from '../context/ResolutionContext'

export default function ResolutionCard({ resolution, doneRender }) {
  const { deleteResolution, updateResolution } = useResolution()
  const [enabled, setEnabled] = useState(resolution.done)

  const handleDelete = () => deleteResolution(resolution.id, doneRender)

  const handleDone = () =>
    updateResolution(resolution.id, !resolution.done, doneRender)

  return (
    <div className='border border-black max-w-md'>
      <div className='flex justify-end items-end mr-2'>
        <button
          onClick={() => handleDelete()}
          className=''>
          ❌
        </button>
      </div>
      <h2 className='text-center px-4 py-2 truncate'>{resolution.name}</h2>
      <div className='flex justify-center items-center my-2'>
        <label className='inline-flex relative items-center mr-5 cursor-pointer'>
          <input
            type='checkbox'
            className='sr-only peer'
            checked={enabled}
            readOnly
          />
          <div
            onClick={() => {
              setEnabled(!enabled)
              handleDone()
            }}
            className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
          <span className='ml-2 text-sm font-medium text-gray-900'>
            {resolution.done ? 'Pendiente' : 'Completar'}
          </span>
        </label>
      </div>
    </div>
  )
}
