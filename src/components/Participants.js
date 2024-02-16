import React from 'react'
import { faCaretDown, faCog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Participants = () => {
    return (
        <div className="px-4 md:px-6 mx-auto w-full -mt-24 overflow-y-hidden">
            <div className="flex flex-wrap">
                <div className="w-full">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-8 shadow-lg rounded-lg bg-white text-slate-700">
                        <div className="px-6 py-4 border-0">
                            <div className="flex flex-wrap items-center">
                                <div className="relative w-full max-w-full flex-grow flex-1">
                                    <h3 className="font-bold text-lg text-slate-700">
                                        Participants
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="block w-full overflow-x-auto">
                            <table className="items-center w-full bg-transparent border-collapse">
                                <thead>
                                    <tr>
                                        <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left bg-slate-100 text-slate-500 border-slate-200">
                                            Player Name
                                        </th>
                                        <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left bg-slate-100 text-slate-500 border-slate-200">
                                            Bidding price
                                        </th>
                                        <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left bg-slate-100 text-slate-500 border-slate-200">
                                            Team
                                        </th>
                                        <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left bg-slate-100 text-slate-500 border-slate-200">
                                            Status
                                        </th>
                                        <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left bg-slate-100 text-slate-500 border-slate-200">
                                            Gender
                                        </th>
                                        <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left bg-slate-100 text-slate-500 border-slate-200" />
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <div className="flex items-center">
                                                <img
                                                    src="https://demos.creative-tim.com/notus-pro-react/static/media/bootstrap.bd712487.jpg"
                                                    className="h-12 w-12 bg-white rounded-full border p-1"
                                                    alt="..."
                                                />{" "}
                                                <span className="ml-3 font-bold NaN">
                                                    Argon Design System
                                                </span>
                                            </div>
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <div className="flex items-center">$2,500 USD</div>
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <div className="flex items-center">
                                                <i className="fas fa-circle mr-2 text-orange-500" />
                                                pending
                                            </div>
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <div className="flex items-center">
                                                <div className="flex items-center">
                                                    <div>
                                                        <a
                                                            className="text-white bg-slate-500 inline-flex items-center justify-center shadow-lg rounded rounded-full relative border-2 border-white -ml-4 hover:z-1 w-8 h-8"
                                                            href="javascript:;"
                                                        >
                                                            <img
                                                                alt="..."
                                                                className="rounded-full w-full"
                                                                src="https://demos.creative-tim.com/notus-pro-react/static/media/team-1-800x800.fa5a7ac2.jpg"
                                                            />
                                                            <div className="hidden ">
                                                                <div className="border-0 mb-3 block z-50 font-normal leading-normal text-sm text-left no-underline break-words rounded">
                                                                    <div className="py-1 px-2 text-center rounded text-red-600 bg-black">
                                                                        Team 1
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <a
                                                            className="text-white bg-slate-500 inline-flex items-center justify-center shadow-lg rounded rounded-full relative border-2 border-white -ml-4 hover:z-1 w-8 h-8"
                                                            href="javascript:;"
                                                        >
                                                            <img
                                                                alt="..."
                                                                className="rounded-full w-full"
                                                                src="https://demos.creative-tim.com/notus-pro-react/static/media/team-2-800x800.2f02b23c.jpg"
                                                            />
                                                            <div className="hidden ">
                                                                <div className="border-0 mb-3 block z-50 font-normal leading-normal text-sm text-left no-underline break-words rounded">
                                                                    <div className="py-1 px-2 text-center rounded text-white bg-black">
                                                                        Team 2
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <a
                                                            className="text-white bg-slate-500 inline-flex items-center justify-center shadow-lg rounded rounded-full relative border-2 border-white -ml-4 hover:z-1 w-8 h-8"
                                                            href="javascript:;"
                                                        >
                                                            <img
                                                                alt="..."
                                                                className="rounded-full w-full"
                                                                src="https://demos.creative-tim.com/notus-pro-react/static/media/team-3-800x800.19201574.jpg"
                                                            />
                                                            <div className="hidden ">
                                                                <div className="border-0 mb-3 block z-50 font-normal leading-normal text-sm text-left no-underline break-words rounded">
                                                                    <div className="py-1 px-2 text-center rounded text-white bg-black">
                                                                        Team 3
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <a
                                                            className="text-white bg-slate-500 inline-flex items-center justify-center shadow-lg rounded rounded-full relative border-2 border-white -ml-4 hover:z-1 w-8 h-8"
                                                            href="javascript:;"
                                                        >
                                                            <img
                                                                alt="..."
                                                                className="rounded-full w-full"
                                                                src="https://demos.creative-tim.com/notus-pro-react/static/media/team-4-470x470.4ef82ef4.png"
                                                            />
                                                            <div
                                                                className="hidden "
                                                                data-popper-placement="top"
                                                                style={{
                                                                    position: "absolute",
                                                                    inset: "auto auto 0px 0px",
                                                                    margin: 0,
                                                                    transform: "translate(688px, 1518px)"
                                                                }}
                                                                data-popper-escaped=""
                                                            >
                                                                <div className="border-0 mb-3 block z-50 font-normal leading-normal text-sm text-left no-underline break-words rounded">
                                                                    <div className="py-1 px-2 text-center rounded text-white bg-black">
                                                                        Team 4
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <small className="pl-2 font-bold mb-1" />
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 min-w-140-px">
                                            <div className="flex items-center">
                                                <span className="mr-2">60%</span>
                                                <div className="relative w-full">
                                                    <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                                                        <div
                                                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                                                            style={{ width: "60%" }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 pb-6 pl-6 text-right">
                                            <div className="relative">
                                                <button className="inline-block outline-none focus:outline-none align-middle transition-all duration-150 ease-in-out uppercase border border-solid font-bold last:mr-0 mr-2  text-slate-800 bg-white border-white active:bg-slate-100 active:border-slate-100 text-xs px-3 py-2 shadow hover:shadow-md rounded-md">
                                                    <FontAwesomeIcon icon={faCog} className="mr-2 text-sm" />
                                                    <FontAwesomeIcon icon={faCaretDown} className="mr-2 text-sm" />

                                                </button>
                                                <div className="block  z-50">
                                                    <div className="origin-top-right bg-white text-base float-left p-2 border list-none text-left rounded-lg shadow-lg min-w-48 transition-all duration-100 ease-in transform opacity-0 scale-95 absolute ">
                                                        <a
                                                            href="javascript:;"
                                                            className="text-sm px-3 py-2 block w-full whitespace-nowrap bg-transparent hover:bg-slate-100 rounded transition-all duration-100"
                                                        >
                                                            Edit Profile
                                                        </a>
                                                        <a
                                                            href="javascript:;"
                                                            className="text-sm px-3 py-2 block w-full whitespace-nowrap bg-transparent hover:bg-slate-100 rounded transition-all duration-100"
                                                        >
                                                            Settings
                                                        </a>
                                                        <a
                                                            href="javascript:;"
                                                            className="text-sm px-3 py-2 block w-full whitespace-nowrap bg-transparent hover:bg-slate-100 rounded transition-all duration-100"
                                                        >
                                                            Log out
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <div className="flex items-center">
                                                <img
                                                    src="https://demos.creative-tim.com/notus-pro-react/static/media/angular.b5045666.jpg"
                                                    className="h-12 w-12 bg-white rounded-full border p-1"
                                                    alt="..."
                                                />{" "}
                                                <span className="ml-3 font-bold NaN">
                                                    Angular Now UI Kit PRO
                                                </span>
                                            </div>
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <div className="flex items-center">$1,800 USD</div>
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <div className="flex items-center">
                                                <i className="fas fa-circle mr-2 text-emerald-500" />
                                                completed
                                            </div>
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <div className="flex items-center">
                                                <div className="flex items-center">
                                                    <div>
                                                        <a
                                                            className="text-white bg-slate-500 inline-flex items-center justify-center shadow-lg rounded rounded-full relative border-2 border-white -ml-4 hover:z-1 w-8 h-8"
                                                            href="javascript:;"
                                                        >
                                                            <img
                                                                alt="..."
                                                                className="rounded-full w-full"
                                                                src="https://demos.creative-tim.com/notus-pro-react/static/media/team-1-800x800.fa5a7ac2.jpg"
                                                            />
                                                            <div className="hidden ">
                                                                <div className="border-0 mb-3 block z-50 font-normal leading-normal text-sm text-left no-underline break-words rounded">
                                                                    <div className="py-1 px-2 text-center rounded text-white bg-black">
                                                                        Team 1
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <a
                                                            className="text-white bg-slate-500 inline-flex items-center justify-center shadow-lg rounded rounded-full relative border-2 border-white -ml-4 hover:z-1 w-8 h-8"
                                                            href="javascript:;"
                                                        >
                                                            <img
                                                                alt="..."
                                                                className="rounded-full w-full"
                                                                src="https://demos.creative-tim.com/notus-pro-react/static/media/team-2-800x800.2f02b23c.jpg"
                                                            />
                                                            <div className="hidden ">
                                                                <div className="border-0 mb-3 block z-50 font-normal leading-normal text-sm text-left no-underline break-words rounded">
                                                                    <div className="py-1 px-2 text-center rounded text-white bg-black">
                                                                        Team 2
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <a
                                                            className="text-white bg-slate-500 inline-flex items-center justify-center shadow-lg rounded rounded-full relative border-2 border-white -ml-4 hover:z-1 w-8 h-8"
                                                            href="javascript:;"
                                                        >
                                                            <img
                                                                alt="..."
                                                                className="rounded-full w-full"
                                                                src="https://demos.creative-tim.com/notus-pro-react/static/media/team-3-800x800.19201574.jpg"
                                                            />
                                                            <div className="hidden ">
                                                                <div className="border-0 mb-3 block z-50 font-normal leading-normal text-sm text-left no-underline break-words rounded">
                                                                    <div className="py-1 px-2 text-center rounded text-white bg-black">
                                                                        Team 3
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <a
                                                            className="text-white bg-slate-500 inline-flex items-center justify-center shadow-lg rounded rounded-full relative border-2 border-white -ml-4 hover:z-1 w-8 h-8"
                                                            href="javascript:;"
                                                        >
                                                            <img
                                                                alt="..."
                                                                className="rounded-full w-full"
                                                                src="https://demos.creative-tim.com/notus-pro-react/static/media/team-4-470x470.4ef82ef4.png"
                                                            />
                                                            <div
                                                                className="hidden "
                                                                data-popper-placement="top"
                                                                style={{
                                                                    position: "absolute",
                                                                    inset: "auto auto 0px 0px",
                                                                    margin: 0,
                                                                    transform: "translate(688px, 1518px)"
                                                                }}
                                                                data-popper-escaped=""
                                                            >
                                                                <div className="border-0 mb-3 block z-50 font-normal leading-normal text-sm text-left no-underline break-words rounded">
                                                                    <div className="py-1 px-2 text-center rounded text-white bg-black">
                                                                        Team 4
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <small className="pl-2 font-bold mb-1" />
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 min-w-140-px">
                                            <div className="flex items-center">
                                                <span className="mr-2">100%</span>
                                                <div className="relative w-full">
                                                    <div className="overflow-hidden h-2 text-xs flex rounded bg-emerald-200">
                                                        <div
                                                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
                                                            style={{ width: "100%" }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 pb-6 pl-6 text-right">
                                            <div className="relative">
                                                <button className="inline-block outline-none focus:outline-none align-middle transition-all duration-150 ease-in-out uppercase border border-solid font-bold last:mr-0 mr-2  text-slate-800 bg-white border-white active:bg-slate-100 active:border-slate-100 text-xs px-3 py-2 shadow hover:shadow-md rounded-md">
                                                    <FontAwesomeIcon icon={faCog} className="mr-2 text-sm" />
                                                    <FontAwesomeIcon icon={faCaretDown} className="mr-2 text-sm" />
                                                </button>
                                                <div className="block  z-50">
                                                    <div className="origin-top-right bg-white text-base float-left p-2 border list-none text-left rounded-lg shadow-lg min-w-48 transition-all duration-100 ease-in transform opacity-0 scale-95 absolute ">
                                                        <a
                                                            href="javascript:;"
                                                            className="text-sm px-3 py-2 block w-full whitespace-nowrap bg-transparent hover:bg-slate-100 rounded transition-all duration-100"
                                                        >
                                                            Edit Profile
                                                        </a>
                                                        <a
                                                            href="javascript:;"
                                                            className="text-sm px-3 py-2 block w-full whitespace-nowrap bg-transparent hover:bg-slate-100 rounded transition-all duration-100"
                                                        >
                                                            Settings
                                                        </a>
                                                        <a
                                                            href="javascript:;"
                                                            className="text-sm px-3 py-2 block w-full whitespace-nowrap bg-transparent hover:bg-slate-100 rounded transition-all duration-100"
                                                        >
                                                            Log out
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <div className="flex items-center">
                                                <img
                                                    src="https://demos.creative-tim.com/notus-pro-react/static/media/sketch.a6af780a.jpg"
                                                    className="h-12 w-12 bg-white rounded-full border p-1"
                                                    alt="..."
                                                />{" "}
                                                <span className="ml-3 font-bold NaN">
                                                    Black Dashboard Sketch
                                                </span>
                                            </div>
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <div className="flex items-center">$3,150 USD</div>
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <div className="flex items-center">
                                                <i className="fas fa-circle mr-2 text-red-500" />
                                                delayed
                                            </div>
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <div className="flex items-center">
                                                <div className="flex items-center">
                                                    <div>
                                                        <a
                                                            className="text-white bg-slate-500 inline-flex items-center justify-center shadow-lg rounded rounded-full relative border-2 border-white -ml-4 hover:z-1 w-8 h-8"
                                                            href="javascript:;"
                                                        >
                                                            <img
                                                                alt="..."
                                                                className="rounded-full w-full"
                                                                src="https://demos.creative-tim.com/notus-pro-react/static/media/team-1-800x800.fa5a7ac2.jpg"
                                                            />
                                                            <div className="hidden ">
                                                                <div className="border-0 mb-3 block z-50 font-normal leading-normal text-sm text-left no-underline break-words rounded">
                                                                    <div className="py-1 px-2 text-center rounded text-white bg-black">
                                                                        Team 1
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <a
                                                            className="text-white bg-slate-500 inline-flex items-center justify-center shadow-lg rounded rounded-full relative border-2 border-white -ml-4 hover:z-1 w-8 h-8"
                                                            href="javascript:;"
                                                        >
                                                            <img
                                                                alt="..."
                                                                className="rounded-full w-full"
                                                                src="https://demos.creative-tim.com/notus-pro-react/static/media/team-2-800x800.2f02b23c.jpg"
                                                            />
                                                            <div className="hidden ">
                                                                <div className="border-0 mb-3 block z-50 font-normal leading-normal text-sm text-left no-underline break-words rounded">
                                                                    <div className="py-1 px-2 text-center rounded text-white bg-black">
                                                                        Team 2
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <a
                                                            className="text-white bg-slate-500 inline-flex items-center justify-center shadow-lg rounded rounded-full relative border-2 border-white -ml-4 hover:z-1 w-8 h-8"
                                                            href="javascript:;"
                                                        >
                                                            <img
                                                                alt="..."
                                                                className="rounded-full w-full"
                                                                src="https://demos.creative-tim.com/notus-pro-react/static/media/team-3-800x800.19201574.jpg"
                                                            />
                                                            <div className="hidden ">
                                                                <div className="border-0 mb-3 block z-50 font-normal leading-normal text-sm text-left no-underline break-words rounded">
                                                                    <div className="py-1 px-2 text-center rounded text-white bg-black">
                                                                        Team 3
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <a
                                                            className="text-white bg-slate-500 inline-flex items-center justify-center shadow-lg rounded rounded-full relative border-2 border-white -ml-4 hover:z-1 w-8 h-8"
                                                            href="javascript:;"
                                                        >
                                                            <img
                                                                alt="..."
                                                                className="rounded-full w-full"
                                                                src="https://demos.creative-tim.com/notus-pro-react/static/media/team-4-470x470.4ef82ef4.png"
                                                            />
                                                            <div
                                                                className="hidden "
                                                                data-popper-placement="top"
                                                                style={{
                                                                    position: "absolute",
                                                                    inset: "auto auto 0px 0px",
                                                                    margin: 0,
                                                                    transform: "translate(688px, 1518px)"
                                                                }}
                                                                data-popper-escaped=""
                                                            >
                                                                <div className="border-0 mb-3 block z-50 font-normal leading-normal text-sm text-left no-underline break-words rounded">
                                                                    <div className="py-1 px-2 text-center rounded text-white bg-black">
                                                                        Team 4
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <small className="pl-2 font-bold mb-1" />
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 min-w-140-px">
                                            <div className="flex items-center">
                                                <span className="mr-2">73%</span>
                                                <div className="relative w-full">
                                                    <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                                                        <div
                                                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                                                            style={{ width: "73%" }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 pb-6 pl-6 text-right">
                                            <div className="relative">
                                                <button className="inline-block outline-none focus:outline-none align-middle transition-all duration-150 ease-in-out uppercase border border-solid font-bold last:mr-0 mr-2  text-slate-800 bg-white border-white active:bg-slate-100 active:border-slate-100 text-xs px-3 py-2 shadow hover:shadow-md rounded-md">
                                                    <FontAwesomeIcon icon={faCog} className="mr-2 text-sm" />
                                                    <FontAwesomeIcon icon={faCaretDown} className="mr-2 text-sm" />
                                                </button>
                                                <div className="block  z-50">
                                                    <div className="origin-top-right bg-white text-base float-left p-2 border list-none text-left rounded-lg shadow-lg min-w-48 transition-all duration-100 ease-in transform opacity-0 scale-95 absolute ">
                                                        <a
                                                            href="javascript:;"
                                                            className="text-sm px-3 py-2 block w-full whitespace-nowrap bg-transparent hover:bg-slate-100 rounded transition-all duration-100"
                                                        >
                                                            Edit Profile
                                                        </a>
                                                        <a
                                                            href="javascript:;"
                                                            className="text-sm px-3 py-2 block w-full whitespace-nowrap bg-transparent hover:bg-slate-100 rounded transition-all duration-100"
                                                        >
                                                            Settings
                                                        </a>
                                                        <a
                                                            href="javascript:;"
                                                            className="text-sm px-3 py-2 block w-full whitespace-nowrap bg-transparent hover:bg-slate-100 rounded transition-all duration-100"
                                                        >
                                                            Log out
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <div className="flex items-center">
                                                <img
                                                    src="https://demos.creative-tim.com/notus-pro-react/static/media/react.0e8c9066.jpg"
                                                    className="h-12 w-12 bg-white rounded-full border p-1"
                                                    alt="..."
                                                />{" "}
                                                <span className="ml-3 font-bold NaN">
                                                    Material Dashboard
                                                </span>
                                            </div>
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <div className="flex items-center">$4,400 USD</div>
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <div className="flex items-center">
                                                <i className="fas fa-circle mr-2 text-red-500" />
                                                delayed
                                            </div>
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <div className="flex items-center">
                                                <div className="flex items-center">
                                                    <div>
                                                        <a
                                                            className="text-white bg-slate-500 inline-flex items-center justify-center shadow-lg rounded rounded-full relative border-2 border-white -ml-4 hover:z-1 w-8 h-8"
                                                            href="javascript:;"
                                                        >
                                                            <img
                                                                alt="..."
                                                                className="rounded-full w-full"
                                                                src="https://demos.creative-tim.com/notus-pro-react/static/media/team-1-800x800.fa5a7ac2.jpg"
                                                            />
                                                            <div className="hidden ">
                                                                <div className="border-0 mb-3 block z-50 font-normal leading-normal text-sm text-left no-underline break-words rounded">
                                                                    <div className="py-1 px-2 text-center rounded text-white bg-black">
                                                                        Team 1
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <a
                                                            className="text-white bg-slate-500 inline-flex items-center justify-center shadow-lg rounded rounded-full relative border-2 border-white -ml-4 hover:z-1 w-8 h-8"
                                                            href="javascript:;"
                                                        >
                                                            <img
                                                                alt="..."
                                                                className="rounded-full w-full"
                                                                src="https://demos.creative-tim.com/notus-pro-react/static/media/team-2-800x800.2f02b23c.jpg"
                                                            />
                                                            <div className="hidden ">
                                                                <div className="border-0 mb-3 block z-50 font-normal leading-normal text-sm text-left no-underline break-words rounded">
                                                                    <div className="py-1 px-2 text-center rounded text-white bg-black">
                                                                        Team 2
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <a
                                                            className="text-white bg-slate-500 inline-flex items-center justify-center shadow-lg rounded rounded-full relative border-2 border-white -ml-4 hover:z-1 w-8 h-8"
                                                            href="javascript:;"
                                                        >
                                                            <img
                                                                alt="..."
                                                                className="rounded-full w-full"
                                                                src="https://demos.creative-tim.com/notus-pro-react/static/media/team-3-800x800.19201574.jpg"
                                                            />
                                                            <div className="hidden ">
                                                                <div className="border-0 mb-3 block z-50 font-normal leading-normal text-sm text-left no-underline break-words rounded">
                                                                    <div className="py-1 px-2 text-center rounded text-white bg-black">
                                                                        Team 3
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <a
                                                            className="text-white bg-slate-500 inline-flex items-center justify-center shadow-lg rounded rounded-full relative border-2 border-white -ml-4 hover:z-1 w-8 h-8"
                                                            href="javascript:;"
                                                        >
                                                            <img
                                                                alt="..."
                                                                className="rounded-full w-full"
                                                                src="https://demos.creative-tim.com/notus-pro-react/static/media/team-4-470x470.4ef82ef4.png"
                                                            />
                                                            <div
                                                                className="hidden "
                                                                data-popper-placement="top"
                                                                style={{
                                                                    position: "absolute",
                                                                    inset: "auto auto 0px 0px",
                                                                    margin: 0,
                                                                    transform: "translate(688px, 1518px)"
                                                                }}
                                                                data-popper-escaped=""
                                                            >
                                                                <div className="border-0 mb-3 block z-50 font-normal leading-normal text-sm text-left no-underline break-words rounded">
                                                                    <div className="py-1 px-2 text-center rounded text-white bg-black">
                                                                        Team 4
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <small className="pl-2 font-bold mb-1" />
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 min-w-140-px">
                                            <div className="flex items-center">
                                                <span className="mr-2">90%</span>
                                                <div className="relative w-full">
                                                    <div className="overflow-hidden h-2 text-xs flex rounded bg-teal-200">
                                                        <div
                                                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500"
                                                            style={{ width: "90%" }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 pb-6 pl-6 text-right">
                                            <div className="relative">
                                                <button className="inline-block outline-none focus:outline-none align-middle transition-all duration-150 ease-in-out uppercase border border-solid font-bold last:mr-0 mr-2  text-slate-800 bg-white border-white active:bg-slate-100 active:border-slate-100 text-xs px-3 py-2 shadow hover:shadow-md rounded-md">
                                                    <FontAwesomeIcon icon={faCog} className="mr-2 text-sm" />
                                                    <FontAwesomeIcon icon={faCaretDown} className="mr-2 text-sm" />
                                                </button>
                                                <div className="block  z-50">
                                                    <div className="origin-top-right bg-white text-base float-left p-2 border list-none text-left rounded-lg shadow-lg min-w-48 transition-all duration-100 ease-in transform opacity-0 scale-95 absolute ">
                                                        <a
                                                            href="javascript:;"
                                                            className="text-sm px-3 py-2 block w-full whitespace-nowrap bg-transparent hover:bg-slate-100 rounded transition-all duration-100"
                                                        >
                                                            Edit Profile
                                                        </a>
                                                        <a
                                                            href="javascript:;"
                                                            className="text-sm px-3 py-2 block w-full whitespace-nowrap bg-transparent hover:bg-slate-100 rounded transition-all duration-100"
                                                        >
                                                            Settings
                                                        </a>
                                                        <a
                                                            href="javascript:;"
                                                            className="text-sm px-3 py-2 block w-full whitespace-nowrap bg-transparent hover:bg-slate-100 rounded transition-all duration-100"
                                                        >
                                                            Log out
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <div className="flex items-center">
                                                <img
                                                    src="https://demos.creative-tim.com/notus-pro-react/static/media/vue.43bd93a8.jpg"
                                                    className="h-12 w-12 bg-white rounded-full border p-1"
                                                    alt="..."
                                                />{" "}
                                                <span className="ml-3 font-bold NaN">
                                                    Vue Material Dashboard
                                                </span>
                                            </div>
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <div className="flex items-center">$2,200 USD</div>
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <div className="flex items-center">
                                                <i className="fas fa-circle mr-2 text-emerald-500" />
                                                completed
                                            </div>
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <div className="flex items-center">
                                                <div className="flex items-center">
                                                    <div>
                                                        <a
                                                            className="text-white bg-slate-500 inline-flex items-center justify-center shadow-lg rounded rounded-full relative border-2 border-white -ml-4 hover:z-1 w-8 h-8"
                                                            href="javascript:;"
                                                        >
                                                            <img
                                                                alt="..."
                                                                className="rounded-full w-full"
                                                                src="https://demos.creative-tim.com/notus-pro-react/static/media/team-1-800x800.fa5a7ac2.jpg"
                                                            />
                                                            <div className="hidden ">
                                                                <div className="border-0 mb-3 block z-50 font-normal leading-normal text-sm text-left no-underline break-words rounded">
                                                                    <div className="py-1 px-2 text-center rounded text-white bg-black">
                                                                        Team 1
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <a
                                                            className="text-white bg-slate-500 inline-flex items-center justify-center shadow-lg rounded rounded-full relative border-2 border-white -ml-4 hover:z-1 w-8 h-8"
                                                            href="javascript:;"
                                                        >
                                                            <img
                                                                alt="..."
                                                                className="rounded-full w-full"
                                                                src="https://demos.creative-tim.com/notus-pro-react/static/media/team-2-800x800.2f02b23c.jpg"
                                                            />
                                                            <div className="hidden ">
                                                                <div className="border-0 mb-3 block z-50 font-normal leading-normal text-sm text-left no-underline break-words rounded">
                                                                    <div className="py-1 px-2 text-center rounded text-white bg-black">
                                                                        Team 2
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <a
                                                            className="text-white bg-slate-500 inline-flex items-center justify-center shadow-lg rounded rounded-full relative border-2 border-white -ml-4 hover:z-1 w-8 h-8"
                                                            href="javascript:;"
                                                        >
                                                            <img
                                                                alt="..."
                                                                className="rounded-full w-full"
                                                                src="https://demos.creative-tim.com/notus-pro-react/static/media/team-3-800x800.19201574.jpg"
                                                            />
                                                            <div className="hidden ">
                                                                <div className="border-0 mb-3 block z-50 font-normal leading-normal text-sm text-left no-underline break-words rounded">
                                                                    <div className="py-1 px-2 text-center rounded text-white bg-black">
                                                                        Team 3
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <a
                                                            className="text-white bg-slate-500 inline-flex items-center justify-center shadow-lg rounded rounded-full relative border-2 border-white -ml-4 hover:z-1 w-8 h-8"
                                                            href="javascript:;"
                                                        >
                                                            <img
                                                                alt="..."
                                                                className="rounded-full w-full"
                                                                src="https://demos.creative-tim.com/notus-pro-react/static/media/team-4-470x470.4ef82ef4.png"
                                                            />
                                                            <div
                                                                className="hidden "
                                                                data-popper-placement="top"
                                                                style={{
                                                                    position: "absolute",
                                                                    inset: "auto auto 0px 0px",
                                                                    margin: 0,
                                                                    transform: "translate(688px, 1518px)"
                                                                }}
                                                                data-popper-escaped=""
                                                            >
                                                                <div className="border-0 mb-3 block z-50 font-normal leading-normal text-sm text-left no-underline break-words rounded">
                                                                    <div className="py-1 px-2 text-center rounded text-white bg-black">
                                                                        Team 4
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <small className="pl-2 font-bold mb-1" />
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 min-w-140-px">
                                            <div className="flex items-center">
                                                <span className="mr-2">100%</span>
                                                <div className="relative w-full">
                                                    <div className="overflow-hidden h-2 text-xs flex rounded bg-emerald-200">
                                                        <div
                                                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
                                                            style={{ width: "100%" }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 pb-6 pl-6 text-right">
                                            <div className="relative">
                                                <button className="inline-block outline-none focus:outline-none align-middle transition-all duration-150 ease-in-out uppercase border border-solid font-bold last:mr-0 mr-2  text-slate-800 bg-white border-white active:bg-slate-100 active:border-slate-100 text-xs px-3 py-2 shadow hover:shadow-md rounded-md">
                                                    <FontAwesomeIcon icon={faCog} className="mr-2 text-sm" />
                                                    <FontAwesomeIcon icon={faCaretDown} className="mr-2 text-sm" />
                                                </button>
                                                <div className="block  z-50">
                                                    <div className="origin-top-right bg-white text-base float-left p-2 border list-none text-left rounded-lg shadow-lg min-w-48 transition-all duration-100 ease-in transform opacity-0 scale-95 absolute ">
                                                        <a
                                                            href="javascript:;"
                                                            className="text-sm px-3 py-2 block w-full whitespace-nowrap bg-transparent hover:bg-slate-100 rounded transition-all duration-100"
                                                        >
                                                            Edit Profile
                                                        </a>
                                                        <a
                                                            href="javascript:;"
                                                            className="text-sm px-3 py-2 block w-full whitespace-nowrap bg-transparent hover:bg-slate-100 rounded transition-all duration-100"
                                                        >
                                                            Settings
                                                        </a>
                                                        <a
                                                            href="javascript:;"
                                                            className="text-sm px-3 py-2 block w-full whitespace-nowrap bg-transparent hover:bg-slate-100 rounded transition-all duration-100"
                                                        >
                                                            Log out
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="w-full px-4">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-8 shadow-lg rounded-lg bg-slate-900 text-white">
                        <div className="px-6 py-4 border-0">
                            <div className="flex flex-wrap items-center">
                                <div className="relative w-full max-w-full flex-grow flex-1">
                                    <h3 className="font-bold text-lg text-white">Card Tables</h3>
                                </div>
                            </div>
                        </div>
                        <div className="block w-full overflow-x-auto">
                            <table className="items-center w-full bg-transparent border-collapse">
                                <thead>
                                    <tr>
                                        <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left bg-slate-800 text-slate-300 border-slate-700">
                                            Player Name
                                        </th>
                                        <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left bg-slate-800 text-slate-300 border-slate-700">
                                            Balance
                                        </th>
                                        <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left bg-slate-800 text-slate-300 border-slate-700">
                                            Owner
                                        </th>
                                        <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left bg-slate-800 text-slate-300 border-slate-700">
                                            Players
                                        </th>
                                        <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left bg-slate-800 text-slate-300 border-slate-700">
                                            Completion
                                        </th>
                                        <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left bg-slate-800 text-slate-300 border-slate-700" />
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <div className="flex items-center">
                                                <img
                                                    src="https://demos.creative-tim.com/notus-pro-react/static/media/bootstrap.bd712487.jpg"
                                                    className="h-12 w-12 bg-white rounded-full border p-1"
                                                    alt="..."
                                                />{" "}
                                                <span className="ml-3 font-bold NaN">
                                                    Argon Design System
                                                </span>
                                            </div>
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <div className="flex items-center">$2,500 USD</div>
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <div className="flex items-center">
                                                <i className="fas fa-circle mr-2 text-orange-500" />
                                                pending
                                            </div>
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <div className="flex items-center">
                                                <div className="flex items-center">
                                                    <div>
                                                        <a
                                                            className="text-white bg-slate-500 inline-flex items-center justify-center shadow-lg rounded rounded-full relative border-2 border-white -ml-4 hover:z-1 w-8 h-8"
                                                            href="javascript:;"
                                                        >
                                                            <img
                                                                alt="..."
                                                                className="rounded-full w-full"
                                                                src="https://demos.creative-tim.com/notus-pro-react/static/media/team-1-800x800.fa5a7ac2.jpg"
                                                            />
                                                            <div className="hidden ">
                                                                <div className="border-0 mb-3 block z-50 font-normal leading-normal text-sm text-left no-underline break-words rounded">
                                                                    <div className="py-1 px-2 text-center rounded text-white bg-black">
                                                                        Team 1
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <a
                                                            className="text-white bg-slate-500 inline-flex items-center justify-center shadow-lg rounded rounded-full relative border-2 border-white -ml-4 hover:z-1 w-8 h-8"
                                                            href="javascript:;"
                                                        >
                                                            <img
                                                                alt="..."
                                                                className="rounded-full w-full"
                                                                src="https://demos.creative-tim.com/notus-pro-react/static/media/team-2-800x800.2f02b23c.jpg"
                                                            />
                                                            <div className="hidden ">
                                                                <div className="border-0 mb-3 block z-50 font-normal leading-normal text-sm text-left no-underline break-words rounded">
                                                                    <div className="py-1 px-2 text-center rounded text-white bg-black">
                                                                        Team 2
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <a
                                                            className="text-white bg-slate-500 inline-flex items-center justify-center shadow-lg rounded rounded-full relative border-2 border-white -ml-4 hover:z-1 w-8 h-8"
                                                            href="javascript:;"
                                                        >
                                                            <img
                                                                alt="..."
                                                                className="rounded-full w-full"
                                                                src="https://demos.creative-tim.com/notus-pro-react/static/media/team-3-800x800.19201574.jpg"
                                                            />
                                                            <div className="hidden ">
                                                                <div className="border-0 mb-3 block z-50 font-normal leading-normal text-sm text-left no-underline break-words rounded">
                                                                    <div className="py-1 px-2 text-center rounded text-white bg-black">
                                                                        Team 3
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <a
                                                            className="text-white bg-slate-500 inline-flex items-center justify-center shadow-lg rounded rounded-full relative border-2 border-white -ml-4 hover:z-1 w-8 h-8"
                                                            href="javascript:;"
                                                        >
                                                            <img
                                                                alt="..."
                                                                className="rounded-full w-full"
                                                                src="https://demos.creative-tim.com/notus-pro-react/static/media/team-4-470x470.4ef82ef4.png"
                                                            />
                                                            <div className="hidden ">
                                                                <div className="border-0 mb-3 block z-50 font-normal leading-normal text-sm text-left no-underline break-words rounded">
                                                                    <div className="py-1 px-2 text-center rounded text-white bg-black">
                                                                        Team 4
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <small className="pl-2 font-bold mb-1" />
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 min-w-140-px">
                                            <div className="flex items-center">
                                                <span className="mr-2">60%</span>
                                                <div className="relative w-full">
                                                    <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                                                        <div
                                                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                                                            style={{ width: "60%" }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 pb-6 pl-6 text-right">
                                            <div className="relative">
                                                <button className="inline-block outline-none focus:outline-none align-middle transition-all duration-150 ease-in-out uppercase border border-solid font-bold last:mr-0 mr-2  text-slate-800 bg-white border-white active:bg-slate-100 active:border-slate-100 text-xs px-3 py-2 shadow hover:shadow-md rounded-md">
                                                    <FontAwesomeIcon icon={faCog} className="mr-2 text-sm" />
                                                    <FontAwesomeIcon icon={faCaretDown} className="mr-2 text-sm" />
                                                </button>
                                                <div className="block  z-50">
                                                    <div className="origin-top-right bg-white text-base float-left p-2 border list-none text-left rounded-lg shadow-lg min-w-48 transition-all duration-100 ease-in transform opacity-0 scale-95 absolute ">
                                                        <a
                                                            href="javascript:;"
                                                            className="text-sm px-3 py-2 block w-full whitespace-nowrap bg-transparent hover:bg-slate-100 rounded transition-all duration-100"
                                                        >
                                                            Edit Profile
                                                        </a>
                                                        <a
                                                            href="javascript:;"
                                                            className="text-sm px-3 py-2 block w-full whitespace-nowrap bg-transparent hover:bg-slate-100 rounded transition-all duration-100"
                                                        >
                                                            Settings
                                                        </a>
                                                        <a
                                                            href="javascript:;"
                                                            className="text-sm px-3 py-2 block w-full whitespace-nowrap bg-transparent hover:bg-slate-100 rounded transition-all duration-100"
                                                        >
                                                            Log out
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <div className="flex items-center">
                                                <img
                                                    src="https://demos.creative-tim.com/notus-pro-react/static/media/angular.b5045666.jpg"
                                                    className="h-12 w-12 bg-white rounded-full border p-1"
                                                    alt="..."
                                                />{" "}
                                                <span className="ml-3 font-bold NaN">
                                                    Angular Now UI Kit PRO
                                                </span>
                                            </div>
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <div className="flex items-center">$1,800 USD</div>
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <div className="flex items-center">
                                                <i className="fas fa-circle mr-2 text-emerald-500" />
                                                completed
                                            </div>
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <div className="flex items-center">
                                                <div className="flex items-center">
                                                    <div>
                                                        <a
                                                            className="text-white bg-slate-500 inline-flex items-center justify-center shadow-lg rounded rounded-full relative border-2 border-white -ml-4 hover:z-1 w-8 h-8"
                                                            href="javascript:;"
                                                        >
                                                            <img
                                                                alt="..."
                                                                className="rounded-full w-full"
                                                                src="https://demos.creative-tim.com/notus-pro-react/static/media/team-1-800x800.fa5a7ac2.jpg"
                                                            />
                                                            <div className="hidden ">
                                                                <div className="border-0 mb-3 block z-50 font-normal leading-normal text-sm text-left no-underline break-words rounded">
                                                                    <div className="py-1 px-2 text-center rounded text-white bg-black">
                                                                        Team 1
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <a
                                                            className="text-white bg-slate-500 inline-flex items-center justify-center shadow-lg rounded rounded-full relative border-2 border-white -ml-4 hover:z-1 w-8 h-8"
                                                            href="javascript:;"
                                                        >
                                                            <img
                                                                alt="..."
                                                                className="rounded-full w-full"
                                                                src="https://demos.creative-tim.com/notus-pro-react/static/media/team-2-800x800.2f02b23c.jpg"
                                                            />
                                                            <div className="hidden ">
                                                                <div className="border-0 mb-3 block z-50 font-normal leading-normal text-sm text-left no-underline break-words rounded">
                                                                    <div className="py-1 px-2 text-center rounded text-white bg-black">
                                                                        Team 2
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <a
                                                            className="text-white bg-slate-500 inline-flex items-center justify-center shadow-lg rounded rounded-full relative border-2 border-white -ml-4 hover:z-1 w-8 h-8"
                                                            href="javascript:;"
                                                        >
                                                            <img
                                                                alt="..."
                                                                className="rounded-full w-full"
                                                                src="https://demos.creative-tim.com/notus-pro-react/static/media/team-3-800x800.19201574.jpg"
                                                            />
                                                            <div className="hidden ">
                                                                <div className="border-0 mb-3 block z-50 font-normal leading-normal text-sm text-left no-underline break-words rounded">
                                                                    <div className="py-1 px-2 text-center rounded text-white bg-black">
                                                                        Team 3
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <a
                                                            className="text-white bg-slate-500 inline-flex items-center justify-center shadow-lg rounded rounded-full relative border-2 border-white -ml-4 hover:z-1 w-8 h-8"
                                                            href="javascript:;"
                                                        >
                                                            <img
                                                                alt="..."
                                                                className="rounded-full w-full"
                                                                src="https://demos.creative-tim.com/notus-pro-react/static/media/team-4-470x470.4ef82ef4.png"
                                                            />
                                                            <div className="hidden ">
                                                                <div className="border-0 mb-3 block z-50 font-normal leading-normal text-sm text-left no-underline break-words rounded">
                                                                    <div className="py-1 px-2 text-center rounded text-white bg-black">
                                                                        Team 4
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <small className="pl-2 font-bold mb-1" />
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 min-w-140-px">
                                            <div className="flex items-center">
                                                <span className="mr-2">100%</span>
                                                <div className="relative w-full">
                                                    <div className="overflow-hidden h-2 text-xs flex rounded bg-emerald-200">
                                                        <div
                                                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
                                                            style={{ width: "100%" }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 pb-6 pl-6 text-right">
                                            <div className="relative">
                                                <button className="inline-block outline-none focus:outline-none align-middle transition-all duration-150 ease-in-out uppercase border border-solid font-bold last:mr-0 mr-2  text-slate-800 bg-white border-white active:bg-slate-100 active:border-slate-100 text-xs px-3 py-2 shadow hover:shadow-md rounded-md">
                                                    <FontAwesomeIcon icon={faCog} className="mr-2 text-sm" />
                                                    <FontAwesomeIcon icon={faCaretDown} className="mr-2 text-sm" />
                                                </button>
                                                <div className="block  z-50">
                                                    <div className="origin-top-right bg-white text-base float-left p-2 border list-none text-left rounded-lg shadow-lg min-w-48 transition-all duration-100 ease-in transform opacity-0 scale-95 absolute ">
                                                        <a
                                                            href="javascript:;"
                                                            className="text-sm px-3 py-2 block w-full whitespace-nowrap bg-transparent hover:bg-slate-100 rounded transition-all duration-100"
                                                        >
                                                            Edit Profile
                                                        </a>
                                                        <a
                                                            href="javascript:;"
                                                            className="text-sm px-3 py-2 block w-full whitespace-nowrap bg-transparent hover:bg-slate-100 rounded transition-all duration-100"
                                                        >
                                                            Settings
                                                        </a>
                                                        <a
                                                            href="javascript:;"
                                                            className="text-sm px-3 py-2 block w-full whitespace-nowrap bg-transparent hover:bg-slate-100 rounded transition-all duration-100"
                                                        >
                                                            Log out
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <div className="flex items-center">
                                                <img
                                                    src="https://demos.creative-tim.com/notus-pro-react/static/media/sketch.a6af780a.jpg"
                                                    className="h-12 w-12 bg-white rounded-full border p-1"
                                                    alt="..."
                                                />{" "}
                                                <span className="ml-3 font-bold NaN">
                                                    Black Dashboard Sketch
                                                </span>
                                            </div>
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <div className="flex items-center">$3,150 USD</div>
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <div className="flex items-center">
                                                <i className="fas fa-circle mr-2 text-red-500" />
                                                delayed
                                            </div>
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <div className="flex items-center">
                                                <div className="flex items-center">
                                                    <div>
                                                        <a
                                                            className="text-white bg-slate-500 inline-flex items-center justify-center shadow-lg rounded rounded-full relative border-2 border-white -ml-4 hover:z-1 w-8 h-8"
                                                            href="javascript:;"
                                                        >
                                                            <img
                                                                alt="..."
                                                                className="rounded-full w-full"
                                                                src="https://demos.creative-tim.com/notus-pro-react/static/media/team-1-800x800.fa5a7ac2.jpg"
                                                            />
                                                            <div className="hidden ">
                                                                <div className="border-0 mb-3 block z-50 font-normal leading-normal text-sm text-left no-underline break-words rounded">
                                                                    <div className="py-1 px-2 text-center rounded text-white bg-black">
                                                                        Team 1
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <a
                                                            className="text-white bg-slate-500 inline-flex items-center justify-center shadow-lg rounded rounded-full relative border-2 border-white -ml-4 hover:z-1 w-8 h-8"
                                                            href="javascript:;"
                                                        >
                                                            <img
                                                                alt="..."
                                                                className="rounded-full w-full"
                                                                src="https://demos.creative-tim.com/notus-pro-react/static/media/team-2-800x800.2f02b23c.jpg"
                                                            />
                                                            <div className="hidden ">
                                                                <div className="border-0 mb-3 block z-50 font-normal leading-normal text-sm text-left no-underline break-words rounded">
                                                                    <div className="py-1 px-2 text-center rounded text-white bg-black">
                                                                        Team 2
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <a
                                                            className="text-white bg-slate-500 inline-flex items-center justify-center shadow-lg rounded rounded-full relative border-2 border-white -ml-4 hover:z-1 w-8 h-8"
                                                            href="javascript:;"
                                                        >
                                                            <img
                                                                alt="..."
                                                                className="rounded-full w-full"
                                                                src="https://demos.creative-tim.com/notus-pro-react/static/media/team-3-800x800.19201574.jpg"
                                                            />
                                                            <div className="hidden ">
                                                                <div className="border-0 mb-3 block z-50 font-normal leading-normal text-sm text-left no-underline break-words rounded">
                                                                    <div className="py-1 px-2 text-center rounded text-white bg-black">
                                                                        Team 3
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <a
                                                            className="text-white bg-slate-500 inline-flex items-center justify-center shadow-lg rounded rounded-full relative border-2 border-white -ml-4 hover:z-1 w-8 h-8"
                                                            href="javascript:;"
                                                        >
                                                            <img
                                                                alt="..."
                                                                className="rounded-full w-full"
                                                                src="https://demos.creative-tim.com/notus-pro-react/static/media/team-4-470x470.4ef82ef4.png"
                                                            />
                                                            <div className="hidden ">
                                                                <div className="border-0 mb-3 block z-50 font-normal leading-normal text-sm text-left no-underline break-words rounded">
                                                                    <div className="py-1 px-2 text-center rounded text-white bg-black">
                                                                        Team 4
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <small className="pl-2 font-bold mb-1" />
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 min-w-140-px">
                                            <div className="flex items-center">
                                                <span className="mr-2">73%</span>
                                                <div className="relative w-full">
                                                    <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                                                        <div
                                                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                                                            style={{ width: "73%" }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 pb-6 pl-6 text-right">
                                            <div className="relative">
                                                <button className="inline-block outline-none focus:outline-none align-middle transition-all duration-150 ease-in-out uppercase border border-solid font-bold last:mr-0 mr-2  text-slate-800 bg-white border-white active:bg-slate-100 active:border-slate-100 text-xs px-3 py-2 shadow hover:shadow-md rounded-md">
                                                    <FontAwesomeIcon icon={faCog} className="mr-2 text-sm" />
                                                    <FontAwesomeIcon icon={faCaretDown} className="mr-2 text-sm" />
                                                </button>
                                                <div className="block  z-50">
                                                    <div className="origin-top-right bg-white text-base float-left p-2 border list-none text-left rounded-lg shadow-lg min-w-48 transition-all duration-100 ease-in transform opacity-0 scale-95 absolute ">
                                                        <a
                                                            href="javascript:;"
                                                            className="text-sm px-3 py-2 block w-full whitespace-nowrap bg-transparent hover:bg-slate-100 rounded transition-all duration-100"
                                                        >
                                                            Edit Profile
                                                        </a>
                                                        <a
                                                            href="javascript:;"
                                                            className="text-sm px-3 py-2 block w-full whitespace-nowrap bg-transparent hover:bg-slate-100 rounded transition-all duration-100"
                                                        >
                                                            Settings
                                                        </a>
                                                        <a
                                                            href="javascript:;"
                                                            className="text-sm px-3 py-2 block w-full whitespace-nowrap bg-transparent hover:bg-slate-100 rounded transition-all duration-100"
                                                        >
                                                            Log out
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <div className="flex items-center">
                                                <img
                                                    src="https://demos.creative-tim.com/notus-pro-react/static/media/react.0e8c9066.jpg"
                                                    className="h-12 w-12 bg-white rounded-full border p-1"
                                                    alt="..."
                                                />{" "}
                                                <span className="ml-3 font-bold NaN">
                                                    Material Dashboard
                                                </span>
                                            </div>
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <div className="flex items-center">$4,400 USD</div>
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <div className="flex items-center">
                                                <i className="fas fa-circle mr-2 text-red-500" />
                                                delayed
                                            </div>
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <div className="flex items-center">
                                                <div className="flex items-center">
                                                    <div>
                                                        <a
                                                            className="text-white bg-slate-500 inline-flex items-center justify-center shadow-lg rounded rounded-full relative border-2 border-white -ml-4 hover:z-1 w-8 h-8"
                                                            href="javascript:;"
                                                        >
                                                            <img
                                                                alt="..."
                                                                className="rounded-full w-full"
                                                                src="https://demos.creative-tim.com/notus-pro-react/static/media/team-1-800x800.fa5a7ac2.jpg"
                                                            />
                                                            <div className="hidden ">
                                                                <div className="border-0 mb-3 block z-50 font-normal leading-normal text-sm text-left no-underline break-words rounded">
                                                                    <div className="py-1 px-2 text-center rounded text-white bg-black">
                                                                        Team 1
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <a
                                                            className="text-white bg-slate-500 inline-flex items-center justify-center shadow-lg rounded rounded-full relative border-2 border-white -ml-4 hover:z-1 w-8 h-8"
                                                            href="javascript:;"
                                                        >
                                                            <img
                                                                alt="..."
                                                                className="rounded-full w-full"
                                                                src="https://demos.creative-tim.com/notus-pro-react/static/media/team-2-800x800.2f02b23c.jpg"
                                                            />
                                                            <div className="hidden ">
                                                                <div className="border-0 mb-3 block z-50 font-normal leading-normal text-sm text-left no-underline break-words rounded">
                                                                    <div className="py-1 px-2 text-center rounded text-white bg-black">
                                                                        Team 2
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <a
                                                            className="text-white bg-slate-500 inline-flex items-center justify-center shadow-lg rounded rounded-full relative border-2 border-white -ml-4 hover:z-1 w-8 h-8"
                                                            href="javascript:;"
                                                        >
                                                            <img
                                                                alt="..."
                                                                className="rounded-full w-full"
                                                                src="https://demos.creative-tim.com/notus-pro-react/static/media/team-3-800x800.19201574.jpg"
                                                            />
                                                            <div className="hidden ">
                                                                <div className="border-0 mb-3 block z-50 font-normal leading-normal text-sm text-left no-underline break-words rounded">
                                                                    <div className="py-1 px-2 text-center rounded text-white bg-black">
                                                                        Team 3
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <a
                                                            className="text-white bg-slate-500 inline-flex items-center justify-center shadow-lg rounded rounded-full relative border-2 border-white -ml-4 hover:z-1 w-8 h-8"
                                                            href="javascript:;"
                                                        >
                                                            <img
                                                                alt="..."
                                                                className="rounded-full w-full"
                                                                src="https://demos.creative-tim.com/notus-pro-react/static/media/team-4-470x470.4ef82ef4.png"
                                                            />
                                                            <div className="hidden ">
                                                                <div className="border-0 mb-3 block z-50 font-normal leading-normal text-sm text-left no-underline break-words rounded">
                                                                    <div className="py-1 px-2 text-center rounded text-white bg-black">
                                                                        Team 4
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <small className="pl-2 font-bold mb-1" />
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 min-w-140-px">
                                            <div className="flex items-center">
                                                <span className="mr-2">90%</span>
                                                <div className="relative w-full">
                                                    <div className="overflow-hidden h-2 text-xs flex rounded bg-teal-200">
                                                        <div
                                                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500"
                                                            style={{ width: "90%" }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 pb-6 pl-6 text-right">
                                            <div className="relative">
                                                <button className="inline-block outline-none focus:outline-none align-middle transition-all duration-150 ease-in-out uppercase border border-solid font-bold last:mr-0 mr-2  text-slate-800 bg-white border-white active:bg-slate-100 active:border-slate-100 text-xs px-3 py-2 shadow hover:shadow-md rounded-md">
                                                    <FontAwesomeIcon icon={faCog} className="mr-2 text-sm" />
                                                    <FontAwesomeIcon icon={faCaretDown} className="mr-2 text-sm" />
                                                </button>
                                                <div className="block  z-50">
                                                    <div className="origin-top-right bg-white text-base float-left p-2 border list-none text-left rounded-lg shadow-lg min-w-48 transition-all duration-100 ease-in transform opacity-0 scale-95 absolute ">
                                                        <a
                                                            href="javascript:;"
                                                            className="text-sm px-3 py-2 block w-full whitespace-nowrap bg-transparent hover:bg-slate-100 rounded transition-all duration-100"
                                                        >
                                                            Edit Profile
                                                        </a>
                                                        <a
                                                            href="javascript:;"
                                                            className="text-sm px-3 py-2 block w-full whitespace-nowrap bg-transparent hover:bg-slate-100 rounded transition-all duration-100"
                                                        >
                                                            Settings
                                                        </a>
                                                        <a
                                                            href="javascript:;"
                                                            className="text-sm px-3 py-2 block w-full whitespace-nowrap bg-transparent hover:bg-slate-100 rounded transition-all duration-100"
                                                        >
                                                            Log out
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <div className="flex items-center">
                                                <img
                                                    src="https://demos.creative-tim.com/notus-pro-react/static/media/vue.43bd93a8.jpg"
                                                    className="h-12 w-12 bg-white rounded-full border p-1"
                                                    alt="..."
                                                />{" "}
                                                <span className="ml-3 font-bold NaN">
                                                    Vue Material Dashboard
                                                </span>
                                            </div>
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <div className="flex items-center">$2,200 USD</div>
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <div className="flex items-center">
                                                <i className="fas fa-circle mr-2 text-emerald-500" />
                                                completed
                                            </div>
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <div className="flex items-center">
                                                <div className="flex items-center">
                                                    <div>
                                                        <a
                                                            className="text-white bg-slate-500 inline-flex items-center justify-center shadow-lg rounded rounded-full relative border-2 border-white -ml-4 hover:z-1 w-8 h-8"
                                                            href="javascript:;"
                                                        >
                                                            <img
                                                                alt="..."
                                                                className="rounded-full w-full"
                                                                src="https://demos.creative-tim.com/notus-pro-react/static/media/team-1-800x800.fa5a7ac2.jpg"
                                                            />
                                                            <div className="hidden ">
                                                                <div className="border-0 mb-3 block z-50 font-normal leading-normal text-sm text-left no-underline break-words rounded">
                                                                    <div className="py-1 px-2 text-center rounded text-white bg-black">
                                                                        Team 1
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <a
                                                            className="text-white bg-slate-500 inline-flex items-center justify-center shadow-lg rounded rounded-full relative border-2 border-white -ml-4 hover:z-1 w-8 h-8"
                                                            href="javascript:;"
                                                        >
                                                            <img
                                                                alt="..."
                                                                className="rounded-full w-full"
                                                                src="https://demos.creative-tim.com/notus-pro-react/static/media/team-2-800x800.2f02b23c.jpg"
                                                            />
                                                            <div className="hidden ">
                                                                <div className="border-0 mb-3 block z-50 font-normal leading-normal text-sm text-left no-underline break-words rounded">
                                                                    <div className="py-1 px-2 text-center rounded text-white bg-black">
                                                                        Team 2
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <a
                                                            className="text-white bg-slate-500 inline-flex items-center justify-center shadow-lg rounded rounded-full relative border-2 border-white -ml-4 hover:z-1 w-8 h-8"
                                                            href="javascript:;"
                                                        >
                                                            <img
                                                                alt="..."
                                                                className="rounded-full w-full"
                                                                src="https://demos.creative-tim.com/notus-pro-react/static/media/team-3-800x800.19201574.jpg"
                                                            />
                                                            <div className="hidden ">
                                                                <div className="border-0 mb-3 block z-50 font-normal leading-normal text-sm text-left no-underline break-words rounded">
                                                                    <div className="py-1 px-2 text-center rounded text-white bg-black">
                                                                        Team 3
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <a
                                                            className="text-white bg-slate-500 inline-flex items-center justify-center shadow-lg rounded rounded-full relative border-2 border-white -ml-4 hover:z-1 w-8 h-8"
                                                            href="javascript:;"
                                                        >
                                                            <img
                                                                alt="..."
                                                                className="rounded-full w-full"
                                                                src="https://demos.creative-tim.com/notus-pro-react/static/media/team-4-470x470.4ef82ef4.png"
                                                            />
                                                            <div className="hidden ">
                                                                <div className="border-0 mb-3 block z-50 font-normal leading-normal text-sm text-left no-underline break-words rounded">
                                                                    <div className="py-1 px-2 text-center rounded text-white bg-black">
                                                                        Team 4
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <small className="pl-2 font-bold mb-1" />
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 min-w-140-px">
                                            <div className="flex items-center">
                                                <span className="mr-2">100%</span>
                                                <div className="relative w-full">
                                                    <div className="overflow-hidden h-2 text-xs flex rounded bg-emerald-200">
                                                        <div
                                                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
                                                            style={{ width: "100%" }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 pb-6 pl-6 text-right">
                                            <div className="relative">
                                                <button className="inline-block outline-none focus:outline-none align-middle transition-all duration-150 ease-in-out uppercase border border-solid font-bold last:mr-0 mr-2  text-slate-800 bg-white border-white active:bg-slate-100 active:border-slate-100 text-xs px-3 py-2 shadow hover:shadow-md rounded-md">
                                                    <FontAwesomeIcon icon={faCog} className="mr-2 text-sm" />
                                                    <FontAwesomeIcon icon={faCaretDown} className="mr-2 text-sm" />
                                                </button>
                                                <div className="block  z-50">
                                                    <div className="origin-top-right bg-white text-base float-left p-2 border list-none text-left rounded-lg shadow-lg min-w-48 transition-all duration-100 ease-in transform opacity-0 scale-95 absolute ">
                                                        <a
                                                            href="javascript:;"
                                                            className="text-sm px-3 py-2 block w-full whitespace-nowrap bg-transparent hover:bg-slate-100 rounded transition-all duration-100"
                                                        >
                                                            Edit Profile
                                                        </a>
                                                        <a
                                                            href="javascript:;"
                                                            className="text-sm px-3 py-2 block w-full whitespace-nowrap bg-transparent hover:bg-slate-100 rounded transition-all duration-100"
                                                        >
                                                            Settings
                                                        </a>
                                                        <a
                                                            href="javascript:;"
                                                            className="text-sm px-3 py-2 block w-full whitespace-nowrap bg-transparent hover:bg-slate-100 rounded transition-all duration-100"
                                                        >
                                                            Log out
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="block py-4">
                <div className="container mx-auto px-4">
                    <hr className="mb-4 border-b-1 border-slate-200" />
                    <div className="flex flex-wrap items-center md:justify-between justify-center">
                        <div className="w-full md:w-4/12 px-4">
                            <div className="text-center mb-2 md:text-left md:mb-0">
                                <a
                                    href="https://www.creative-tim.com/?ref=npr-footeradmin"
                                    target="_blank"
                                    className="text-sm text-slate-500 font-semibold py-1 text-center md:text-left"
                                >
                                    Copyright © 2024 ForcePower
                                </a>
                            </div>
                        </div>
                        <div className="w-full md:w-8/12 px-4">
                            <ul className="flex flex-wrap list-none md:justify-end  justify-center">
                                <li>
                                    <a
                                        href=""
                                        target="_blank"
                                        className="text-slate-700 hover:text-slate-900 text-sm font-semibold block py-1 px-3"
                                    >
                                        Force Power
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href=""
                                        target="_blank"
                                        className="text-slate-700 hover:text-slate-900 text-sm font-semibold block py-1 px-3"
                                    >
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href=""
                                        target="_blank"
                                        className="text-slate-700 hover:text-slate-900 text-sm font-semibold block py-1 px-3"
                                    >
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href=""
                                        target="_blank"
                                        className="text-slate-700 hover:text-slate-900 text-sm font-semibold block py-1 px-3"
                                    >
                                        Licenses
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Participants
