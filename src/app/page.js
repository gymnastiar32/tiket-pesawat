"use client";

import { useState } from 'react';

export default function Home() {
  const [tipeTrip, setTipeTrip] = useState("one-way");

  return (
    <main className="bg-image min-h-[100vh] p-24">
      <div className="w-[80%] mx-auto z-10 mt-[60px]">
        <h1 className="text-white text-center text-[40px] mb-5 z-10">Book Tiket Pesawat</h1>
        <div className="w-full rounded-xl shadow-lg bg-white p-6">
          <form>
            <div className="grid grid-cols-12 gap-6">
              {/* <div className="col-span-12 flex">
                <div>
                  <input type="radio" className="peer hidden" name="trip-type" id="one-trip" value="one-trip" checked={tipeTrip == "one-way"} onChange={() => setTipeTrip("one-way")} />
                  <label onClick={() => setTipeTrip("one-way")} className="mr-3 block cursor-pointer py-2 px-5 rounded-md bg-gray-100 hover:bg-gray-200 peer-checked:text-white peer-checked:bg-indigo-500" for="one-trip">
                    Sekali Jalan
                  </label>
                </div>
                <div>
                  <input type="radio" className="peer hidden" name="trip-type" id="round-trip" value="round-trip" checked={tipeTrip == "round-trip"} onChange={() => setTipeTrip("round-trip")} />
                  <label onClick={() => setTipeTrip("round-trip")} className="mr-3 block cursor-pointer py-2 px-5 rounded-md bg-gray-100 hover:bg-gray-200 peer-checked:text-white peer-checked:bg-indigo-500" for="round-trip">
                    Pulang Pergi
                  </label>
                </div>
                <div className="ml-auto rounded-md p-2">
                  <label className="inline-block mr-2" for="jumlah-penumpang">Penumpang</label>
                  <input type="number" name="jumlah-penumpang" min={1} max={7} defaultValue="1" className="w-20 border border-gray-200 rounded-md appearance-none py-1 px-2.5 focus:ring-2 focus:ring-indigo-400" />
                </div>
              </div>
              <hr className="col-span-12" /> */}
              <div className="col-span-12">
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-6">
                    <label className="inline-block mb-2 text-md text-gray-500 " for="asal">Dari</label>
                    <select id="asal" name="asal" className="block w-full border border-gray-200 appearance-none rounded-md py-2 px-2.5 focus:ring-2 focus:ring-indigo-400">
                      <option value="jakarta">Jakarta</option>
                      <option value="bandung">Bandung</option>
                      <option value="yogyakarta">Yogyakarta</option>
                      <option value="bali">Bali</option>
                    </select>
                  </div>
                  <div className="col-span-6">
                    <label className="inline-block mb-2 text-md text-gray-500 " for="tujuan">Tujuan</label>
                    <select id="tujuan" name="tujuan" className="block w-full border border-gray-200 appearance-none rounded-md py-2 px-2.5 focus:ring-2 focus:ring-indigo-400">
                      <option value="jakarta">Jakarta</option>
                      <option value="bandung">Bandung</option>
                      <option value="yogyakarta">Yogyakarta</option>
                      <option value="bali">Bali</option>
                    </select>
                  </div>
                  <div className="col-span-6 flex">
                    <div className="w-full">
                      <label className="inline-block mb-2 text-md text-gray-500 " for="keberangkatan">Tanggal Keberangkatan</label>
                      <div className="relative w-full">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none z-10">
                          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                          </svg>
                        </div>
                        <input type="date" name="tanggal-berangkat" min="2024-06-24" className="block w-full border border-gray-200 appearance-none rounded-md py-2 pl-10 pr-2.5 focus:ring-2 focus:ring-indigo-400" placeholder="Select date" />
                        {/* <input datepicker="true" type="text" name="tanggal-berangkat" min="2024-06-24" className="block w-full border border-gray-200 appearance-none rounded-md py-2 pl-10 pr-2.5 focus:ring-2 focus:ring-indigo-400" placeholder="Select date" /> */}
                      </div>
                    </div>
                    <div className={`w-full ml-4 ${tipeTrip == 'one-way' ? "hidden" : ""}`}>
                      <label className="inline-block mb-2 text-md text-gray-500 " for="tanggal-pulang">Tanggal Pulang</label>
                      <div className="relative w-full">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none z-10">
                          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                          </svg>
                        </div>
                        <input type="date" name="tanggal-pulang" className="block w-full border border-gray-200 appearance-none rounded-md py-2 pl-10 pr-2.5 focus:ring-2 focus:ring-indigo-400" placeholder="Select date" />
                        {/* <input datepicker="true" type="text" name="tanggal-pulang" className="block w-full border border-gray-200 appearance-none rounded-md py-2 pl-10 pr-2.5 focus:ring-2 focus:ring-indigo-400" placeholder="Select date" /> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-span-6">
                    <label className="inline-block mb-2 text-md text-gray-500 " for="kelas">Kelas</label>
                    <select id="kelas" name="kelas" className="block w-full border border-gray-200 appearance-none rounded-md py-2 px-2.5 focus:ring-2 focus:ring-indigo-400">
                      <option value="ekonomi">Economy</option>
                      <option value="ekonomi-premium">Economy Premium</option>
                      <option value="bisnis">Bussiness</option>
                      <option value="first-class">First Class</option>
                    </select>
                  </div>
                  <div className="col-span-12 text-center">
                    <button className="ml-auto mr-auto flex items-center justify-center bg-indigo-500 text-white py-2 px-5 rounded-md hover:bg-indigo-700 active:shadow-inner">
                      Cari
                      <svg className="ml-2 w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
