"use client"
import { useState, useRef } from "react"

export default function FormPemesan() {

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
                Data Pemesan
            </div>
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-6">
                    <label className="inline-block mb-2 text-md text-gray-500 " for="nama-depan-tengah">Nama Depan & Tengah <span className="text-red-500">*</span></label>
                    <input type="text" id="nama-depan-tengah" name="nama-depan-tengah" className="block w-full border border-gray-200 appearance-none rounded-md py-2 px-2.5 focus:ring-2 focus:ring-indigo-400" required />
                </div>
                <div className="col-span-6">
                    <label className="inline-block mb-2 text-md text-gray-500 " for="nama-belakang">Nama Belakang <span className="text-red-500">*</span></label>
                    <input type="text" id="nama-belakang" ref={inputNB} name="nama-belakang" className="block w-full border border-gray-200 appearance-none rounded-md py-2 px-2.5 focus:ring-2 focus:ring-indigo-400 disabled:cursor-not-allowed disabled:bg-gray-100" disabled={noNb} required />
                </div>
                <div className="col-span-12">
                    <input type="checkbox" name="disable-nama-belakang" onChange={checkState} id="disable-nama-belakang" className="mr-2" />
                    <label for="disable-nama-belakang" className="inline-block text-md text-gray-500 ">Nama pemesan hanya satu kata</label>
                </div>
                <div className="col-span-6">
                    <label className="inline-block mb-2 text-md text-gray-500 " for="phone">No. Handphone <span className="text-red-500">*</span></label>
                    <input type="tel" id="phone" name="phone" className="block w-full border border-gray-200 appearance-none rounded-md py-2 px-2.5 focus:ring-2 focus:ring-indigo-400" required />
                </div>
                <div className="col-span-6">
                    <label className="inline-block mb-2 text-md text-gray-500 " for="email">Email <span className="text-red-500">*</span></label>
                    <input type="email" id="email" name="email" className="block w-full border border-gray-200 appearance-none rounded-md py-2 px-2.5 focus:ring-2 focus:ring-indigo-400" required />
                </div>
            </div>
        </div>
    )
}