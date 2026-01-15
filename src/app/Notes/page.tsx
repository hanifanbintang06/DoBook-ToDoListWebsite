'use client'

import ButtonDropDown from "@/Components/ButtonDropDown";
import NotesList from "@/Components/NotesList";
import SearchBar from "@/Components/SearchBar";

export default function Notes() {
  return (
    <div className="w-full h-140 flex flex-row gap-4">
      <div className="w-full h-full p-4 rounded-2xl bg-white flex flex-col gap-3">
        <div className="w-full h-fit flex flex-row items-center gap-4">
            <input type="text" className="w-full text-lg font-medium mr-auto focus:outline-none" />
            <p className="text-sm">12/12/25</p>
            <ButtonDropDown />
        </div>
        <textarea className="w-full h-full flex items-start focus:outline-none" />
      </div>
      <div className="w-120 p-4 rounded-2xl bg-white flex flex-col gap-6">
        <div className="w-full h-fit flex flex-row gap-3">
          <SearchBar />
          <ButtonDropDown />
        </div>
        <div className="w-auto h-full gap-5 flex flex-col overflow-hidden">
        <NotesList />
        </div>
      </div>
    </div>
  );
}
