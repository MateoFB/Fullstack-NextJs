import Link  from 'next/link'

export default function Home() {
  return (

    <div className='bg-black bg-home-img bg-cover bg-center h-screen flex items-center justify-center text-white'>
      <main className='flex flex-col items-center justify-center text-center max-w-5xl mx-auto h-dvh'>

        <div className='text-white flex flex-col gap-6 p-12 rounded-xl bg-black/90 w-4/5'>
          <h1 className='text-4xl font-bold'>
            Dance's computer <br /> Repair shop
          </h1>
          <address>
            555-1234<br /> Kansas City <br /> Missouri
          </address>
          <p className='text-lime-400'>
            Opendaily from 9am to 5pm
          </p>
          <Link href="tel:55555555" className='hover:underline'> 555-5555-55 </Link>
        </div>

      </main>
    </div>

  )
}
