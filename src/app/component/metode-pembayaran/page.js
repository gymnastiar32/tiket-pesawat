export default function MetodePembayaran() {
    return (
        <div className="col-span-12 lg:col-span-9">

            <div id="accordion-collapse" className="mb-6" data-accordion="collapse">
                <h2 id="accordion-collapse-heading-1">
                    <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                        <span>Virtual Account</span>
                        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                        </svg>
                    </button>
                </h2>
                <div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
                    <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                        <ul>
                            <li className="mb-3">
                                <label className="cursor-pointer flex items-center" for="bca">
                                    <input type="radio" checked name="metode-pembayaran" className="mr-2" id="bca" />
                                    Virtual Account BCA
                                </label>
                            </li>
                            <li className="mb-3">
                                <label className="cursor-pointer flex items-center" for="mandiri">
                                    <input type="radio" name="metode-pembayaran" className="mr-2" id="mandiri" />
                                    Virtual Account Mandiri
                                </label>
                            </li>
                            <li>
                                <label className="cursor-pointer flex items-center" for="bni">
                                    <input type="radio" name="metode-pembayaran" className="mr-2" id="bni" />
                                    Virtual Account BNI
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
                <h2 id="accordion-collapse-heading-2">
                    <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                        <span>Minimarket</span>
                        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                        </svg>
                    </button>
                </h2>
                <div id="accordion-collapse-body-2" class="hidden" aria-labelledby="accordion-collapse-heading-2">
                    <div class="p-5 border border-gray-200 dark:border-gray-700">
                        <ul>
                            <li className="mb-3">
                                <label className="cursor-pointer flex items-center" for="bca">
                                    <input type="radio" name="metode-pembayaran" className="mr-2" id="bca" />
                                    Alfamart/Alfamidi
                                </label>
                            </li>
                            <li className="mb-3">
                                <label className="cursor-pointer flex items-center" for="mandiri">
                                    <input type="radio" name="metode-pembayaran" className="mr-2" id="mandiri" />
                                    Indomaret
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="border p-4 rounded-md">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 py-3 flex justify-between">
                        <span className="font-semibold">Harga Total</span>
                        <span className="text-xl font-semibold text-indigo-600">Rp 1.150.000</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-end justify-center py-6">
                <button className="flex items-center justify-center bg-indigo-600 text-white py-2 px-7 rounded-md hover:bg-indigo-700 active:shadow-inner">Bayar</button>
            </div>
        </div>
    )
}