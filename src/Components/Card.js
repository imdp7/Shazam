import React from 'react'

function Card(props) {
	return (
		<div class="w-72 mx-auto bg-white border-t-4 rounded border-indigo-500 dark:bg-gray-800 text-center shadow-lg p-4">
    <div class="overflow-hidden">
        <div class="text-2xl font-medium mb-8 text-gray-800 dark:text-white">
            {props.title}
        </div>
        <div class="leading-loose text-sm font-light text-gray-700 dark:text-gray-50 mb-10">
            <div class="font-bold">
                {props.number} products
            </div>
            <div>
                All features
            </div>
            <div>
                Free support
            </div>
        </div>
        <div class="font-bold text-2xl mb-2 text-gray-500 dark:text-gray-200">
            <span>
                {props.price}
            </span>
        </div>
        <div class="text-gray-500 dark:text-gray-200 text-sm">
            / month
        </div>
        <div class="px-4 mt-8">
            <button type="button" class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                Start
            </button>
        </div>
    </div>
</div>
	)
}

export default Card
