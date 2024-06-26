"use client";
import FlightCard from "../flight-card/page";

export default function FlightList() {

    return (
        <div className="col-span-12 lg:col-span-9 p-3 border rounded-md">
            <div className="flex flex-col lg:flex-row gap-4 mb-6">
                <div className="w-full cursor-pointer p-3.5 rounded-md border focus:ring-2 focus:ring-indigo-500">
                    <span className="block text-center text-indigo-500">Harga Terendah</span>
                    <span className="block text-center text-sm text-gray-500">Rp 1.000.000</span>
                </div>
                <div className="w-full cursor-pointer p-3.5 rounded-md border focus:ring-2 focus:ring-indigo-500">
                    <span className="block text-center text-indigo-500">Durasi Tersingkat</span>
                    <span className="block text-center text-sm text-gray-500">Rp 1.000.000</span>
                </div>
                <div className="p-3.5 text-center">
                    <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center" type="button">
                        Urutkan
                        <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                        </svg>
                    </button>
                    <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow border w-44 dark:bg-gray-700">
                        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                            <li className="text-left">
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100">
                                    Harga Tertinggi
                                </a>
                            </li>
                            <li className="text-left">
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100">
                                    Harga Terendah
                                </a>
                            </li>
                            <li className="text-left">
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100">
                                    Waktu Berangkat Paling Awal
                                </a>
                            </li>
                            <li className="text-left">
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100">
                                    Waktu Berangkat Paling Akhir
                                </a>
                            </li>
                            <li className="text-left">
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100">
                                    Waktu Tiba Paling Awal
                                </a>
                            </li>
                            <li className="text-left">
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100">
                                    Waktu Tiba Paling Akhir
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-4">
                <FlightCard />
                <FlightCard />
                <FlightCard />
                <FlightCard />
            </div>
        </div>
    )
}