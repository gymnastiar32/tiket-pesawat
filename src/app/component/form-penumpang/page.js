"use client"
import { useState, useRef } from "react"

export default function FormPenumpang() {

    const [noNb, setNoNb] = useState(false);
    const inputNB = useRef(null);

    const checkState = (event) => {

        if (event.target.checked == false) {
            setNoNb(false)
        } else {
            setNoNb(true)
            inputNB.current.value = ''
        }
    }

    return (
        <div className="col-span-12 border p-4 rounded-md">
            <div className="font-semibold mb-4">
                Data Penumpang 1
            </div>
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-6">
                    <label className="inline-block mb-2 text-md text-gray-500 " for="titel-pnp">Titel <span className="text-red-500">*</span></label>
                    <select id="titel-pnp" name="titel-pnp" className="block w-full border border-gray-200 appearance-none rounded-md py-2 px-2.5 focus:ring-2 focus:ring-indigo-400" required>
                        <option value="tuan">Tuan</option>
                        <option value="nyonya">Nyonya</option>
                        <option value="nona">Nona</option>
                    </select>
                </div>
                <div className="col-span-6 row-start-2">
                    <label className="inline-block mb-2 text-md text-gray-500 " for="nama-depan-tengah-pnp">Nama Depan & Tengah <span className="text-red-500">*</span></label>
                    <input type="text" id="nama-depan-tengah-pnp" name="nama-depan-tengah-pnp" className="block w-full border border-gray-200 appearance-none rounded-md py-2 px-2.5 focus:ring-2 focus:ring-indigo-400" required />
                </div>
                <div className="col-span-6 row-start-2">
                    <label className="inline-block mb-2 text-md text-gray-500 " for="nama-belakang-pnp">Nama Belakang <span className="text-red-500">*</span></label>
                    <input type="text" id="nama-belakang-pnp" ref={inputNB} name="nama-belakang-pnp" className="block w-full border border-gray-200 appearance-none rounded-md py-2 px-2.5 focus:ring-2 focus:ring-indigo-400 disabled:cursor-not-allowed disabled:bg-gray-100" disabled={noNb} required />
                </div>
                <div className="col-span-12">
                    <input type="checkbox" name="disable-nama-belakang-pnp" onChange={checkState} id="disable-nama-belakang-pnp" className="mr-2" />
                    <label for="disable-nama-belakang-pnp" className="inline-block text-md text-gray-500 ">Nama penumpang hanya satu kata</label>
                </div>
                <div className="col-span-6">
                    <label className="inline-block mb-2 text-md text-gray-500 " for="phone">No. Handphone <span className="text-red-500">*</span></label>
                    <input type="tel" id="phone-pnp" name="phone-pnp" className="block w-full border border-gray-200 appearance-none rounded-md py-2 px-2.5 focus:ring-2 focus:ring-indigo-400" required />
                </div>
                <div className="col-span-6">
                    <label className="inline-block mb-2 text-md text-gray-500 " for="email">Email <span className="text-red-500">*</span></label>
                    <input type="email" id="email-pnp" name="email-pnp" className="block w-full border border-gray-200 appearance-none rounded-md py-2 px-2.5 focus:ring-2 focus:ring-indigo-400" required />
                </div>
            </div>
        </div>
    )
}