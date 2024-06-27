export default function FlightSidebar() {
    return (
        <div className="col-span-12 lg:col-span-3">
            <div className="border rounded-md h-min p-3 mb-6">
                <div className="flex justify-between p-3 pb-0">
                    <span className="font-semibold">Jakarta(JKTA)</span>
                    <svg class="w-6 h-6 text-black dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                    </svg>
                    <span className="font-semibold">Bali(DPS)</span>
                </div>
                <div className="px-3">
                    <span className="text-sm text-gray-400 font-medium">
                        Pergi - Selasa, 2 Juli 2024
                    </span>
                    <span className="text-sm text-gray-400 mx-2">
                        |
                    </span>
                    <span className="text-sm text-gray-400 font-medium">
                        Economy
                    </span>
                </div>
            </div>
            <div className="border rounded-md h-min p-3">
                <div className="flex justify-between p-3">
                    <span className="font-semibold">Filter</span>
                    <a className="cursor-pointer text-indigo-500 hover:text-indigo-700">Reset</a>
                </div>
                <div>
                    <ul>
                        <li className="py-1.5 px-3">
                            Maskapai
                        </li>
                        <li>
                            <label for="citilink" className="block cursor-pointer py-1.5 px-3 mb-2 hover:bg-gray-100 rounded-md">
                                <input type="checkbox" name="maskapai" id="citilink" />
                                &nbsp;
                                Citilink
                            </label>
                        </li>
                        <li>
                            <label for="garuda" className="block cursor-pointer py-1.5 px-3 mb-2 hover:bg-gray-100 rounded-md">
                                <input type="checkbox" name="maskapai" id="garuda" />
                                &nbsp;
                                Garuda Indonesia
                            </label>
                        </li>
                        <li>
                            <label for="transnusa" className="block cursor-pointer py-1.5 px-3 mb-2 hover:bg-gray-100 rounded-md">
                                <input type="checkbox" name="maskapai" id="transnusa" />
                                &nbsp;
                                TransNusa
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}