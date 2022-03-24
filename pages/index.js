import Head from 'next/head'
import Avatar from './../components/Avatar';
import { ViewGridIcon, MicrophoneIcon, DotsVerticalIcon } from '@heroicons/react/solid'
import Image  from "next/image"
import { SearchIcon } from '@heroicons/react/outline'
import Footer from '../components/Footer';
import { useRef } from "react";
import { useRouter } from "next/router";




export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null)

  const search = e => {
    e.preventDefault();

    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`)
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google</title>
        <meta name="description" content="The Google Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
      <div className="flex space-x-4 items-center">
        <p className="link">About</p>
        <p className="link">Store</p>

      </div>

      <div className="flex space-x-4 items-center">
        <p className="link">Gmail</p>
        <p className="link">Images</p>

        <DotsVerticalIcon className="h-8 w-8 p-2 rounded-full hover:bg-gray-100 cursor-pointer"/>
        <Avatar url="https://www.chandrakanth.in/static/images/avatar.png" />

      </div>
      </header>
      


      {/* Body */}

      <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
        <Image
        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png"
        height={100}
        width={300}
        />
        <div className="flex w-full mt-5 shadow-lg focus-within:shadow-lg max-w-md rounded-full border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 ml-3 text-gray-500"/>
          <input ref={searchInputRef} type="text" className="flex-grow focus:outline-none" />
          {/* <MicrophoneIcon className="h-5"/> */}
          <div className="h-5 w-5">
          <svg className="HPVvwb" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#4285f4" d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"></path><path fill="#34a853" d="m11 18.08h2v3.92h-2z"></path><path fill="#fbbc05" d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"></path><path fill="#ea4335" d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"></path></svg>
          </div>
          
        </div>

        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-4 sm:flex-row sm:space-x-4">
          <button onClick={search} className="btn">Google Search</button>
          {/* <button className="btn">I'm Feeling Lucky</button> */}
        </div>
      </form>

      {/* Footer */}

      <Footer />



      
    </div>
  )
}
