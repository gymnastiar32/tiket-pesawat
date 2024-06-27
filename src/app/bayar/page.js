import LayoutCard from "../component/layout-card/page";

export default function Bayar() {
    return (
        <LayoutCard title="Bayar" cardWidth="max-w-lg">
            <div className="col-span-12 text-center">
                <div className="mb-5">
                    <span className="block text-gray-400">Tujuan</span>
                    <span className="block text-2xl font-semibold">BCA</span>
                </div>
                <div className="mb-5">
                    <span className="block text-gray-400">Nomor Virtual Account</span>
                    <span className="block text-2xl font-semibold">0000 0000 0000 0000</span>
                </div>

                <div className="border p-4 rounded-md mb-5">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12 py-3 flex justify-between">
                            <span className="font-semibold">Harga Bayar</span>
                            <span className="text-xl font-semibold text-indigo-600">Rp 1.150.000</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center">
                <button className="flex items-center justify-center bg-indigo-600 text-white py-2 px-7 rounded-md hover:bg-indigo-700 active:shadow-inner">Sudah Bayar</button>
                </div>
            </div>
        </LayoutCard>
    );
}
