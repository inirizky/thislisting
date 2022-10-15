import Head from 'next/head';
import Link from 'next/link';

export async function getStaticProps(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json()
    
    return {
        props: {
            user: data,
        }
    }
}

export default function Listing({user}) {
    return (
      <div>
        <Head>
          <title>This Listing</title>
          <meta name="description" content="Listing yourself" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <main className='py-12'>
            <h2 className='text-2xl font-bold py-6'>List of ThisListing</h2>
          <div>
            {user.map(user => (
            <Link href={`/listing/${user.id}`} key={user.id} >
                <h3 className='py-4 px-6 rounded-md hover:shadow-md hover:shadow-sky-500 cursor-pointer font-medium text-lg'>{user.name}</h3>
            </Link>
            ))}
          </div>
        </main>
      </div>
    )
  }