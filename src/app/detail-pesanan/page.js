import LayoutCard from "../component/layout-card/page";
import FlightSum from "../component/flight-sum/page";
import DetailPenumpang from "../component/detail-penumpang/page";

export default function DetailPesanan() {
    return (
        <LayoutCard title="Detail Pesanan Anda">
            <FlightSum />
            <div className="col-span-12 lg:col-span-7 xl:col-span-9 ">
                <DetailPenumpang />
                <div className="flex justify-end mt-4">
                    <a href="/pesanan" className="cursor-pointer flex items-center justify-center bg-gray-200 text-black py-2 px-7 rounded-md hover:bg-gray-300 active:shadow-inner">Kembali</a>
                </div>
            </div>
        </LayoutCard>
    );
}
