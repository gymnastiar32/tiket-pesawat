export default function DetailPenumpang() {

    return (
        <div className="col-span-12 border p-4 rounded-md">
            <div className="font-semibold mb-4">
                Data Penumpang
            </div>
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12">
                    <span className="block mb-3 font-semibold">Tuan Gymnastiar Ramadhan</span>
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-6">
                            <label className="inline-block text-md text-gray-500">No. Handphone</label>
                            <p>081519432610</p>
                        </div>
                        <div className="col-span-6">
                            <label className="inline-block text-md text-gray-500">Email</label>
                            <p>gymnastiar32@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}