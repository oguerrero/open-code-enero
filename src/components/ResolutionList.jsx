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
    <div className='flex flex-col gap-4 justify-center items-center'>
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
