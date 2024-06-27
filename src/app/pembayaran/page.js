import LayoutCard from "../component/layout-card/page";
import FlightSum from "../component/flight-sum/page";
import MetodePembayaran from "../component/metode-pembayaran/page";

export default function PemesananSum() {
    return (
        <LayoutCard title="Pilih Metode Pembayaran">
            <FlightSum />
            <MetodePembayaran />
        </LayoutCard>
    );
}
