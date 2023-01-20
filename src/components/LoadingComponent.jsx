export default function LoadingComponent() {
  return (
    <div className='absolute transform translate-x-1/2 translate-y-1/2 right-1/2 bottom-1/2 '>
      <div className='w-64 h-64 border-8 border-indigo-600 border-solid rounded-full border-t-transparent animate-spin'></div>
    </div>
  )
}
