'use client'
import React, { useEffect, useState } from 'react';

export default function FlightForm({ children }) {

    const [currentURL, setCurrentURL] = useState('');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setCurrentURL(window.location.pathname);
        }
    }, []);

    console.log(currentURL);

    return (
        <div className="col-span-12 lg:col-span-7 xl:col-span-9 ">
            <form action={currentURL == "/pemesanan" ? "pemesanan-sum" : "pembayaran"}>
                <div className="grid grid-cols-12 gap-6">

                    {children}
                    <div className="col-span-12 flex justify-end">
                        <button className="flex items-center justify-center bg-gray-200 mr-2 text-black py-2 px-7 rounded-md hover:bg-gray-300 active:shadow-inner">Kembali</button>
                        <button className="flex items-center justify-center bg-indigo-600 text-white py-2 px-7 rounded-md hover:bg-indigo-700 active:shadow-inner">Lanjutkan</button>
                    </div>
                </div>
            </form>
        </div>
    )
}