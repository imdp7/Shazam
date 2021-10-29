import React from 'react'
import Card from './Card' 
function Section() {
	return (
	<div class="p-10 ">
	<h2 class="flex justify-center rounded-lg items-center bg-indigo-600 text-white text-4xl shadow-lg font-mono font-black p-3">
		Plans
	</h2>
	
	<div class="flex flex-column justify-around flex-wrap p-10">
	<Card title={'Basic'} price={'$9.99'} number={'100'}/>
	<Card title={'Standard'} price={'$19.99'} number={'200'}/>
	<Card title={'Premium'} price={'$39.99'} number={'1000'}/>	
</div>	
</div>	
	)
}

export default Section
