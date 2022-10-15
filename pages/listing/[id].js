import Head from 'next/head';


export async function getStaticPaths(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(user => {
        return {
            params: { id: user.id.toString() }
        }
    });

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps(context){
    const id = context.params.id
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
    const data = await res.json()

    return {
        props: { user: data }
    }
}

export default function Listing({user}) {
    return (
      <div>
        <Head>
          <title>{user.name} - This Listing</title>
          <meta name="description" content="Listing yourself" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <main className='py-12'>
            <h2 className='text-2xl font-bold py-6'>Detail info</h2>
          <div className='font-medium py-2'>
            <h3>Name : {user.name}</h3>
            <p>Email : {user.email}</p>
            <p>Website : {user.website}</p>
            <p>City : {user.address?.city}</p>
          </div>
        </main>
      </div>
    )
  }