
import LayoutCard from "../component/layout-card/page";
import FlightSum from "../component/flight-sum/page";
import FlightForm from "../component/flight-form/page";
import FormPemesan from "../component/form-pemesan/page"
import FormPenumpang from "../component/form-penumpang/page"

export default function Pemesanan() {
    return (
        <LayoutCard title="Data Pemesanan">
            <FlightSum />
            <FlightForm>
                <FormPemesan />
                <FormPenumpang />
            </FlightForm>
        </LayoutCard>
    );
}
