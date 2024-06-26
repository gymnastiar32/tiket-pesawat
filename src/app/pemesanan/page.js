
import LayoutCard from "../component/layout-card/page";
import FlightSum from "../component/flight-sum/page";
import FlightForm from "../component/flight-form/page";

export default function Pemesanan() {
    return (
        <LayoutCard title="Data Pemesanan">
            <FlightSum />
            <FlightForm />
        </LayoutCard>
    );
}
