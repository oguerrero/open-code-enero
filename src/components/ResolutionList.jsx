import { useEffect } from 'react'
import { useResolution } from '../context/ResolutionContext'
import LoadingComponent from './LoadingComponent'
import ResolutionCard from './ResolutionCard'
import ResolutionForm from './ResolutionForm'

export default function ResolutionList() {
  const { resolutions, getResolutions, loading } = useResolution()

  useEffect(() => {
    getResolutions()
  }, [])

  if (loading) return <LoadingComponent />

  if (resolutions.length === 0)
    return <p>No tienes ningun proposito todavia 😱</p>

  return (
    <div className='flex flex-col sm:px-40 justify-center items-center'>
      <ResolutionForm />

      {resolutions.map((resolution) => (
        <ResolutionCard
          key={resolution.id}
          resolution={resolution}
        />
      ))}
    </div>
  )
}
