import Head from 'next/head'

export default function About() {
    return (
      <div>
        <Head>
          <title>About</title>
          <meta name="description" content="Listing yourself" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <main className='py-12'>
          <div className='flex flex-col items-center'>
            <h2 className='text-2xl text-center font-bold py-6'>About us</h2>
            <p className='text-base font-normal py-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, architecto impedit. Reiciendis, architecto, numquam fugit repellat necessitatibus laborum fugiat odio repudiandae veniam ducimus voluptas tempore hic sed quam officia beatae!
            </p>
            <p className='text-base font-normal py-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, architecto impedit. Reiciendis, architecto, numquam fugit repellat necessitatibus laborum fugiat odio repudiandae veniam ducimus voluptas tempore hic sed quam officia beatae!
            </p>
          </div>
        </main>
      </div>
    )
  }