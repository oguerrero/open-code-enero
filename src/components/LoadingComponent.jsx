import LoadingCard from './LoadingCard'

export default function LoadingComponent() {
  return (
    <div class='border shadow rounded-md p-4 max-w-sm w-full mx-auto flex flex-col gap-2'>
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
    </div>
  )
}
