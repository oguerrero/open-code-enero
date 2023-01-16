import { useResolution } from '../context/ResolutionContext'

export default function ResolutionCard({ resolution, doneRender }) {
  const { deleteResolution, updateResolution } = useResolution()

  const handleDelete = () => deleteResolution(resolution.id, doneRender)

  const handleDone = () => updateResolution(resolution.id, !resolution.done, doneRender)

  return (
    <div className='border border-black px-8 py-4 max-w-md w-52'>
      <h1 className='text-center'>{resolution.name}</h1>
      <div>
        <button onClick={() => handleDelete()}>Delete</button>
        <button onClick={() => handleDone()}>Done</button>
      </div>
    </div>
  )
}
