'use client'

import ButtonDropDown from "@/Components/ButtonDropDown";
import SearchBar from "@/Components/SearchBar";

export default function Notes() {
  return (
    <div className="w-full min-h-140 flex flex-row gap-4">
      <div className="w-full p-4 rounded-2xl bg-white flex flex-col gap-3">
        <div className="w-full h-fit flex flex-row items-center">
            <h1 className="text-lg font-medium mr-auto">Calculus Note</h1>
            <ButtonDropDown />
        </div>
        <input type="text" className="w-full h-full flex items-start" />
      </div>
      <div className="w-120 p-4 rounded-2xl bg-white flex flex-col gap-6">
        <div className="w-full h-fit flex flex-row gap-3">
          <SearchBar />
          <ButtonDropDown />
        </div>
        <div className="w-auto h-fit gap-4 flex flex-col">
          <h2 className="text-sm text-[#767676] px-5">Menu</h2>
          <div className="w-auto h-fit flex flex-col">
              halo
          </div>
      </div>
      </div>
    </div>
  );
}
