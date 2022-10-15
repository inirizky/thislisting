import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>This Listing</title>
        <meta name="description" content="Listing yourself" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className='py-12'>
        <div className='flex flex-col items-center'>
          <h2 className='text-2xl text-center font-bold py-6'>Welcome to ThisListing</h2>
          <p className='text-base font-normal py-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, architecto impedit. Reiciendis, architecto, numquam fugit repellat necessitatibus laborum fugiat odio repudiandae veniam ducimus voluptas tempore hic sed quam officia beatae!
          </p>
          <p className='text-base font-normal py-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, architecto impedit. Reiciendis, architecto, numquam fugit repellat necessitatibus laborum fugiat odio repudiandae veniam ducimus voluptas tempore hic sed quam officia beatae!
          </p>
          <Link href={'/listing'}>
          <a className='py-2 px-3 bg-sky-500 rounded-md text-white uppercase font-medium hover:scale-105 cursor-pointer'>See Listing</a>
          </Link>
          
        </div>
      </main>
    </div>
  )
}
