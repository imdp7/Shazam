import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import ReactPlayer from "react-player"
import Avatar from '../assets/avatar.png'
import { BiShare,BiMusic } from 'react-icons/bi';
import 'boxicons';

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

    var options2 = {
  method: 'GET',
  url: 'https://shazam.p.rapidapi.com/songs/get-count',
  params: {key: `${match.params?.key}`, locale: 'en-US'},
  headers: {
    'x-rapidapi-host': 'shazam.p.rapidapi.com',
    'x-rapidapi-key': 'a58e8b547bmshc997baefe2bfbb9p18bfc7jsn1e90b70d7c29'
  }
};

const numberFormat = (value) =>
  new Intl.NumberFormat('en-IN', {
  }).format(value);
	
	const [song,setSong] = useState([]);
    const [count,setCount] = useState([]);
    const [lyrics,setLyrics] = useState([]);
	

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


	useEffect(() => {
		if (match) {
		    
		      axios.request(options2)
		      .then((res) => {
			let c = res.data;
			setCount(c);
			})
		      .catch((error) => {
			console.error("Error", error.message);
		      });
		}
		},[match])

        let Values =[];

//   useEffect(() => {
//    const data = song?.sections[1]?.text;
//    console.log(data)

//    for (var key in data['text']) {
//      Values.push(key);
//     }
//     setLyrics(Values)
//     console.log(lyrics)
//   }, []);


	return (
		<div>

		<div class=" pb-2 bg-black">
		
				
				<div class="flex flex-row">
					<div class="w-1/3 mt-24">
					<img class="object-cover absolute left-10 rounded-lg shadow-lg transition hover:duration-300 ease-in-out" src={song?.images?.coverarthq} height='250px' width='250px' alt={song.key}/>
					</div>
					
				<div class="flex flex-col -ml-36 mt-16 p-2">					
					<span class="p-2 text-3xl font-extrabold text-white">{song?.title}</span>
					<span class="p-2 text-xl font-bold text-white">{song?.subtitle}</span>
                    <div class="flex flex-row">
					<span class="p-2 justify-between text-lg font-semi text-white text-opacity-75">{song?.genres?.primary}</span>
                    <div class="icons8-shazam"></div>
					<span class="p-2 justify-between text-base font-semi text-white text-opacity-75">{numberFormat(count.total)} Shazams</span>
                    </div>
					{/* <div class="inline-flex rounded-md">
					<Link to={{ pathname:song?.hub?.options[0]?.actions[0]?.uri}} target="_blank">
                			<button type="button" class="py-4 px-6 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            <box-icon type="logo" name="BiMusic"></box-icon>
                    			Play on Itunes
                			</button>
					</Link>
            				</div> */}
					
			</div>		
		</div>
		</div>
        <div class="w-2/3 flex flex-row ml-72 pl-24 mt-4">
        <div class="flex flex-col w-auto rounded-md pr-3">
					<Link to={{ pathname:song?.hub?.options[0]?.actions[0]?.uri}} target="_blank">
                    <div class="flex flex-row items-center">
                        
                			<button type="button" class="py-4 px-6 flex justify-around items-center bg-red-600 hover:bg-black
                            hover:text-white focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base w-full font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full ">
                               <BiMusic style={{fontSize:'25px'}}/> 
                               <span>Play on Itunes</span>
                			</button>
                    </div>
					</Link>
                    <div class="mt-3 w-full">
            <p class="text-xs font-bold">
            Get up to 5 months free of Apple Music
            </p>
        </div>
            				</div>
        
                <div class="flex flex-col w-36 rounded-md -pr-3">
					<Link to={{ pathname:song?.hub?.options[0]?.actions[0]?.uri}} target="_blank">
                        
                			<button type="button" class="py-4 px-6 flex justify-around bg-black hover:bg-white
                            hover:text-black focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full ">
                                <BiShare style={{fontSize:'25px'}}/> 
                               <span> Share</span>
                			</button>
					</Link>
            				</div>
                            </div>

					<div class="w-full mt-2 h-full grid grid-cols-3 p-10">
					
					<div class="p-2 col-span-2 row-span-2">

					<p class='text-black font-bold text-3xl p-2 mb-5'>Music Video</p>

					<ReactPlayer
        				url={song?.sections && song?.sections[2]?.youtubeurl?.actions[0]?.uri}
					controls='false'
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
					<p class='text-black font-bold text-3xl p-2 mb-5'>Lyrics</p>
					
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
