import { useEffect } from 'react'
import { useResolution } from '../context/ResolutionContext'
import ResolutionCard from './ResolutionCard'

export default function ResolutionList({doneRender}) {
  const { resolutions, getResolutions, loading } = useResolution()

  useEffect(() => {
    getResolutions(doneRender)
  }, [doneRender])

  if (loading) return <p>Loading...</p>

  if (resolutions.length === 0) return <p>No tienes ningun proposito todavia</p>

  return (
    <div className='grid grid-cols-1 sm:grid-cols-4 gap-4'>
      {resolutions.map((resolution) => (
        <ResolutionCard
          key={resolution.id}
          resolution={resolution}
          doneRender={doneRender}
        />
      ))}
    </div>
  )
}
