import LayoutCard from "../component/layout-card/page";
import FlightSum from "../component/flight-sum/page";
import FlightForm from "../component/flight-form/page";
import DetailPemesan from "../component/detail-pemesan/page";
import DetailPenumpang from "../component/detail-penumpang/page";

export default function PemesananSum() {
    return (
        <LayoutCard title="Pemesanan Anda">
            <FlightSum />
            <FlightForm>
                <DetailPemesan />
                <DetailPenumpang />
                <div className="col-span-12 border p-4 rounded-md">
                    <div className="font-semibold mb-4">
                        Rincian Harga
                    </div>
                    <div className="grid grid-cols-12">
                        <div className="col-span-12 border-b py-3 flex justify-between">
                            <span className="font-semibold">Harga yang Anda Bayar</span>
                            <span className="text-xl font-semibold text-indigo-600">Rp 1.150.000</span>
                        </div>
                        <div className="col-span-12 border-b py-3 flex justify-between">
                            <span className="text-sm">TransNusa x 1 </span>
                            <span className="text-sm">Rp 1.000.000</span>
                        </div>
                        <div className="col-span-12 py-3 flex justify-between">
                            <span className="text-sm">+ Asuransi Perjalanan </span>
                            <span className="text-sm">Rp 150.000</span>
                        </div>
                    </div>
                </div>
            </FlightForm>
        </LayoutCard>
    );
}
