import React from 'react'
import {Link} from 'react-router-dom'
import image from '../assets/image.jpeg'

function Section2({chart}) {

	return (
		

<div class="w-full bg-white p-4">
{chart ? 
            <div class="overflow-hidden shadow-lg rounded-lg  w-60 md:w-80 cursor-pointer m-auto">
	    <Link to={`/track/${chart.key}`}  class="w-full block h-full">
                    <img alt={chart?.images?.coverart} src={chart?.images?.coverart} class="max-h-40 w-full object-cover"/>
                    <div class="bg-white dark:bg-gray-800 w-full p-4">
                        <p class="text-indigo-500 text-md font-medium">
                            {chart.subtitle}
                        </p>
                        <p class="text-gray-800 dark:text-white text-xl font-medium mb-2">
                            {chart.title}
                        </p>
                        <p class="text-gray-400 dark:text-gray-300 font-light text-md">
                            Work at home, remote, is the new age of the job, every person can work at home....
                        </p>
                        <div class="flex items-center mt-4">
                            <Link to="/" class="block relative">
                                <img alt="profile" src={image} class="mx-auto object-cover rounded-full h-10 w-10 "/>
                            </Link>
                            <div class="flex flex-col justify-between ml-4 text-sm">
                                <p class="text-gray-800 dark:text-white">
                                    Jean Jacques
                                </p>
                                <p class="text-gray-400 dark:text-gray-300">
                                    20 mars 2029 - 6 min read
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
	    :

	    
<div class="bg-white rounded w-96 mx-auto rounded-2xl shadow-lg">
    <div class="bg-gray-200 h-48 p-3 overflow-hidden animate-pulse">
    </div>
    <div class="h- p-3">
        <div class="grid grid-cols-3 gap-4 mt-2">
            <div class="h-8 bg-gray-200 rounded animate-pulse">
            </div>
            <div class="h-8 bg-gray-200 rounded animate-pulse">
            </div>
            <div class="h-8 bg-gray-200 rounded animate-pulse">
            </div>
            <div class="h-8 col-span-2 bg-gray-200 rounded animate-pulse">
            </div>
            <div class=" h-8 bg-gray-200 rounded animate-pulse">
            </div>
            <div class="...">
            </div>
            <div class="col-span-2 ...">
            </div>
        </div>
    </div>
</div>

 }
    </div>


	)
}

export default Section2
