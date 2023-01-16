import { useResolution } from '../context/ResolutionContext'

export default function ResolutionCard({ resolution }) {
  const { deleteResolution } = useResolution()

  const handleDelete = () => {
    deleteResolution(resolution.id)
  }

  const handleDone = () => {
    alert('terminando')
  }

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
