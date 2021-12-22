import React,{useState,useEffect} from 'react'
import Navigation from './Navigation'
import Section2 from './Section2'
import axios from "axios";
import {charts} from '../api'

function Browse() {
	const [chart, setChart] = useState([]);

	useEffect(() => {
		
		    return axios
		      .request(charts)
		      .then((res) => {
			let chart = res.data.tracks;
			setChart(chart);
			})
		      .catch((error) => {
			console.error("Error", error.message);
		      });
		},[]); 
	return (
		<div>

		
		<div class="flex flex-col-2 justify-between flex-wrap">
		{/* <div class="h-screen sticky top-20">
				<Navigation/>
		</div> */}
				
				{/* <div class="cols-span-2">
					<p>Title</p>
				</div> */}
				<div class="grid grid-cols-4 gap-4 shadow-lg p-2 m-3 ">
				{chart.map(chart =>(
				<Section2 key={chart.key} chart={chart}/>
				))}
				</div>
		</div>
		</div>
	)
}

export default Browse
