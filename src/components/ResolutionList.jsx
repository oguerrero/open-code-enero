import { useEffect } from 'react'
import { useResolution } from '../context/ResolutionContext'

export default function ResolutionList() {
  const { resolutions, getResolutions } = useResolution()

  useEffect(() => {
    getResolutions()
  }, [])

  return (
    <div>
      {resolutions.map((resolution) => (
        <div key={resolution.id}>
          <h1>{resolution.name}</h1>
          <p>{JSON.stringify(resolution.done)}</p>
        </div>
      ))}
    </div>
  )
}
