import Link from 'next/link'

export default function layout({ children }) {
  return (
    <div className="py-6 px-12">
        <nav className="flex items-center justify-between">
            <div>
                <h1 className="text-xl font-bold text-sky-400 ">ThisListing</h1>
            </div>
            <ul className="flex gap-3 font-medium">
                <Link href={"/"}>
                <a className='text-base hover:text-sky-500'>Home</a>
                </Link>
                <Link href={"/about"}>
                <a className='text-base hover:text-sky-500'>About</a>
                </Link>
                <Link href={"/listing"}>
                <a className='text-base hover:text-sky-500'>Listing</a>
                </Link>
                
                
            </ul>
        </nav>
        {children}
        <footer>
            <div className="text-center">
                <p className="opacity-60 font-medium">Copyright 2022 - This Listing</p>
            </div>
        </footer>
    </div>
  )
}
