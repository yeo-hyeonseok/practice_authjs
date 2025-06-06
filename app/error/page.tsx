export default async function ErrorPage({
  searchParams
}: {
  searchParams: Promise<{ message: string }>
}) {
  const { message } = await searchParams

  return (
    <div className="flex flex-col items-center">
      <h1>ERROR!</h1>
      <h2 className="text-red-500">{message}</h2>
    </div>
  )
}
