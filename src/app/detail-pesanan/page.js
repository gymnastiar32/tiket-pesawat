import LayoutCard from "../component/layout-card/page";
import FlightSum from "../component/flight-sum/page";
import DetailPenumpang from "../component/detail-penumpang/page";
import DetailPemesan from "../component/detail-pemesan/page";

export default function DetailPesanan() {
    return (
        <LayoutCard title="Detail Pesanan Anda">
            <FlightSum />
            <div className="col-span-12 lg:col-span-7 xl:col-span-9 ">
                <div className="grid grid-cols-12 gap-6">
                    <DetailPemesan />
                    <DetailPenumpang />
                    <div className="col-span-12 p-4 mb-4 text-sm text-indigo-800 rounded-lg bg-indigo-50 ">
                        <p className="font-medium">E-Ticket sudah dikirimkan ke email pemesan</p>
                    </div>
                    <div className="col-span-12 flex justify-end mt-4">
                        <a href="/pesanan" className="cursor-pointer flex items-center justify-center bg-gray-200 text-black py-2 px-7 rounded-md hover:bg-gray-300 active:shadow-inner">Kembali</a>
                    </div>
                </div>
            </div>
        </LayoutCard>
    );
}
