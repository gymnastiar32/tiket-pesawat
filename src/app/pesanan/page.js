import LayoutCard from "../component/layout-card/page";

export default function Pesanan() {
    return (
        <LayoutCard title="Pesanan Anda">
            <div className="col-span-12">


                <div class="relative overflow-x-auto">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Asal
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Tujuan
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Tanggal/Waktu
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Aksi
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white border-b">
                                <td class="px-6 py-4">
                                    Jakarta
                                </td>
                                <td class="px-6 py-4">
                                    Bali
                                </td>
                                <td class="px-6 py-4">
                                    12/07/2024 14:00:00
                                </td>
                                <td class="px-6 py-4">
                                    <a href="detail-pesanan" className="inline-flex items-center justify-center bg-indigo-600 text-white py-2 px-5 rounded-md hover:bg-indigo-700 active:shadow-inner">
                                        Detail
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </LayoutCard>
    );
}
