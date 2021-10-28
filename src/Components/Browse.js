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

		
		<div class="flex flex-col-2 justify-between">
		<div class="h-screen sticky top-20">
				<Navigation/>
		</div>
				
				{/* <div class="cols-span-2">
					<p>Title</p>
				</div> */}
				<div class="grid grid-flow-row grid-cols-3 grid-rows-3 gap-4 shadow-lg ">
				{chart.map(chart =>(
				<Section2 key={chart.key} chart={chart}/>
				))}
				</div>
		</div>
		</div>
	)
}

export default Browse
