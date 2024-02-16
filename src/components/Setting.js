import React from 'react'

const Setting = () => {

    return (
        <div>
            <div class="px-4 md:px-6 mx-auto w-full -mt-24">
                <div class="flex flex-wrap">
                    <div class="w-full xl:w-11/12 px-4">
                        <div class="relative flex flex-col w-full mb-6 shadow-lg rounded-lg bg-white">
                            <div class="mb-0 p-6 pb-0">
                                <div class="text-center flex justify-between items-center">
                                    <h6 class="text-xl font-bold mb-0">Auction Settings</h6>
                                    <button class="inline-block outline-none focus:outline-none align-middle transition-all duration-150 ease-in-out uppercase border border-solid font-bold last:mr-0 mr-2  text-white bg-blue-500 border-blue-500 active:bg-blue-600 active:border-blue-600 text-xs px-3 py-2 shadow hover:shadow-md rounded-md">Save change</button>
                                </div>
                            </div>
                            <div class="flex-auto px-6 pb-6 pt-0">
                                <form>
                                    <div>
                                        <h6 class="mt-6 mb-2 font-bold">Set Bid Auction Round</h6>
                                        <hr class="mb-6 border-b-1 border-slate-200" />
                                        <div class="flex flex-wrap -mx-4">
                                            <div class="w-full px-4 lg:w-6/12">
                                                <div class="relative w-full mb-3">
                                                    <label class="block uppercase text-slate-500 text-xs font-bold mb-2 ml-1" for="grid-password">

                                                        For each HC-Range</label>
                                                    <div class="mb-3 pt-0">
                                                        <select
                                                            className="border-slate-300 px-3 py-2 text-sm w-full placeholder-slate-200 text-slate-700 relative bg-white rounded-md outline-none focus:ring focus:ring-blue-500 focus:ring-1 focus:border-blue-500 border border-solid transition duration-200"
                                                        >
                                                            <option value="" disabled selected>
                                                                Select a number
                                                            </option>
                                                            {Array.from({ length: 20 }, (_, index) => (
                                                                <option key={index + 1} value={index + 1}>
                                                                    {index + 1}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>

                                                </div>
                                            </div>
                                            <div class="w-full px-4 lg:w-6/12">
                                                <div class="relative w-full mb-3">
                                                    <label class="block uppercase text-slate-500 text-xs font-bold mb-2 ml-1" for="grid-password">Generate New Column</label>
                                                    <div class="mb-3 pt-0">
                                                        <select
                                                            className="border-slate-300 px-3 py-2 text-sm w-full placeholder-slate-200 text-slate-700 relative bg-white rounded-md outline-none focus:ring focus:ring-blue-500 focus:ring-1 focus:border-blue-500 border border-solid transition duration-200"
                                                        >
                                                            <option value="" disabled selected>
                                                                Select a number
                                                            </option>
                                                            {Array.from({ length: 20 }, (_, index) => (
                                                                <option key={index + 1} value={index + 1}>
                                                                    {index + 1}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>

                                                </div>
                                            </div>
                                            <div class="w-full px-4 lg:w-6/12">
                                                <div class="relative w-full mb-3">
                                                    <label class="block uppercase text-slate-500 text-xs font-bold mb-2 ml-1" for="grid-password">Max player pick for each team

                                                    </label>
                                                    <div class="mb-3 pt-0"><input placeholder="First Name" type="text" class="border-slate-300 px-3 py-2 text-sm  w-full placeholder-slate-200 text-slate-700 relative bg-white rounded-md outline-none focus:ring focus:ring-blue-500 focus:ring-1 focus:border-blue-500 border border-solid transition duration-200 " /></div>
                                                </div>
                                            </div>
                                            <div class="w-full px-4 lg:w-6/12">
                                                <div class="relative w-full mb-3">
                                                    <label class="block uppercase text-slate-500 text-xs font-bold mb-2 ml-1" for="grid-password">Set Bid Unit

                                                    </label>
                                                    <div class="mb-3 pt-0"><input placeholder="Last Name" type="text" class="border-slate-300 px-3 py-2 text-sm  w-full placeholder-slate-200 text-slate-700 relative bg-white rounded-md outline-none focus:ring focus:ring-blue-500 focus:ring-1 focus:border-blue-500 border border-solid transition duration-200 " /></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h6 class="mt-6 mb-2 font-bold"> Bid Auction </h6>
                                        <hr class="mb-6 border-b-1 border-slate-200" />
                                        <div class="flex flex-wrap -mx-4">
                                            <div class="w-full px-4 lg:w-6/12">
                                                <div class="relative w-full mb-3">
                                                    <label class="block uppercase text-slate-500 text-xs font-bold mb-2 ml-1" for="grid-password">

                                                        Max KING Category Pick

                                                    </label>
                                                    <div class="mb-3 pt-0"><input placeholder="Username" type="text" class="border-slate-300 px-3 py-2 text-sm  w-full placeholder-slate-200 text-slate-700 relative bg-white rounded-md outline-none focus:ring focus:ring-blue-500 focus:ring-1 focus:border-blue-500 border border-solid transition duration-200 " /></div>
                                                </div>
                                            </div>
                                            <div class="w-full px-4 lg:w-6/12">
                                                <div class="relative w-full mb-3">
                                                    <label class="block uppercase text-slate-500 text-xs font-bold mb-2 ml-1" for="grid-password">Minimum Point To Be Used For KING Category

                                                    </label>
                                                    <div class="mb-3 pt-0"><input placeholder="Email" type="email" class="border-slate-300 px-3 py-2 text-sm  w-full placeholder-slate-200 text-slate-700 relative bg-white rounded-md outline-none focus:ring focus:ring-blue-500 focus:ring-1 focus:border-blue-500 border border-solid transition duration-200 " /></div>
                                                </div>
                                            </div>
                                            <div class="w-full px-4 lg:w-6/12">
                                                <div class="relative w-full mb-3">
                                                    <label class="block uppercase text-slate-500 text-xs font-bold mb-2 ml-1" for="grid-password">Max KNIGHT PLUS Category Pick



                                                    </label>
                                                    <div class="mb-3 pt-0"><input placeholder="First Name" type="text" class="border-slate-300 px-3 py-2 text-sm  w-full placeholder-slate-200 text-slate-700 relative bg-white rounded-md outline-none focus:ring focus:ring-blue-500 focus:ring-1 focus:border-blue-500 border border-solid transition duration-200 " /></div>
                                                </div>
                                            </div>
                                            <div class="w-full px-4 lg:w-6/12">
                                                <div class="relative w-full mb-3">
                                                    <label class="block uppercase text-slate-500 text-xs font-bold mb-2 ml-1" for="grid-password">Minimum Point To Be Used For KNIGHT PLUS Category



                                                    </label>
                                                    <div class="mb-3 pt-0"><input placeholder="Last Name" type="text" class="border-slate-300 px-3 py-2 text-sm  w-full placeholder-slate-200 text-slate-700 relative bg-white rounded-md outline-none focus:ring focus:ring-blue-500 focus:ring-1 focus:border-blue-500 border border-solid transition duration-200 " /></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h6 class="mt-6 mb-2 font-bold">Information</h6>
                                        <hr class="mb-6 border-b-1 border-slate-200" />
                                        <div class="flex flex-wrap -mx-4">
                                            <div class="w-full px-4 lg:w-12/12">
                                                <div class="relative w-full mb-3">
                                                    <label class="block uppercase text-slate-500 text-xs font-bold mb-2 ml-1" for="grid-password">Generate Bid Auction Round-Position

                                                    </label>
                                                    <div class="mb-3 pt-0">
                                                        <select
                                                            className="border-slate-300 px-3 py-2 text-sm w-full placeholder-slate-200 text-slate-700 relative bg-white rounded-md outline-none focus:ring focus:ring-blue-500 focus:ring-1 focus:border-blue-500 border border-solid transition duration-200"
                                                        >
                                                            <option value="" disabled selected>
                                                                Select an option
                                                            </option>
                                                            <option value="option1">Option 1</option>
                                                            <option value="option2">Option 2</option>
                                                            <option value="option3">Option 3</option>
                                                            {/* Add more options as needed */}
                                                        </select>
                                                    </div>

                                                </div>
                                            </div>
                                            <div class="w-full px-4 lg:w-4/12">
                                                <div class="relative w-full mb-3">
                                                    <label class="block uppercase text-slate-500 text-xs font-bold mb-2 ml-1" for="grid-password">Minimum Point To Be Used Per Bid

                                                    </label>
                                                    <div class="mb-3 pt-0"><input placeholder="City" type="text" class="border-slate-300 px-3 py-2 text-sm  w-full placeholder-slate-200 text-slate-700 relative bg-white rounded-md outline-none focus:ring focus:ring-blue-500 focus:ring-1 focus:border-blue-500 border border-solid transition duration-200 " /></div>
                                                </div>
                                            </div>
                                            <div class="w-full px-4 lg:w-4/12">
                                                <div class="relative w-full mb-3">
                                                    <label class="block uppercase text-slate-500 text-xs font-bold mb-2 ml-1" for="grid-password">Max ACE Category Pick

                                                    </label>
                                                    <div class="mb-3 pt-0"><input placeholder="Country" type="text" class="border-slate-300 px-3 py-2 text-sm  w-full placeholder-slate-200 text-slate-700 relative bg-white rounded-md outline-none focus:ring focus:ring-blue-500 focus:ring-1 focus:border-blue-500 border border-solid transition duration-200 " /></div>
                                                </div>
                                            </div>
                                            <div class="w-full px-4 lg:w-4/12">
                                                <div class="relative w-full mb-3">
                                                    <label class="block uppercase text-slate-500 text-xs font-bold mb-2 ml-1" for="grid-password">Minimum Point To Be Used For ACE Category

                                                    </label>
                                                    <div class="mb-3 pt-0"><input placeholder="Postal Code" type="text" class="border-slate-300 px-3 py-2 text-sm  w-full placeholder-slate-200 text-slate-700 relative bg-white rounded-md outline-none focus:ring focus:ring-blue-500 focus:ring-1 focus:border-blue-500 border border-solid transition duration-200 " /></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>

                </div>
                <footer class="block py-4">
                    <div class="container mx-auto px-4">
                        <hr class="mb-4 border-b-1 border-slate-200" />
                        <div class="flex flex-wrap items-center md:justify-between justify-center">
                            <div class="w-full md:w-4/12 px-4">
                                <div class="text-center mb-2 md:text-left md:mb-0"><a href="" target="_blank" class="text-sm text-slate-500 font-semibold py-1 text-center md:text-left">Copyright © 2021 ForcePower</a></div>
                            </div>
                            <div class="w-full md:w-8/12 px-4">
                                <ul class="flex flex-wrap list-none md:justify-end  justify-center">
                                    <li><a href="" target="_blank" class="text-slate-700 hover:text-slate-900 text-sm font-semibold block py-1 px-3">Force Power</a></li>
                                    <li><a href="" target="_blank" class="text-slate-700 hover:text-slate-900 text-sm font-semibold block py-1 px-3">About Us</a></li>
                                    <li><a href="" target="_blank" class="text-slate-700 hover:text-slate-900 text-sm font-semibold block py-1 px-3">Blog</a></li>
                                    <li><a href="" target="_blank" class="text-slate-700 hover:text-slate-900 text-sm font-semibold block py-1 px-3">Licenses</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Setting
