import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js/auto'
import { useEffect, useState } from 'react'
import { Doughnut } from 'react-chartjs-2'
import { useResolution } from '../context/ResolutionContext'

ChartJS.register(ArcElement, Tooltip, Legend)

export default function GraficaComponent() {
  const { resolutions, getResolutions } = useResolution()

  useEffect(() => {
    getResolutions()
  }, [])

  let completos = 0
  let incompletos = 0

  resolutions.map((resolution) => {
    if (resolution.done) completos++
    else incompletos++
  })

  const data = {
    labels: ['Completados', 'Incompletos'],
    datasets: [
      {
        label: 'Total',
        data: [completos, incompletos],
        backgroundColor: ['rgb(67, 56, 202)', 'rgb(225, 29, 72)'],
        borderColor: 'black',
        borderWidth: 2
      }
    ]
  }

  if (resolutions.length === 0)
    return (
      <div className='flex flex-col items-center justify-center py-12 sm:px-40'>
        <p className='text-xl text-center'>
          No tienes ningun proposito todavia 😱<br /> Agrega uno para mirar tu progreso.
        </p>
      </div>
    )

  return (
    <div className='w-11/12 max-w-xl py-12'>
      <Doughnut
        data={data}
        options={{
          plugins: {
            title: {
              display: true,
              text: 'Propositos de año Nuevo'
            }
          }
        }}
      />
    </div>
  )
}
