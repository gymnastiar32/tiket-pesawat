"use client";

export default function FlightCard({ id }) {

    return (
        <div className="col-span-12 ">
            <input type="radio" className="hidden peer" value={id} name="penerbangan" id={id} />
            <div className="p-6 border rounded-md hover:bg-gray-100 peer-checked:ring-2 peer-checked:ring-indigo-500 ">
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-4 flex items-center justify-start">
                        <img className="w-20 mr-2" src="img/maskapai/transnusa.png" />
                        TransNusa
                    </div>
                    <div className="col-span-4 flex items-center justify-center">
                        <div className="mx-2 ">
                            <span className="block text-center ">
                                17:30
                            </span>
                            <span className="block text-center text-sm text-gray-400">
                                CGK
                            </span>
                        </div>
                        <div className="mx-2 text-center text-sm text-gray-400">
                            1h32m
                            <hr />
                        </div>
                        <div className="mx-2 ">
                            <span className="block text-center ">
                                19:02
                            </span>
                            <span className="block text-center text-sm text-gray-400">
                                DPS
                            </span>
                        </div>
                    </div>
                    <div className="col-span-4 flex flex-col items-end justify-center">
                        <span className="text-xl font-semibold text-indigo-600 mb-2">Rp 1.000.000<span className="text-sm font-medium text-gray-500">/org</span></span>
                        <label for={id} className="cursor-pointer flex items-center justify-center bg-indigo-600 text-white py-1 px-7 rounded-md hover:bg-indigo-700 active:shadow-inner">Pilih</label>
                    </div>
                </div>
            </div>
        </div>
    )
}