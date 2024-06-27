import FlightSidebar from "../component/flight-sidebar/page";
import LayoutCard from "../component/layout-card/page";
import FlightList from "../component/flight-list/page";

export default function Penerbangan() {
    return (
        <LayoutCard title="Pilih Penerbangan">
            <FlightSidebar />
            <FlightList />
        </LayoutCard>
    );
}
