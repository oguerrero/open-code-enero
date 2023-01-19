import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js/auto'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

export default function GraficaComponent() {
  const data = {
    labels: ['Completados', 'Incompletos'],
    datasets: [
      {
        label: 'Total',
        data: [55, 23],
        backgroundColor: [
          'rgb(67, 56, 202)',
          'rgb(225, 29, 72)'
        ],
        borderColor: 'black',
        borderWidth: 2
      }
    ]
  }

  return (
    <div className='max-w-xl w-11/12 py-12'>
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
