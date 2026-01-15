'use client'

import { MagnifyingGlass } from "@phosphor-icons/react";

type SearchBarProps = {
};

export default function SearchBar({}) {
    return(
        <div className="relative w-full h-full text-[#767676]">
            <input className="w-full h-fit flex flex-row gap-3 py-3 pl-12 pr-3 text-sm
            bg-[#F4F5FC] rounded-2xl focus:outline-none"
            placeholder="Search" />
            <MagnifyingGlass size={18} className="absolute top-1/2 -translate-y-1/2 left-4" />
        </div>
    )
}