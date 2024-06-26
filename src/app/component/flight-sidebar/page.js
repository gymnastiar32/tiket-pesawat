export default function FlightSidebar() {
    return (
        <div className="col-span-12 lg:col-span-3 border rounded-md p-3">
            <div className="flex justify-between p-3">
                <span className="font-semibold">Filter</span>
                <a className="cursor-pointer text-indigo-500 hover:text-indigo-700">Reset</a>
            </div>
            <div className="border-b">
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
    )
}