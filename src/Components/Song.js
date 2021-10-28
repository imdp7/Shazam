import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import YouTube from 'react-youtube';

const opts = {
	width: '100%',
	playerVars: {
		// https://developers.google.com/youtube/player_parameters
		autoplay:1,
	},
      };

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

		<div class="bg-yellow-500 p-2">
		
				
				<div class="flex flex-row">
					<div class="w-1/3 mt-12">	
					<img class="object-cover absolute left-10 rounded-3xl shadow-lg" src={song.images?.coverarthq} height='250px' width='250px' alt={song.key}/>
					</div>
					
				<div class="w-2/3 flex flex-col -ml-24 mt-4">					
					<span class=" text-3xl font-extrabold ">{song.title}</span>
					<span class=" text-xl font-bold ">{song.subtitle}</span>
					<span class="p-2 justify-between text-lg font-semi ">{song.genres?.primary}</span>
					<div class="inline-flex rounded-md">
					<Link to={{ pathname:song.hub?.options[0]?.actions[0]?.uri}} target="_blank">
                			<button type="button" class="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    			Play on Itunes
                			</button>
					</Link>
            				</div>
			</div>
					
		</div>
		</div>
					{/* src={song?.sections[2]?.youtubeurl?.actions[0]?.uri} */}
					<div class="w-full mt-36 h-full grid grid-cols-3">
					<div class="p-3 col-span-2">

					<p class='text-black font-bold text-3xl p-2'>Music Video</p>

					<YouTube videoId="D-YDEyuDxWU" opts={opts}/>					
					</div>
					<div class="p-3 col-span-1">
					<p class='text-black font-bold text-3xl p-2'>Lyrics</p>
					<span class="text-xl font-base text-black whitespace-pre-line">
						{song?.sections[1]?.text}
					</span>
					</div>
					</div>
</div>
	)
}

export default Song
