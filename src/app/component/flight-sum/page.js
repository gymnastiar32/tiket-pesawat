export default function FlightSum() {
    return (
        <div className="col-span-12 lg:col-span-5 xl:col-span-3 border rounded-md h-min">
            <div className="flex justify-center border-b p-4">
                <span className="font-semibold">Jakarta - Bali/Denpasar</span>
            </div>
            <div className="p-4 text-center">
                <span className="text-sm font-semibold">
                    Pergi - Selasa, 2 Juli 2024
                </span>
                <div className="flex justify-center mt-2">
                    <img className="w-10 mr-2" src="img/maskapai/transnusa.png"/>
                    <div className="font-semibold text-sm">
                        TransNusa
                        <span className="block text-sm font-normal text-gray-400">Economy</span>
                    </div>
                </div>
                <div className="mt-2 flex items-center justify-center">
                    <div className="mr-2 ">
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
                    <div className="ml-2 ">
                        <span className="block text-center ">
                            19:02
                        </span>
                        <span className="block text-center text-sm text-gray-400">
                            DPS
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}