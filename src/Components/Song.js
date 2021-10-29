import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import ReactPlayer from "react-player"
import Avatar from '../assets/avatar.png'

function Song({match}) {

	var options = {
		method: 'GET',
		url: 'https://shazam.p.rapidapi.com/songs/get-details',
		params: {key: `${match.params?.key}`, locale: 'en-US'},
		headers: {
		  'x-rapidapi-host': 'shazam.p.rapidapi.com',
		  'x-rapidapi-key': '8be226908emsh037a6844bf11d3ap1be370jsn96a5781429d1'
		}
	      };
	
	const [song,setSong] = useState([]);
	

	useEffect(() => {
		if (match) {
		    
		      axios.request(options)
		      .then((res) => {
			let s = res.data;
			setSong(s);
			})
		      .catch((error) => {
			console.error("Error", error.message);
		      });
		}
		},[match])


	return (
		<div>

		<div class="pt-3 pb-5 bg-indigo-300">
		
				
				<div class="flex flex-row">
					<div class="w-1/3 mt-16">
					<img class="object-cover absolute left-10 rounded-3xl shadow-lg transition hover:duration-300 ease-in-out" src={song?.images?.coverarthq} height='250px' width='250px' alt={song.key}/>
					</div>
					
				<div class="w-2/3 flex flex-col -ml-24 mt-4">					
					<span class=" text-3xl font-extrabold ">{song?.title}</span>
					<span class=" text-xl font-bold ">{song?.subtitle}</span>
					<span class="p-2 justify-between text-lg font-semi ">{song?.genres?.primary}</span>
					<div class="inline-flex rounded-md">
					<Link to={{ pathname:song?.hub?.options[0]?.actions[0]?.uri}} target="_blank">
                			<button type="button" class="py-4 px-6 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    			Play on Itunes
                			</button>
					</Link>
            				</div>
			</div>
					
		</div>
		</div>
					{/* src={song?.sections[2]?.youtubeurl?.actions[0]?.uri} */}
					
					<div class="w-full mt-36 h-full grid grid-cols-3">
					
					<div class="p-2 col-span-2 row-span-2">

					<p class='text-black font-bold text-3xl p-2'>Music Video</p>

					<ReactPlayer
        				url={song?.sections && song?.sections[2]?.youtubeurl?.actions[0]?.uri}
					controls='true'
					width='90%'
					height='70vh'
      					/>
<p class='text-black font-bold text-3xl p-2'>Comments</p>      
<div class="container p-2 mt-2 flex flex-col mx-auto w-full justify-center">
    <ul class="flex flex-col">
        <li class="border-gray-400 flex flex-row mb-2">
            <div class="shadow border select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                <div class="flex flex-col w-10 h-10 justify-center items-center mr-4">
                    <a href="#" class="block relative">
                        <img alt="profil" src={Avatar} class="mx-auto object-cover rounded-full h-10 w-10 "/>
                    </a>
                </div>
                <div class="flex-1 pl-1 md:mr-16">
                    <div class="font-medium dark:text-white">
                        Jean Marc
                    </div>
                    <div class="text-gray-600 dark:text-gray-200 text-sm">
                        Awesome Music
                    </div>
                </div>
                <div class="text-gray-600 dark:text-gray-200 text-xs">
                    6:00 AM
                </div>
                <button class="w-24 text-right flex justify-end">
                    <svg width="12" fill="currentColor" height="12" class="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                        </path>
                    </svg>
                </button>
            </div>
        </li>
        <li class="border-gray-400 flex flex-row mb-2">
            <div class="shadow border select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                <div class="flex flex-col w-10 h-10 justify-center items-center mr-4">
                    <a href="#" class="block relative">
                        <img alt="profil" src={Avatar} class="mx-auto object-cover rounded-full h-10 w-10 "/>
                    </a>
                </div>
                <div class="flex-1 pl-1 md:mr-16">
                    <div class="font-medium dark:text-white">
                        Darshan Patel
                    </div>
                    <div class="text-gray-600 dark:text-gray-200 text-sm">
                        Cool
                    </div>
                </div>
                <div class="text-gray-600 dark:text-gray-200 text-xs">
                    7:00 AM
                </div>
                <button class="w-24 text-right flex justify-end">
                    <svg width="12" fill="currentColor" height="12" class="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                        </path>
                    </svg>
                </button>
            </div>
        </li>
        <li class="border-gray-400 flex flex-row mb-2">
            <div class="shadow border select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                <div class="flex flex-col w-10 h-10 justify-center items-center mr-4">
                    <a href="#" class="block relative">
                        <img alt="profil" src={Avatar} class="mx-auto object-cover rounded-full h-10 w-10 "/>
                    </a>
                </div>
                <div class="flex-1 pl-1 md:mr-16">
                    <div class="font-medium dark:text-white">
                        Harsh
                    </div>
                    <div class="text-gray-600 dark:text-gray-200 text-sm">
                        Gotta listen again !!
                    </div>
                </div>
                <div class="text-gray-600 dark:text-gray-200 text-xs">
                    8:00 AM
                </div>
                <button class="w-24 text-right flex justify-end">
                    <svg width="12" fill="currentColor" height="12" class="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                        </path>
                    </svg>
                </button>
            </div>
        </li>
        <li class="border-gray-400 flex flex-row mb-2">
            <div class="shadow border select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                <div class="flex flex-col w-10 h-10 justify-center items-center mr-4">
                    <a href="#" class="block relative">
                        <img alt="profil" src={Avatar} class="mx-auto object-cover rounded-full h-10 w-10 "/>
                    </a>
                </div>
                <div class="flex-1 pl-1 md:mr-16">
                    <div class="font-medium dark:text-white">
                        Harshil
                    </div>
                    <div class="text-gray-600 dark:text-gray-200 text-sm">
                        Boom Boom Paw.....
                    </div>
                </div>
                <div class="text-gray-600 dark:text-gray-200 text-xs">
                    10:00 AM
                </div>
                <button class="w-24 text-right flex justify-end">
                    <svg width="12" fill="currentColor" height="12" class="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                        </path>
                    </svg>
                </button>
            </div>
        </li>
    </ul>
</div>
					
					</div>
				
					<div class="p-2 col-span-1">
					<p class='text-black font-bold text-3xl p-2'>Lyrics</p>
					
					<div class="whitespace-pre-line">
					<span class='text-xl font-base text-black text-opacity-75 flex-wrap'>
						{song?.sections && (song?.sections[1]?.text)}
					</span>
					</div>
					<div class='p-3'>
					<span class='text-xl font-base text-black text-opacity-50'>
						{song?.sections && (song?.sections[1]?.footer)}
					</span>
					</div>
					
					</div>
					</div>
</div>
	)
}

export default Song
