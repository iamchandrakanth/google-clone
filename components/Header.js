import { useRouter } from "next/router";
import Image from "next/image";
import { useRef } from "react";
import { XIcon } from "@heroicons/react/solid";
import { MicrophoneIcon, SearchIcon } from "@heroicons/react/outline";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {

    const router = useRouter();
    const searchInputRef = useRef(null);

    const search = e => {
        e.preventDefault();

        const term = searchInputRef.current.value;

        if (!term) return;

        router.push(`/search?term=${term}`);

    }

    return (
        <header className="sticky top-0 bg-white">
            <div className="flex w-full p-6 items-center">
            <Image src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png" height={40} width={120} className="cursor-pointer"
            onClick={() => router.push("/")}/>

            <form className="flex px-6 py-3 ml-10 mr-5 border-gray-200 rounded-full flex-grow shadow-lg max-w-3xl items-center">
                <input 
                    ref={searchInputRef} type="text" 
                    className="flex-grow w-full focus:outline-none" 
                />
                <XIcon 
                    className="h-7 texy-gray-500 cursor-pointer transition duration-100 transform hover:scale-125 sm:mr-3" 
                    onClick={() => (searchInputRef.current.value = "")} 
                />
                <MicrophoneIcon 
                    className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" 
                />
                <SearchIcon 
                    className="h-6 text-blue-500 hidden sm:inline-flex" 
                />
                <button 
                onClick={search} hidden type="submit">Search</button>

            </form>
            <Avatar 
                url = "https://media-exp1.licdn.com/dms/image/C5603AQGcCpalzw4Aeg/profile-displayphoto-shrink_100_100/0/1517581859024?e=1625702400&v=beta&t=6bW9OzLpF1u8wbQVEh39CJAPSw2M1m8V5zzihhMXur8"
                className = "ml-auto" 
            />
            </div>

            {/* Header Options */}
            <HeaderOptions />
            
        </header>
    )
}

export default Header
