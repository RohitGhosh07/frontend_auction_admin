import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper, faUserCircle, faCog, faHandshake, faArrowUp, faChartBar, faChartPie, faUsers, faUser, faBolt, faBars } from '@fortawesome/free-solid-svg-icons';
import Setting from './Setting';
import TeamDetails from './TeamDetails';
import Participants from './Participants';
import DraftSetting from './DraftSetting';


const Dashboard = () => {
    const [selectedComponent, setSelectedComponent] = useState('TeamDetails');
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const handleLinkClick = (component) => {
        setSelectedComponent(component);
    };


    const handleDropdownToggle = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const handleLogout = () => {
        // Implement your logout logic here
        console.log('Logout clicked');
        // Close the dropdown after logout
        setDropdownOpen(false);
    };
    return (
        <div>
            <div class="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">
                {/* sidebar */}
                <nav class="block py-4 px-6 top-0 bottom-0 w-64 bg-gradient-to-r from-blue-100 to-cyan-500 shadow-xl left-0 absolute flex-row flex-nowrap md:z-10 z-9999 transition-all duration-300 ease-in-out transform md:translate-x-0 -translate-x-full">
                    <button
                        class="md:hidden flex items-center justify-center cursor-pointer text-slate-700 w-6 h-10 border-l-0 border-r border-t border-b border-solid border-slate-100 text-xl leading-none bg-white rounded-r border border-solid border-transparent absolute top-1/2 -right-24-px focus:outline-none z-9998">
                        <i class="fas fa-ellipsis-v"></i>
                    </button>
                    <div class="flex-col min-h-full px-0 flex flex-wrap items-center justify-between w-full mx-auto overflow-y-auto overflow-x-hidden">
                        <div class="flex  flex-col items-stretch opacity-100 relative mt-4 overflow-y-auto overflow-x-hidden h-auto z-40 items-center flex-1 rounded w-full">
                            <a
                                text="admin"
                                href="#"
                                className="md:flex items-center flex-col text-center md:pb-2 text-slate-700 mr-0 inline-flex whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                            >
                                <img
                                    src="https://i.ibb.co/1GccvHz/logo-removebg-preview-1.png"
                                    alt="..."
                                    className="max-w-full rounded"
                                />
                                <span>ADMIN DASHBOARD</span>
                            </a>
                            <div class="md:flex-col md:min-w-full flex flex-col list-none">
                                <hr class="my-4 md:min-w-full" />
                                <h6 class="md:min-w-full text-slate-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                                    AUCTION
                                </h6>
                                <a
                                    href="javascript:;"
                                    className="text-xs uppercase py-3 font-bold block text-slate-800 hover:text-blue-500"
                                    onClick={() => handleLinkClick('TeamDetails')}>
                                    <FontAwesomeIcon icon={faNewspaper} className="mr-2 text-sm " />
                                    Team Details
                                </a>
                                <a
                                    href="javascript:;"
                                    className="text-xs uppercase py-3 font-bold block text-slate-800 hover:text-blue-500"
                                    onClick={() => handleLinkClick('Participants')}
                                >
                                    <FontAwesomeIcon icon={faUserCircle} className="mr-2 text-sm " />
                                    Participants
                                </a>
                                <a
                                    href="javascript:;"
                                    className="text-xs uppercase py-3 font-bold block text-slate-800 hover:text-blue-500"
                                    onClick={() => handleLinkClick('Setting')}
                                >
                                    <FontAwesomeIcon icon={faCog} className="mr-2 text-sm" />
                                    Settings
                                </a>

                                <hr class="my-4 md:min-w-full" />
                                <h6 class="md:min-w-full text-slate-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                                    DRAFT
                                </h6>
                                <a
                                    href="javascript:;"
                                    className="text-xs uppercase py-3 font-bold block text-slate-800 hover:text-blue-500"
                                    onClick={() => handleLinkClick('TeamDetails')}
                                >
                                    <FontAwesomeIcon icon={faHandshake} className="mr-2 text-sm" />
                                    Auction
                                </a>
                                <a
                                    href="javascript:;"
                                    className="text-xs uppercase py-3 font-bold block text-slate-800 hover:text-blue-500"
                                    onClick={() => handleLinkClick('DraftSetting')}
                                >
                                    <FontAwesomeIcon icon={faCog} className="mr-2 text-sm" />
                                    Settings
                                </a>

                            </div>
                        </div>
                    </div>
                </nav>
                {/* nav */}
                <div class="relative md:ml-64 bg-blue-100">
                    <nav class="absolute top-0 left-0 w-full z-10 bg-white lg:flex-row lg:flex-nowrap lg:justify-start flex items-center py-1 px-4 lg:bg-transparent">
                        <div class="w-full mx-aut0 items-center flex justify-between lg:flex-nowrap flex-wrap lg:px-6 px-4">
                            <a href="javascript:;" class="text-slate-800 lg:text-white text-sm uppercase inline-block font-semibold my-3">
                                {selectedComponent === 'TeamDetails' && 'Team Details'}
                                {selectedComponent === 'Setting' && 'Settings'}
                                {selectedComponent === 'Participants' && 'Participants'}
                                {selectedComponent === 'DraftSetting' && 'Draft Settings'}
                            </a>

                            <div class="items-center w-full lg:flex lg:w-auto flex-grow duration-300 transition-all ease-in-out lg:h-auto-important hidden">
                                <form class="flex flex-row flex-wrap items-center ml-auto mr-3 mt-3">
                                    <div className="pt-2 -mt-3 relative mx-auto text-gray-600">
                                        <input
                                            className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                                            type="search"
                                            name="search"
                                            placeholder="Search"
                                        />
                                        <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
                                            <svg
                                                className="text-gray-600 h-4 w-4 fill-current"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                version="1.1"
                                                id="Capa_1"
                                                x="0px"
                                                y="0px"
                                                viewBox="0 0 56.966 56.966"
                                                style={{ enableBackground: "new 0 0 56.966 56.966" }}
                                                xmlSpace="preserve"
                                                width="512px"
                                                height="512px"
                                            >
                                                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                                            </svg>
                                        </button>

                                    </div>
                                </form>
                                <div className="relative inline-block">
                                    <a
                                        href="javascript:;"
                                        className="text-slate-500 block"
                                        onClick={handleDropdownToggle}
                                    >
                                        <div className="items-center flex">
                                            <span className="w-12 h-12 text-sm bg-white hover:bg-slate-100 inline-flex items-center justify-center rounded-full">
                                                <img
                                                    alt="..."
                                                    className="w-full rounded-full align-middle border-none shadow-lg"
                                                    src="https://i.ibb.co/1GccvHz/logo-removebg-preview-1.png"
                                                />
                                            </span>
                                        </div>
                                    </a>

                                    {isDropdownOpen && (
                                        <div className="absolute right-0 mt-2 border rounded-md shadow-lg">
                                            <button
                                                onClick={handleLogout}
                                                className="block px-4 py-2 text-sm text-slate-100 hover:bg-red-500 w-full text-left"
                                            >
                                                Logout
                                            </button>
                                        </div>
                                    )}
                                </div>

                            </div>
                        </div>
                    </nav>
                    {/* hero */}
                    <div class="relative pt-32 pb-32 bg-gradient-to-r from-cyan-500 to-blue-600">
                        <div class="px-4 md:px-6 mx-auto w-full">
                            <div>
                                <div class="flex flex-wrap">
                                    <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                                        <div class="relative flex flex-col min-w-0 break-words hover:bg-blue-100 bg-white rounded-lg mb-6 xl:mb-0 shadow-lg">
                                            <div class="flex-auto p-4">
                                                <div class="flex flex-wrap">
                                                    <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                                                        <h5 class="text-slate-400 uppercase font-bold text-xs">Sold Players</h5>
                                                        <span class="font-bold text-xl">350,897</span>
                                                    </div>
                                                    <div class="relative w-auto pl-4 flex-initial">
                                                        <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-green-600">
                                                            <FontAwesomeIcon icon={faUsers} className="mr-0 text-sm" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <p class="text-sm text-slate-500 mt-4"><span class="text-emerald-500 mr-2">
                                                    <FontAwesomeIcon icon={faArrowUp} className="mr-2 text-sm" />
                                                    3.48%</span><span class="whitespace-nowrap">Since last month</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                                        <div class="relative flex flex-col min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-lg">
                                            <div class="flex-auto p-4">
                                                <div class="flex flex-wrap">
                                                    <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                                                        <h5 class="text-slate-400 uppercase font-bold text-xs">Unsold PLayers</h5>
                                                        <span class="font-bold text-xl">2,356</span>
                                                    </div>
                                                    <div class="relative w-auto pl-4 flex-initial">
                                                        <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-600">
                                                            <FontAwesomeIcon icon={faUser} className="mr-0 text-sm" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <p class="text-sm text-slate-500 mt-4"><span class="text-red-500 mr-2"><i class="fas fa-arrow-down"></i> 3.48%</span><span class="whitespace-nowrap">Since last week</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                                        <div class="relative flex flex-col min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-lg">
                                            <div class="flex-auto p-4">
                                                <div class="flex flex-wrap">
                                                    <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                                                        <h5 class="text-slate-400 uppercase font-bold text-xs">Total Teams</h5>
                                                        <span class="font-bold text-xl">924</span>
                                                    </div>
                                                    <div class="relative w-auto pl-4 flex-initial">
                                                        <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-indigo-500">
                                                            <FontAwesomeIcon icon={faUsers} className="mr-0 text-sm" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <p class="text-sm text-slate-500 mt-4"><span class="text-orange-500 mr-2"><i class="fas fa-arrow-down"></i> 1.10%</span><span class="whitespace-nowrap">Since yesterday</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                                        <div class="relative flex flex-col min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-lg">
                                            <div class="flex-auto p-4">
                                                <div class="flex flex-wrap">
                                                    <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                                                        <h5 class="text-slate-400 uppercase font-bold text-xs">PERFORMANCE</h5>
                                                        <span class="font-bold text-xl">49,65%</span>
                                                    </div>
                                                    <div class="relative w-auto pl-4 flex-initial">
                                                        <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-yellow-600">
                                                            <FontAwesomeIcon icon={faBolt} className="mr-0 text-sm" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <p class="text-sm text-slate-500 mt-4"><span class="text-emerald-500 mr-2"><i class="fas fa-arrow-up"></i> 12%</span><span class="whitespace-nowrap">Since last month</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {selectedComponent === 'TeamDetails' && <TeamDetails />}
                    {selectedComponent === 'Setting' && <Setting />}
                    {selectedComponent === 'Participants' && <Participants />}
                    {selectedComponent === 'DraftSetting' && <DraftSetting />}
                </div>
            </div>
        </div>
    )
}

export default Dashboard
