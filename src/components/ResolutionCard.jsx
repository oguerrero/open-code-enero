import { useResolution } from '../context/ResolutionContext'

export default function ResolutionCard({ resolution, doneRender }) {
  const { deleteResolution, updateResolution } = useResolution()

  const handleDelete = () => deleteResolution(resolution.id, doneRender)

  const handleDone = () => updateResolution(resolution.id, !resolution.done, doneRender)

  return (
    <div>
      <h1>{resolution.name}</h1>
      <p>{JSON.stringify(resolution.done)}</p>
      <div>
        <button onClick={() => handleDelete()}>Delete</button>
        <button onClick={() => handleDone()}>Done</button>
      </div>
    </div>
  )
}
